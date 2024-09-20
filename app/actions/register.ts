"use server";

import { RegisterSchema } from "@/schemas";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";
import * as z from "zod";
import { getUserByEmail } from "./data";

export const Reg = async (values: z.infer<typeof RegisterSchema>) => {
    console.log(values);
    // const { email, password, name, type } = values;
    // const existingUser = await getUserByEmail(email);

    // if (existingUser) {
    //     return { error: "Email already in use" };
    // }

    // const hashedPassword = await bcryptjs.hash(password, 10);

    // await db.user.create({
    //     data: {
    //         email,
    //         password: hashedPassword,
    //         name,
    //         type
    //     }
    // });
    const validatedFields = RegisterSchema.safeParse(values);
    if(!validatedFields.success) {
      return { error: "Invalid credentials" };
  } 
  const { email, password, name, type } = validatedFields.data;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
      return { error: "Email already in use" };
  }
  await db.user.create({
    data: {
      email : email,
      password: hashedPassword,
      name : name,
      role: type,
      isVerified: false
    }
  });
    return { success: "User created!" };
}
