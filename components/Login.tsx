"use client";

import { set, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CardWrapper from "./CardWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { login } from "@/app/actions/login";
import { LoginSchema } from "@/schemas";
type FormFields = z.infer<typeof LoginSchema>;

export const Login = () => {
	const [isPending, startTransition] = useTransition();
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const form = useForm<FormFields>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: zodResolver(LoginSchema),
	});
	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		setError("");
		setSuccess("");
		startTransition(() => {
			login(values).then((data: any) => {
				if (data?.error) setError(data?.error);
				if (data?.success) setSuccess(data?.success);
			});
		});
	};
	return (
		<div className="h-screen bg-[#101720] grid place-items-center w-screen">
			<CardWrapper
				title="Login"
				displaySocials
				footerLabel="Don't have an account?"
				footerLink="/sign-up"
				footerLinkText="Sign up">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<div className="space-y-4">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel
											className="block text-sm font-medium text-gray-300"
											htmlFor="email">
											Email
										</FormLabel>
										<FormControl>
											<Input
												className="text-gray-300 bg-[#101720e7] focus:ring-gray-500"
												placeholder="Your Email Address"
												{...field}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel
											className="block text-sm font-medium text-gray-300"
											htmlFor="password">
											Password
										</FormLabel>
										<FormControl>
											<Input
												className="text-gray-300 bg-[#101720e7] focus:ring-gray-500"
												placeholder="Your Password"
												{...field}
												type="password"
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
										<span className="text-red-500">{error}</span>
										<span className="text-green-500">{success}</span>
									</FormItem>
								)}
							/>
						</div>
						<Button
							className="w-full bg-[#FCBF49] hover:bg-[#EAE2B7] text-gray-700"
							typeof="submit">
							Login
						</Button>
					</form>
				</Form>
			</CardWrapper>
		</div>
	);
};
