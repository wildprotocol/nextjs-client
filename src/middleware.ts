import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getPrivyClient } from "./utils/privy-server-client";

const protectedRoutes = ["/dashboard", "/protected"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  // Check for the session cookie
  const sessionCookie = cookies().get("privy-token");
  const token = sessionCookie?.value || "";

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }

  try {
    // Get the Privy client instance and verify the token
    const privy = getPrivyClient();
    await privy.verifyAuthToken(token);
    return NextResponse.next();
  } catch {
    // If the token is invalid, redirect to the login page
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }
}

// Apply middleware only to specific routes
export const config = {
  matcher: ["/dashboard", "/protected"],
};
