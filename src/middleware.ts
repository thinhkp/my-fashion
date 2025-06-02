import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { cookies } = request;
  const sessionId = cookies.get("sessionId")?.value;

  // Protected routes that require authentication
  const protectedRoutes = ["/account", "/checkout", "/admin"];

  // Check if the route is protected and there's no session
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute && !sessionId) {
    // Create the login URL with the current path as the returnUrl
    const url = new URL("/auth/login", request.url);
    url.searchParams.set("returnUrl", pathname);

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*", "/checkout/:path*", "/admin/:path*"],
};
