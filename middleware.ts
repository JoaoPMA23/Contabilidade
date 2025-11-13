import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

const ADMIN_PATH = "/admin";
const ACCOUNT_PATH = "/admin/account";

export default withAuth(
  function middleware(request) {
    const token = request.nextauth.token;
    const mustChangePassword = token?.mustChangePassword === true;

    if (
      request.nextUrl.pathname === "/login" &&
      token &&
      request.nextUrl.searchParams.get("callbackUrl") === null
    ) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = mustChangePassword ? ACCOUNT_PATH : ADMIN_PATH;
      redirectUrl.search = "";
      return NextResponse.redirect(redirectUrl);
    }

    if (
      mustChangePassword &&
      request.nextUrl.pathname.startsWith(ADMIN_PATH) &&
      !request.nextUrl.pathname.startsWith(ACCOUNT_PATH)
    ) {
      const enforceUrl = request.nextUrl.clone();
      enforceUrl.pathname = ACCOUNT_PATH;
      enforceUrl.searchParams.set("requirePassword", "true");
      return NextResponse.redirect(enforceUrl);
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
