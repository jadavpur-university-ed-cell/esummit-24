import { db } from "./db";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const authOptions = {
    session: { strategy: "jwt" },
    callbacks: {
        // @ts-ignore
        async jwt({ token }) {
            console.log(token)
            return token;
        }
    },
    secret: process.env.AUTH_SECRET,
    debug: true,
    ...authConfig
};

//@ts-ignore
export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
