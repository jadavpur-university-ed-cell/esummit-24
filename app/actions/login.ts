"use server";

import { LoginSchema } from "@/components/Login";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { signIn } from "next-auth/react";
import * as z from "zod";

export async function Log(values: z.infer<typeof LoginSchema>) {
  const { email, password } = values;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    return { error: "Invalid credentials" };
    throw error
  }
}