"use client";

import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import CardWrapper from "./CardWrapper"
import { useTransition } from "react";
import { Reg } from "@/app/actions/register";

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string({
        message: "Password is required"
    }).min(6, {
        message: "Password must be at least 6 characters"
    }),
    name: z.string({
        message: "Name is required"
    }),
    type: z.enum(["User", "Admin"])
})

type FormFields = z.infer<typeof RegisterSchema>

export const Register = () => {

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormFields>({
        defaultValues: {
            email: "",
            password: "",
            name: "",
            type: "User"
        },
        resolver: zodResolver(RegisterSchema)
    })

    const onSubmit:SubmitHandler<FormFields> = async (values) => {
        Reg(values)
    }

    return (
        <CardWrapper
            title="Register"
            displaySocials
            footerLabel="Alreadt have an account?"
            footerLink="/sign-in"
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
                <select
                    {...register("type")}
                    required
                >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>
                <input
                    type="text"
                    placeholder="Name"
                    {...register("name")}
                    required
                    className="p-1 rounded-full shadow-lg"
                />
                <button type="submit" onClick={() => handleSubmit(onSubmit)}>Register</button>
            </form>
        </CardWrapper>
    )
}