// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("customer_access_token")?.value;
  
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Protect specific routes
export const config = {
  matcher: ["/((?!login|api/login|_next|static|$).*)", "/profile/:path*"],
};
