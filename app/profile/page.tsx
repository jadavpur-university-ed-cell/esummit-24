import { auth } from "@/auth";
import { signOut } from "@/auth";
import UserProfile from "@/components/Dashboard/participant/Profile";
import RegisterDetailsPage from "@/components/Dashboard/participant/CompleteRegistration";
import { prisma } from "@/prisma/pclient";
import { redirect } from "next/navigation";
import Navbar from "@/components/Homepage/Navbar/Navbar";

interface Transaction {
	purchaseId: string;
	type: string;
	status: string;
	bankId: string;
	transactionId: string;
}

const getMemberName = async (id: string | null) => {
	if (!id) return "";
	const user = await prisma.user.findFirst({
		where: {
			id,
		},
		select: {
			name: true,
		},
	});
	return user?.name ?? "";
};

const getTeams = async (user: any) => {
	const teams1 = user?.member1of.map(async (item: any) => ({
		teamName: item.teamName,
		eventName: item.eventName,
		member1: await getMemberName(item.member1Id),
		member2: await getMemberName(item.member2Id),
		member3: await getMemberName(item.member3Id),
		member4: await getMemberName(item.member4Id),
	}));

	const teams2 = user?.member2of.map(async (item: any) => ({
		teamName: item.teamName,
		eventName: item.eventName,
		member1: await getMemberName(item.member1Id),
		member2: await getMemberName(item.member2Id),
		member3: await getMemberName(item.member3Id),
		member4: await getMemberName(item.member4Id),
	}));

	const teams3 = user?.member3of.map(async (item: any) => ({
		teamName: item.teamName,
		eventName: item.eventName,
		member1: await getMemberName(item.member1Id),
		member2: await getMemberName(item.member2Id),
		member3: await getMemberName(item.member3Id),
		member4: await getMemberName(item.member4Id),
	}));

	const teams4 = user?.member4of.map(async (item: any) => ({
		teamName: item.teamName,
		eventName: item.eventName,
		member1: await getMemberName(item.member1Id),
		member2: await getMemberName(item.member2Id),
		member3: await getMemberName(item.member3Id),
		member4: await getMemberName(item.member4Id),
	}));

	const teams = teams1 ? await Promise.all(teams1) : [];
	if (teams2) teams.concat(await Promise.all(teams2));
	if (teams3) teams.concat(await Promise.all(teams3));
	if (teams4) teams.concat(await Promise.all(teams4));
	return teams;
};

const Profile = async () => {
	const session = await auth();
	const userId = session?.user.id;

	const user = await prisma.user.findFirst({
		where: {
			id: userId,
		},
		include: {
			member1of: true,
			member2of: true,
			member3of: true,
			member4of: true,
			transactions: true
		},
	});

	if (!user) redirect("/sign-in");

	const teams = user.isVerified ? await getTeams(user) : [];

	const userData = {
		id: user.id,
		name: user.name ?? "",
		college: user.college ?? "",
		year: user.year ?? "",
		branch: user.branch ?? "",
		foodPreference: user.foodPreference ?? "",
		rollNo: user.rollNo ?? "",
		isVerified: user.isVerified,
		shirtSize: user.shirtSize ?? "",
		phone: user.phone ?? "",
		email: user.email ?? "",
		gender: user.gender ?? "",
	};

	const userTransactions: Transaction[] = user.transactions;

	return (
		<main>
			<Navbar button="Merch" url="/merchandise" />
			<div>
				{/* <span className="text-white">{JSON.stringify(session)}</span> */}
				<div className="flex justify-between px-8 pt-24 sm:pt-16 pb-12 items-center bg-[#101720]">
					<h1 className="text-4xl text-[#fcbf49] font-bold ml-3 sm:ml-12">
						User Profile
					</h1>
					<form
						action={async () => {
							"use server";
							await signOut({ redirectTo: "/sign-in", redirect: true });
						}}>
						<button
							type="submit"
							className="bg-[#d62828] text-white px-3 py-1 rounded-2xl">
							Log Out
						</button>
					</form>
				</div>
				{session && user?.isVerified ? (
					<UserProfile
						user={userData}
						memberTeams={teams}
						userTransactions={userTransactions}
					/>
				) : (
					<RegisterDetailsPage email={user?.email ?? ""} />
				)}
				{/* </div> */}
			</div>
		</main>
	);
};

export default Profile;
