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

	const [loading, setLoading] = useState(false);

	const onSubmit: SubmitHandler<FormFields> = async (
		data,
		e?: React.BaseSyntheticEvent
	) => {
		console.log("submitting data.");
		console.log(email);
		setLoading(true);
		try {
			updateUserDetails(data, email);
			router.refresh();
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="bg-[#101720] text-[#fcbf49] flex flex-col items-center">
			<div className="bg-gray-800 rounded-xl px-8 py-4 shadow-lg w-4/5 mb-6">
				<div className="w-full flex justify-center">
					<h1 className="text-3xl font-bold text-[#eae2b7] mb-4">
						Complete Your Registration
					</h1>
				</div>
				<form
					className="grid grid-cols-1 md:grid-cols-2 gap-8"
					onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						placeholder="Phone Number"
						{...register("phone")}
						className="p-2 rounded-md text-white placeholder:text-gray-600 bg-transparent border border-white"
					/>
					{errors.phone && (
						<p className="text-red-500">{errors.phone.message}</p>
					)}
					<input
						type="text"
						placeholder="Roll Number"
						{...register("rollNo")}
						className="p-2 rounded-md  text-white placeholder:text-gray-600 bg-transparent border border-white"
					/>
					{errors.rollNo && (
						<p className="text-red-500">{errors.rollNo.message}</p>
					)}
					<input
						type="text"
						placeholder="College"
						{...register("college")}
						className="p-2 rounded-md text-white placeholder:text-gray-600 bg-transparent border border-white"
					/>
					{errors.college && (
						<p className="text-red-500">{errors.college.message}</p>
					)}

					<input
						type="text"
						placeholder="Year"
						{...register("year")}
						className="p-2 rounded-md text-white placeholder:text-gray-600 bg-transparent border border-white"
					/>
					{errors.year && <p className="text-red-500">{errors.year.message}</p>}

					<input
						type="text"
						placeholder="Branch"
						{...register("branch")}
						className="p-2 rounded-md text-white placeholder:text-gray-600 bg-transparent border border-white"
					/>
					{errors.branch && (
						<p className="text-red-500">{errors.branch.message}</p>
					)}

					{/* <input
						type="text"
						placeholder="Shirt Size"
						{...register("shirtSize")}
						className="p-2 rounded-md text-gray-600 bg-transparent border border-white"
					/> */}
					<select id="shirtSize" {...register("shirtSize")} className="p-2 rounded-md text-gray-600 bg-transparent border border-white">
						<option value="Shirt Size" hidden>Shirt Size</option>
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

					<input
						type="text"
						placeholder="Gender"
						{...register("gender")}
						className="p-2 rounded-md placeholder:text-gray-600 text-white bg-transparent border border-white"
					/>
					{errors.gender && (
						<p className="text-red-500">{errors.gender.message}</p>
					)}

					{/* <input
						type="text"
						placeholder="Food Preference"
						{...register("foodPreference")}
						className="p-2 rounded-md placeholder:text-gray-600 text-white bg-transparent border border-white"
					/> */}
					<select id="foodPreference" {...register("foodPreference")} className="p-2 rounded-md text-gray-600 bg-transparent border border-white">
						<option value="Food Preference" hidden>Food Preference</option>
						<option value="Veg">Veg</option>
						<option value="Non-Veg">Non-Veg</option>
					</select>
					{errors.foodPreference && (
						<p className="text-red-500">{errors.foodPreference.message}</p>
					)}

					<div className="md:col-span-2 flex justify-center">
						<button
							type="submit"
							className="p-2 bg-[#fcbf49] text-[#101720] rounded-md font-medium w-fit">
							{loading ? "Submitting..." : "Submit"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterDetailsPage;
