import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getPrivyClient } from "./utils/privy-server-client";

const protectedRoutes = ["/dashboard", "/protected"];
const authRoutes = ["/signin"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  // Check for the session cookie
  const sessionCookie = cookies().get("privy-token");
  const token = sessionCookie?.value || "";

  if (authRoutes.includes(path)) {
    return NextResponse.next();
  }

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(
      new URL("/signin?redirect=" + path, req.nextUrl),
    );
  }

  try {
    // Get the Privy client instance and verify the token
    const privy = getPrivyClient();
    await privy.verifyAuthToken(token);
    return NextResponse.next();
  } catch {
    // If the token is invalid, redirect to the login page
    return NextResponse.redirect(
      new URL("/signin?redirect=" + path, req.nextUrl),
    );
  }
}

// Apply middleware to all routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
