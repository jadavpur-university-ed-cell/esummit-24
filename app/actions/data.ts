"use server";

import { prisma } from "@/prisma/pclient";
export const getUserByEmail = async (email: string) => {
	try {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});
		return user;
	} catch {
		return null;
	}
};
export const getUserById = async (id: string | undefined) => {
	try {
		const user = await prisma.user.findUnique({
			where: {
				id,
			},
		});
		return user;
	} catch {
		return null;
	}
};

export const updatePasswordByEmail = async(email:string, pass:string) => {
	try {
		await prisma.user.update({
			where: {
				email
			},
			data: {
				password: pass
			}
		})
		return;
	} catch (error) {
		throw error;
	}
}