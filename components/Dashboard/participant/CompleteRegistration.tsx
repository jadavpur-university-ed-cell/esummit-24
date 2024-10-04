"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserDetails } from "./queries";

const UserSchema = z.object({
	college: z.string().min(1, { message: "College is required." }),
	phone: z.string().min(1, { message: "Phone Number is required" }),
	rollNo: z.string().min(1, { message: "Roll Number is required." }),
	year: z.string().min(1, { message: "Year is required." }),
	branch: z.string().min(1, { message: "Branch is required" }),
	shirtSize: z.string().min(1, { message: "Shirt size is required" }),
	gender: z.string().min(1, { message: "Gender is required" }),
	foodPreference: z.string().min(1, { message: "Food preference is required" }),
});

type FormFields = z.infer<typeof UserSchema>;

const RegisterDetailsPage = ({ email }: { email: string }) => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>({
		resolver: zodResolver(UserSchema),
	});

	const [submitText, setSubmitText] = useState("Submit");

	const onSubmit: SubmitHandler<FormFields> = async (
		data,
		e?: React.BaseSyntheticEvent
	) => {
		setSubmitText("Submitting..");
		try {
			await updateUserDetails(data, email);
			router.refresh();
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitText("Submitted. Redirecting..");
		}
	};

	return (
		<div className="bg-[#101720] text-[#fcbf49] flex flex-col items-center">
			<div className="bg-gray-800 rounded-xl px-8 py-4 shadow-lg w-4/5 mb-6">
				<div className="w-full flex justify-center">
					<h1 className="text-3xl font-bold text-[#eae2b7]">
						Complete Your Registration
					</h1>
				</div>
				<div className="w-full flex justify-center">
					<h3 className="text-sm font-medium text-[#d62828] mb-4">
						Fields marked with * are required
					</h3>
				</div>
				<form
					className="grid grid-cols-1 md:grid-cols-2 gap-8"
					onSubmit={handleSubmit(onSubmit)}>
						<div className="w-full">
					<input
						type="text"
						placeholder="Phone Number *"
						{...register("phone")}
						className="p-2 rounded-xl text-white placeholder:text-gray-600 bg-transparent border border-white w-full"
						/>
					{errors.phone && (
						<p className="text-red-500">{errors.phone.message}</p>
					)}
					</div>
					<div className="w-full">
					<input
						type="text"
						placeholder="Roll Number *"
						{...register("rollNo")}
						className="p-2 rounded-xl text-white placeholder:text-gray-600 bg-transparent border border-white w-full"
						/>
					{errors.rollNo && (
						<p className="text-red-500">{errors.rollNo.message}</p>
					)}
					</div>
					<div className="w-full">
					<input
						type="text"
						placeholder="College *"
						{...register("college")}
						className="p-2 rounded-xl text-white placeholder:text-gray-600 bg-transparent border border-white w-full"
						/>
					{errors.college && (
						<p className="text-red-500">{errors.college.message}</p>
					)}
					</div>

					<div className="w-full">
					<input
						type="text"
						placeholder="Year *"
						{...register("year")}
						className="p-2 rounded-xl text-white placeholder:text-gray-600 bg-transparent border border-white w-full"
						/>
					{errors.year && <p className="text-red-500">{errors.year.message}</p>}
						</div>

					<div className="w-full">
					<input
						type="text"
						placeholder="Branch *"
						{...register("branch")}
						className="p-2 rounded-xl text-white placeholder:text-gray-600 bg-transparent border border-white w-full"
						/>
					{errors.branch && (
						<p className="text-red-500">{errors.branch.message}</p>
					)}
					</div>

					{/* <input
						type="text"
						placeholder="Shirt Size"
						{...register("shirtSize")}
						className="p-2 rounded-md text-gray-600 bg-transparent border border-white"
					/> */}
					<div className="w-full">
					<select id="shirtSize" {...register("shirtSize")} className="p-2 rounded-xl text-gray-600 bg-transparent border border-white w-full">
						<option value="Shirt Size" hidden>Shirt Size *</option>
						<option value="XS">XS</option>
						<option value="S">S</option>
						<option value="M">M</option>
						<option value="L">L</option>
						<option value="XL">XL</option>
						<option value="XXL">XXL</option>
					</select>
					{errors.shirtSize && (
						<p className="text-red-500">{errors.shirtSize.message}</p>
					)}
					</div>

					<div className="w-full">
					<input
						type="text"
						placeholder="Gender *"
						{...register("gender")}
						className="p-2 rounded-xl placeholder:text-gray-600 text-white bg-transparent border border-white w-full"
						/>
					{errors.gender && (
						<p className="text-red-500">{errors.gender.message}</p>
					)}
					</div>

					{/* <input
						type="text"
						placeholder="Food Preference"
						{...register("foodPreference")}
						className="p-2 rounded-md placeholder:text-gray-600 text-white bg-transparent border border-white"
					/> */}
					<div className="w-full">
					<select id="foodPreference" {...register("foodPreference")} className="p-2 rounded-xl text-gray-600 bg-transparent border border-white w-full">
						<option value="Food Preference" hidden>Food Preference *</option>
						<option value="Veg">Veg</option>
						<option value="Non-Veg">Non-Veg</option>
					</select>
					{errors.foodPreference && (
						<p className="text-red-500">{errors.foodPreference.message}</p>
					)}
					</div>

					<div className="md:col-span-2 flex justify-center">
						<button
							type="submit"
							className="py-1 px-4 bg-[#fcbf49] text-[#101720] rounded-full font-medium w-fit">
							{submitText}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterDetailsPage;
