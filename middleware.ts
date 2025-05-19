import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Define the login route
const LOGIN_ROUTE = "/auth/login";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: "nr^6w0!&6@v90=^2qx69&-jn#@2ox5l8dy&_b&=2f#gys&j%)c",
  });

  const path = request.nextUrl.pathname;

  // Check if the current path is the login route
  const isLoginPage = path === LOGIN_ROUTE;

  if (isLoginPage) {
    if (token) {
      // If user is already logged in, redirect to home page
      return NextResponse.redirect(new URL("/", request.url));
    }
    // Allow access to login page if not logged in
    return NextResponse.next();
  }

  // For all other routes, check for authentication
  if (!token) {
    // If not authenticated, redirect to login page
    return NextResponse.redirect(new URL(LOGIN_ROUTE, request.url));
  }

  // Allow access to all other routes if authenticated
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};