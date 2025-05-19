import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

export const loginSchema = z.object({
  mobile: z.string(),
  password: z.string(),
});

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        mobile: { label: "mobile", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.mobile || !credentials?.password) {
          throw new Error("Mobile number and Password are required");
        }

        try {
          const { mobile, password } = credentials;

          // Perform the login request with the raw fetch API to access the response headers
          const apiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ mobile, password }),
            credentials: 'include', // Include cookies in the request
          });

          // Check if the response is OK
          if (!apiResponse.ok) {
            const errorData = await apiResponse.json().catch(() => ({}));
            
            // Handle specific error codes
            if (apiResponse.status === 422) {
              throw new Error(errorData.message || "WRONG_CREDENTIALS");
            }
            
            throw new Error(errorData.message || "Authentication failed");
          }

          // Get cookies from response headers
          const cookies = apiResponse.headers.get('set-cookie');
          let accessToken = null;

          // Extract token from cookies if present
          if (cookies) {
            const tokenMatch = cookies.match(/customer_access_token=([^;]+)/);
            if (tokenMatch && tokenMatch[1]) {
              accessToken = tokenMatch[1];
            }
          }

          // If no token in cookies, try to get it from response body
          if (!accessToken) {
            const data = await apiResponse.json().catch(() => ({}));
            accessToken = data.customer_access_token;
          }

          // If we have a token, return user data
          if (accessToken) {
            return {
              id: mobile,
              mobile,
              accessToken,
            };
          }
          
          throw new Error("Failed to retrieve customer access token");
        } catch (error) {
          console.error("Authentication error:", error);
          throw new Error(
            error instanceof Error ? error.message : "Authentication failed"
          );
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.accessToken = user.accessToken;
        token.mobile = user.mobile;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user = {
        mobile: token.mobile,
        accessToken: token.accessToken,
      };
      return session;
    },
  },
};
