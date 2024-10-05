"use client";
import { getUserByEmail, updatePasswordByEmail } from "@/app/actions/data";
import CardWrapper from "@/components/CardWrapper";
import {useRouter} from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";
import bycryptjs from "bcryptjs";

function ForgotPassword() {
    const router = useRouter();
	const emailSchema = z
		.string()
		.email("Please enter a valid email.")
		.min(1, "Email is required.");
	const [email, setEmail] = useState<string>();
	const [message, setMessage] = useState<string>();
	const [buttonText, setButtonText] = useState<string>("Submit");

	const handleFormSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setButtonText("Submitting...");

		// validate form using zod
		const res = emailSchema.safeParse(email);
		if (!res.success) {
			setMessage(res.error.issues[0].message);
			setButtonText("Submit");
			return;
		}

		// check if user with given email exists
		if (!email) {
			setButtonText("Submit");
			return;
		}
		const user = await getUserByEmail(email);
		if (!user) {
			setMessage("No User with given Email. Please check again.");
			setButtonText("Submit");
			return;
		}

		// generate new password
		let pass1 = "";
		const str =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

		for (let i = 1; i <= 8; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass1 += str.charAt(char);
		}

		// send new password to user via mail
            const mail = await fetch("/api/mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    to: email,
                    name: user?.name,
                    subject: "E-Summit'24: Forgot Password",
                    body: `<h4>Hello ${user?.name},</h4>
                    <p>Your new password for the E-Summit'24 website is: ${pass1}</p>
                    <p>Please preserve this password for further use. </p>
                    <p>In case of any queries/issues, please contact someone from the Tech Team.</p>
                    <a href="https://esummit.juecell.com/sign-in">Sign-in Page</a>
                    <br>
                    <h4>Regards,</h4>
                    <h4>E-Cell, Jadavpur University</h4>`,
                }),
            });
            const mailResponse = await mail.json();
            if(!mailResponse.success){
                setMessage("Error in sending email.");
                setButtonText("Submit");
                return;
            }

		// update password in db

        const hashedPassword = await bycryptjs.hash(pass1,10); 

        try {
            setMessage("Updating password..");
            await updatePasswordByEmail(email,hashedPassword);
        } catch (error:any) {
            setMessage(error.message);
            setButtonText("Submit");
            return;
        }
        router.push("/sign-in");
	};

	return (
		<div>
			<CardWrapper title="Forgot Password">
				<form
					className="my-6 flex flex-col gap-y-2"
					onSubmit={handleFormSubmit}>
					<p className="text-sm text-[#d62828] mb-3">
						An auto-generated password will be sent to you via your registered
						email. Please preserve it for further use.{" "}
					</p>
					<label htmlFor="emailId" className="text-gray-300 text-sm">
						Your Email Address{" "}
					</label>
					<input
						type="text"
						name="emailId"
						id="emailId"
						className="bg-transparent placeholder:text-gray-300 text-gray-300 outline-none border border-gray-300 p-2 text-sm rounded-xl"
						placeholder="Your Email Address"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<p className="text-sm text-red-500">{message ?? ""}</p>
					<button className="font-medium mt-4 text-[#101720] bg-[#fcbf49] px-3 py-1 rounded-xl w-full">
						{" "}
						{buttonText}{" "}
					</button>
				</form>
			</CardWrapper>
		</div>
	);
}

export default ForgotPassword;
