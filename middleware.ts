import { NextResponse, NextRequest } from "next/server";
export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const session = req.cookies.get("token");
    if (pathname == "/") {
        if (session) {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        } else {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    } else if (pathname.startsWith("/dashboard")) {
        if (!session) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    } else if (pathname.startsWith("/login")) {
        if (session) {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }
    }
    return NextResponse.next();
}
