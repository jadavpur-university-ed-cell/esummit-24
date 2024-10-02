import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/pclient";


interface Event {
	name: string;
	path: string;
}

const eventArr: Event[] = [
	{
		name: "Hack<n>Pitch",
		path: "hacknpitch",
	},
	{
		name: "Corporate Clash",
		path: "corporateclash",
	},
	{
		name: "Mock Stock",
		path: "mockstock",
	},
	{
		name: "Mock IPL Auction",
		path: "mockiplauction",
	},
	{
		name: "Diz Mart",
		path: "dizmart",
	},
	{
		name: "LaunchX",
		path: "launchx",
	},
];

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	// no longer used in queries.ts, may be deleted if not used elsewhere
	try {
		// id here is the name of the event
		const eventName = (eventArr.find((event) => event.path === params.id))?.name;
		if(!eventName) return NextResponse.json({error:"Event not found"},{status:400});
		const teams = await prisma.team.findMany({
			where: {
				eventName: eventName,
			},
			include: { member1: true, member2: true, member3: true, member4: true },
		});
		return NextResponse.json(teams);
	} catch (err) {
		return NextResponse.json({ error: "internal server error" },{status:501});
	}
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	// no longer used in queries.ts, may be deleted if not used elsewhere
	// id here is the team id
	await prisma.team.delete({
		where: {
			teamId: params.id,
		},
	});
	return NextResponse.json({
		message: `Team with id ${params.id} deleted successfully.`,
	});
}
