"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CardWrapper from "./CardWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTransition, useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Reg } from "@/app/actions/register";
import { RegisterSchema } from "@/schemas";
import { useRouter } from "next/navigation";

type FormFields = z.infer<typeof RegisterSchema>;

export const Register = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<FormFields>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      rcode: "",
    },
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      Reg(values).then((data) => {
        if (data?.error) setError(data?.error);
        if (data?.success) {
          setSuccess(data?.success);
          router.push("/sign-in");
        }
      });
    });
  };
  return (
    <CardWrapper
      title="Register"
      displaySocials
      footerLabel="Already have an account?"
      footerLink="/sign-in"
      footerLinkText="Sign in"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-300" htmlFor="name">Name</FormLabel>
                  <FormControl>
                    <Input className="text-gray-300 bg-[#101720e7] focus:ring-gray-500" placeholder="Your Full Name" {...field} type="name" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-300" htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input className="text-gray-300 bg-[#101720e7] focus:ring-gray-500" placeholder="Your Email Address" {...field} disabled={isPending} />
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
                  <FormLabel className="block text-sm font-medium text-gray-300" htmlFor="password">Password</FormLabel>
                  <FormControl>
                    <Input className="text-gray-300 bg-[#101720e7] focus:ring-gray-500" placeholder="Enter your password" {...field} type="password" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-300" htmlFor="type">Referral Code</FormLabel>
                  <FormControl>
                    <Input className="text-gray-300 bg-[#101720e7] focus:ring-gray-500" placeholder="Referral Code (if any)" {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <span>{error}</span>
            <span>{success}</span>
          </div>
          <Button className="w-full bg-[#F77F00] hover:bg-[#EAE2B7] hover:text-gray-700" typeof="submit">
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
