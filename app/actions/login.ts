"use server";

import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import * as z from "zod";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  // const { email, password } = values;
  // console.log(values);
  const validatedFields = LoginSchema.safeParse(values);
  if(!validatedFields.success) {
    return { error: "Invalid credentials" };
  }

  const { email, password } = validatedFields.data;
  try {
    await signIn("credentials", {
      email, password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
    
  }
  catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "An error occurred" };
      }
    }
    throw error;
  }
}