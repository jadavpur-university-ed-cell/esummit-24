"use client";

import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import CardWrapper from "./CardWrapper"
import { Log } from "@/app/actions/login";
import { useState } from "react";

export const LoginSchema = z.object({
  email: z.string().email({
      message: "Email is required"
  }),
  password: z.string({
      message: "Password is required"
  })
});

type FormFields = z.infer<typeof LoginSchema>

export const Login = () => {
    const [isLloading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormFields>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zodResolver(LoginSchema)
    })

    const onSubmit:SubmitHandler<FormFields> = async (values) => {
        setIsLoading(true)
        await Log(values)
        setIsLoading(false)
    }

    return (
        <CardWrapper
            title="Login"
            displaySocials
            footerLabel="Don't have an account?"
            footerLink="/sign-up"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    required
                    className="p-1 rounded-full shadow-lg"
                />
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    required
                    className="p-1 rounded-full shadow-lg"
                />
                {isLloading && <p>Loading...</p>}
                <button type="submit" onClick={() => handleSubmit(onSubmit)}>Login</button>
            </form>
        </CardWrapper>
    )
}