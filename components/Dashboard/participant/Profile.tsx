"use client";
import { useState, useRef } from "react";
import EditUser from "./EditUser";
import { FaXmark } from "react-icons/fa6";
import { redirect } from "next/navigation";

interface Team {
	eventName: string;
	teamName: string;
	member1: string;
	member2: string;
	member3: string;
	member4: string;
}

interface User {
	id: string;
	name: string;
	college: string;
	year: string;
	branch: string;
	foodPreference: string;
	rollNo: string;
	shirtSize: string;
	email: string;
	gender: string;
	isVerified: boolean;
	phone: string;
}

const UserTeams = ({ teams }: { teams: Team[] }) => {
	return (
		<div className="w-full mt-8 bg-[#101720] p-6 rounded-lg shadow-lg">
			<h3 className="text-3xl text-[#fcbf49] font-semibold mb-4">Event Participation</h3>
			<table className="w-full text-left table-auto border-collapse">
				<thead>
					<tr className="bg-[#101720] text-[#eae2b7] text-lg">
						<th className="border p-2">Event Name</th>
						<th className="border p-2">Team Name</th>
						<th className="border p-2">Team Members</th>
					</tr>
				</thead>
				<tbody>
					{teams.map((team, index) => {
						return (
							<tr key={index} className="bg-gray-800">
								<td className="border p-2">{team.eventName}</td>
								<td className="border p-2">{team.teamName}</td>
								<td className="border p-2 grid grid-cols-1 md:grid-cols-2">
									<span>{team.member1}</span>
									<span>{team.member2}</span>
									<span>{team.member3}</span>
									<span>{team.member4}</span>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

interface Transaction {
	purchaseId: string;
	type: string;
	status: string;
	bankId: string;
	transactionId: string;
}

const UserTransactions = ({ transactions }: { transactions: Transaction[] }) => {
	return (
		<div className="w-full mt-8 bg-[#101720] p-6 rounded-lg shadow-lg">
			<h3 className="text-3xl text-[#fcbf49] font-semibold mb-4">User Transactions</h3>
			<table className="w-full text-left table-auto border-collapse">
				<thead>
					<tr className="bg-[#101720] text-[#eae2b7] text-lg">
						<th className="border p-2">Transcation Type</th>
						<th className="border p-2">Transaction Id</th>
						<th className="border p-2">Transaction Status</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction, index) => {
						return (
							<tr key={index} className="bg-gray-800">
								<td className="border p-2">{transaction.type}</td>
								<td className="border p-2">{transaction.transactionId}</td>
								<td className="border p-2 grid grid-cols-1 md:grid-cols-2">
									{transaction.status}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

const UserDetails = ({ user }: { user: User }) => {
	return (
		<div className="w-full flex justify-center mb-6">
			<div className="grid grid-cols-1 bg-gray-800 bg-opacity-40 px-1 pt-16 pb-24 rounded-2xl overflow-hidden md:grid-cols-2 text-lg gap-y-2 w-4/5 py-4 justify-items-center">
				<div className="flex flex-col w-1/2">
          <p className="text-zinc-400 text-sm">Name</p>
          <p>{user.name}</p>
        </div>
				<div className="flex flex-col w-1/2">
          <p className="text-zinc-400 text-sm">Email</p>
          <p>{user.email}</p>
        </div>
				<div className="flex flex-col w-1/2">
          <p className="text-zinc-400 text-sm">Phone Number</p>
          <p>{user.phone}</p>
        </div>
				<div className="flex flex-col w-1/2">
          <p className="text-zinc-400 text-sm">College</p>
          <p>{user.college}</p>
        </div>
				<div className="flex flex-col w-1/2">
          <p className="text-zinc-400 text-sm">Roll Number</p>
          <p>{user.rollNo}</p>
        </div>
				<div className="flex flex-col w-1/2">
          <p className="text-zinc-400 text-sm">Year of Study</p>
          <p>{user.year}</p>
        </div>
				<div className="flex flex-col w-1/2">
          <p className="text-zinc-400 text-sm">Branch</p>
          <p>{user.branch}</p>
        </div>
				<div className="flex flex-col w-1/2">
          <p className="text-zinc-400 text-sm">Shirt Size</p>
          <p>{user.shirtSize}</p>
        </div>
				<div className="flex flex-col w-1/2">
          <p className="text-zinc-400 text-sm">Gender</p>
          <p>{user.gender}</p>
        </div>
				<div className="flex flex-col w-1/2">
          <p className="text-zinc-400 text-sm">Food Preference</p>
          <p>{user.foodPreference}</p>
        </div>
			</div>
		</div>
	);
};

const UserProfile = ({
	user,
	memberTeams,
	userTransactions
}: {
	user: User;
	memberTeams: any;
	userTransactions: Transaction[];
}) => {
	const [userData, setUserData] = useState<User | null>({
		id: "",
		name: "",
		college: "",
		year: "",
		branch: "",
		foodPreference: "",
		shirtSize: "",
		rollNo: "",
		email: "",
		gender: "",
		phone: "",
		isVerified: true,
	});
	const [isEditing, setIsEditing] = useState(false);

	const editUserRef = useRef<HTMLDialogElement>(null);

	function toggleEditUser() {
		if (!editUserRef.current) return;
		editUserRef.current.hasAttribute("open")
			? editUserRef.current.close()
			: editUserRef.current.showModal();
	}

	if (!user) redirect("/sign-in");

	const handleSave = () => {
		console.log("User Saved:", user);
		setIsEditing(false);
	};

	return (
		<div className="relative pt-26 bg-[#101720] min-h-screen text-[#eae2b7] font-semibold">
			<div className="flex flex-col items-center">
				<UserDetails user={user} />

				<div>
					<button
						className="flex justify-center text-lg bg-[#fcbf49] text-[#101720] font-medium px-2 py-1 rounded-2xl"
						onClick={toggleEditUser}>
						Edit Details
					</button>
					<dialog
						ref={editUserRef}
						className="relative h-[90vh] w-[70vw] backdrop:bg-[#00000080] bg-[#101720] text-[#fcbf49] font-semibold">
						<EditUser user={user} />
						<button
							onClick={toggleEditUser}
							className="absolute top-4 right-4 text-white">
							<FaXmark />
						</button>
					</dialog>
				</div>

				{/* Event Participation */}
				<UserTeams teams={memberTeams} />
				<UserTransactions transactions={userTransactions} />
			</div>
		</div>
	);
};

export default UserProfile;