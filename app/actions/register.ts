"use server";

import { RegisterSchema } from "@/components/Register";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";
import * as z from "zod";
import { getUserByEmail } from "./getUserByEmail";

export const Reg = async (values: z.infer<typeof RegisterSchema>) => {
    const { email, password, name, type } = values;
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already in use" };
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    await db.user.create({
        data: {
            email,
            password: hashedPassword,
            name,
            type
        }
    });

    return { success: "User created!" };
}
