import React from "react";
import UserList from "./UserList";
import ExportCSV from "../ExportCSV";
import Link from "next/link";

interface User {
	id: string;
	name: string;
	email: string;
	phone: string;
	isVerified: boolean;
	rollNo: string;
	verifyImage: string;
	gender: string;
	foodPreference: string;
	shirtSize: string;
}

async function VerifiedUsers() {
	const response = await fetch("http://localhost:3000/api/users", {
		cache: "no-store",
	});
	const users: User[] = await response.json();
	const verified: User[] = users.filter((user) => user.isVerified);
	return (
		<>
			<section className="flex flex-col p-12 gap-y-6">
				<div className="w-full flex justify-around">
					<Link
						href="/admin/users"
						className="bg-white px-2 py-1 rounded-[4px] w-fit">
						Go back
					</Link>
					<h1 className="text-3xl text-white font-medium">Verified Users</h1>
					<ExportCSV users={verified} />
				</div>
				<div className="w-full flex justify-center">
					<UserList users={verified} />
				</div>
			</section>
		</>
	);
}

export default VerifiedUsers;
