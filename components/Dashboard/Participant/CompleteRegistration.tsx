"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserDetails } from "./queries";

const UserSchema = z.object({
	college: z.string().min(1,{message: "College is required."}),
    phone: z.string().min(1,{message: "Phone Number is required"}),
    rollNo: z.string().min(1,{message: "Roll Number is required."}),
	year: z.string().min(1,{message: "Year is required."}),
	branch: z.string().min(1, {message: "Branch is required"}),
	shirtSize: z.string().min(1, {message: "Shirt size is required"}),
	gender: z.string().min(1,{message: "Gender is required"}),
	foodPreference: z.string().min(1,{message: "Food preference is required"})
});

type FormFields = z.infer<typeof UserSchema>;

const RegisterDetailsPage = ({email}:{ email: string }) => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>({
		resolver: zodResolver(UserSchema),
	});

	const [loading, setLoading] = useState(false);

	const onSubmit: SubmitHandler<FormFields> = async (
		data,
		e?: React.BaseSyntheticEvent
	) => {
		console.log("submitting data.");
		console.log(email);
		setLoading(true);
		try {
			updateUserDetails(data,email);
			router.refresh();
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-black text-yellow-300 flex flex-col items-center justify-center">
			<div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
				<h1 className="text-2xl mb-4">Complete Your Registration</h1>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						placeholder="Phone Number"
						{...register("phone")}
						className="p-2 rounded-md text-black"
					/>
					{errors.phone && (
						<p className="text-red-500">{errors.phone.message}</p>
					)}
					<input
						type="text"
						placeholder="Roll Number"
						{...register("rollNo")}
						className="p-2 rounded-md text-black"
					/>
					{errors.rollNo && (
						<p className="text-red-500">{errors.rollNo.message}</p>
					)}
					<input
						type="text"
						placeholder="College"
						{...register("college")}
						className="p-2 rounded-md text-black"
					/>
					{errors.college && (
						<p className="text-red-500">{errors.college.message}</p>
					)}

					<input
						type="text"
						placeholder="Year"
						{...register("year")}
						className="p-2 rounded-md text-black"
					/>
					{errors.year && <p className="text-red-500">{errors.year.message}</p>}

					<input
						type="text"
						placeholder="Branch"
						{...register("branch")}
						className="p-2 rounded-md text-black"
					/>
					{errors.branch && (
						<p className="text-red-500">{errors.branch.message}</p>
					)}

					<input
						type="text"
						placeholder="Shirt Size"
						{...register("shirtSize")}
						className="p-2 rounded-md text-black"
					/>
					{errors.shirtSize && (
						<p className="text-red-500">{errors.shirtSize.message}</p>
					)}

					<input
						type="text"
						placeholder="Gender"
						{...register("gender")}
						className="p-2 rounded-md text-black"
					/>
					{errors.gender && (
						<p className="text-red-500">{errors.gender.message}</p>
					)}

					<input
						type="text"
						placeholder="Food Preference"
						{...register("foodPreference")}
						className="p-2 rounded-md text-black"
					/>
					{errors.foodPreference && (
						<p className="text-red-500">{errors.foodPreference.message}</p>
					)}

					<button
						type="submit"
						className="mt-4 p-2 bg-[#fcbf49] text-[#101720] rounded-md font-medium"
						>
						{loading ? "Submitting..." : "Submit"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default RegisterDetailsPage;
