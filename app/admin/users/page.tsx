import React from "react";
import UserList from "./UserList";
import ExportCSV from "./ExportCSV";
import { getUsers } from "../queries";
import {User} from "@/lib/types";

export default async function UnverifiedUsers() {
	const users: User[] = await getUsers();
	return (
		<>
			<section className="flex flex-col p-12 gap-y-6">
				<div className="flex justify-around">
					<h1 className="text-3xl text-white font-medium">Users</h1>
					<ExportCSV users={users} />
				</div>
				<div className="w-full flex justify-center">
					<UserList users={users} />
				</div>
			</section>
		</>
	);
}

export const dynamic = 'force-dynamic';