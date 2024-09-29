import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

// no longer used in form.tsx and editTeamForm.tsx under admin, can be deleted if no one else is using
export async function POST(req: NextRequest, res: NextResponse) {
	const body = await req.json();
	const { email, eventName, newTeam, teamId } = body;
	// taking newTeam bool because we need different checks for editTeam and createTeam functions
	try {
		const user = await prisma.user.findUnique({
			where: { email },
		});

		if (!user) {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}

		// if(!user.isVerified){ // checking if college is verified
		// 	return NextResponse.json({error:"User's college not verified"},{status:400})
		// }

		// checking if user already has a team
		const existingTeam = await prisma.team.findFirst({
			where: {
				eventName,
				OR: [
					{ member1Id: user.id }, // eventName should be same, and user can be member1 or member2,3,4, so checking all ids
					{ member2Id: user.id },
					{ member3Id: user.id },
					{ member4Id: user.id },
				],
			},
		});
		if (newTeam) {
			// if it is a new team, the user must not be in any team for that event
			if (existingTeam) {
				return NextResponse.json(
					{ error: "User is already part of a team for this event" },
					{ status: 400 }
				);
			}
		}
		// if it isn't a new team, i.e. editTeam has been called, user can be a part of that team but no other team.
		else if (existingTeam && existingTeam.teamId !== teamId) {
			return NextResponse.json(
				{ error: "User is already part of a team for this event" },
				{ status: 400 }
			);
		}

		return NextResponse.json({ user }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Error checking user", details: (error as Error).message },
			{ status: 404 }
		);
	}
}
