import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const id_token = request.cookies.get("id_token")?.value;

  if (!id_token) {
    return NextResponse.redirect(new URL("/account/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/account",
};
