import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host")?.toLowerCase() ?? "";

  if (hostname.startsWith("menu.")) {
    const url = request.nextUrl.clone();

    if (url.pathname !== "/qr") {
      url.pathname = "/qr";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
