import { NextResponse, type NextRequest } from "next/server";

import { auth } from "@/lib/auth";

const ADMIN_PATH = "/admin";

export async function middleware(request: NextRequest) {
  const session = await auth();

  if (request.nextUrl.pathname.startsWith(ADMIN_PATH)) {
    if (!session?.user) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (
    request.nextUrl.pathname === "/login" &&
    session?.user &&
    request.nextUrl.searchParams.get("callbackUrl") === null
  ) {
    return NextResponse.redirect(new URL(ADMIN_PATH, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
