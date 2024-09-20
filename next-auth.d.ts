import NextAuth, { type DefaultSession } from "next-auth"
declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string
            email: string
            name: string
            role: "Admin" | "User"
        }
    }
}