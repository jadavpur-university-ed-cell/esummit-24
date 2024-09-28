import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./app/actions/data";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getUserById } from "./app/actions/data";
import { prisma } from "./prisma/pclient";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
// NOT DOING OAuth for google or github

import bcrypt from "bcryptjs";
export default {
    providers: [
        Credentials({
        async authorize(credentials) {
            const validatedFields = LoginSchema.safeParse(credentials);
            if(validatedFields.success) {
                const { email, password } = validatedFields.data;
                const user = await getUserByEmail(email);
                if (!user || !user.password) return null;
                const passwordMatch = await bcrypt.compare(password, user.password);
                if(passwordMatch) {
                    return user;
                }
            }
            return null;

        }
        })],
        callbacks: {
            async signIn({ user }) {
                const getExistingUser = await getUserById(user.id);
                if (!getExistingUser) {
                    return false;
                }
                return true;
            },
            async session({ session, token }) {
                // console.log({ sessionToken: token });
                if (token.sub && session.user) {
                    session.user.id = token.sub;
                }
                if (token.role && session.user) {
                    session.user.role = token.role as "Admin" | "User";
                }
                return session;
            },
            async jwt({ token }) {
                if (!token.sub) return token;
                const existingUser = await getUserById(token.sub);
                if(!existingUser) {
                    return token;
                }
                token.role = existingUser.role;
                return token;
            }  
        },
        adapter: PrismaAdapter(prisma),
        session:{strategy: "jwt"},
} satisfies NextAuthConfig;