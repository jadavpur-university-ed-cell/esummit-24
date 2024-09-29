"use server";
import { prisma } from "@/prisma/pclient";
import { error } from "console";

interface FormFields {
	college: string;
	year: string;
	branch: string;
	shirtSize: string;
	gender: string;
	foodPreference: string;
}

export const updateUserDetails = async (data: FormFields, email: string) => {
	try {
		const user = await prisma.user.findUnique({
			where: { email },
		});

		console.log(user);

		if (user) {
			const res = await prisma.user.update({
				where: { email },
				data: {
                    ...data,
                    isVerified: true
                }
			});
			return res;
		} else {
			throw error("No user with given email");
		}
	} catch (error) {
		console.error("Error updating user details:", error);
        throw new Error("Error in updating user.");
	}
};
