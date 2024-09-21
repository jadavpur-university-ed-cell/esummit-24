import authConfig from "@/auth.config";
import NextAuth, { NextAuthConfig } from "next-auth";
const { auth } = NextAuth(authConfig);
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, publicRoutes, authRoutes, adminRoutes } from "./route";
// import { NextResponse } from "next/server";
import { notFound, redirect } from "next/navigation";
import { NextResponse } from "next/server";

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    const isAdminRoute = nextUrl.pathname.startsWith(adminRoutes);
    if (isApiAuthRoute) {
        if(!isLoggedIn) {
            return NextResponse.json({message: "Not authenticated"}, {status: 401});
        }
    }
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return;
    }
    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/sign-in", nextUrl));
    }
    if (isAdminRoute) {
        if (isLoggedIn) {
            const userRole = req?.auth?.user?.role;
            if (userRole !== "Admin") {
                console.log("User is not an admin");
                return Response.redirect(new URL("/404", nextUrl));
            }
        }
        return;
    }
    return;
});

export const config = {
    matcher: [
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    ],
  }