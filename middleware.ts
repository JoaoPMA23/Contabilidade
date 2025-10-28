import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

const ADMIN_PATH = "/admin";

export default withAuth(
  function middleware(request) {
    const token = request.nextauth.token;

    if (
      request.nextUrl.pathname === "/login" &&
      token &&
      request.nextUrl.searchParams.get("callbackUrl") === null
    ) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = ADMIN_PATH;
      redirectUrl.search = "";
      return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.startsWith(ADMIN_PATH)) {
          return token != null;
        }
        return true;
      },
    },
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
