import { getUserByEmail } from "@/app/actions/getUserByEmail";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import * as z from "zod";
import { LoginSchema } from "@/components/Login";

export default {
    providers: [
        Credentials({
            //@ts-ignore
            async authorize(credentials: z.infer<typeof LoginSchema>) {
                const validatedFields = LoginSchema.safeParse(credentials);
                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;
                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;
                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if(passwordsMatch) return user
                }
                return null;
            }
        })
    ],
} satisfies NextAuthConfig