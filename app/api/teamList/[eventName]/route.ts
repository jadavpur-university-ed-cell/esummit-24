import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Event {
	name: string;
	path: string;
}

const eventArr: Event[] = [
	{
		name: "Mock IPL",
		path: "mockipl",
	},
	{
		name: "Hack n Pitch",
		path: "hacknpitch",
	},
	{
		name: "Three",
		path: "three",
	},
	{
		name: "Four",
		path: "four",
	},
	{
		name: "Five",
		path: "five",
	},
	{
		name: "Six",
		path: "six",
	},
	{
		name: "Seven",
		path: "seven",
	},
];

export async function GET(
	req: NextRequest,
	{ params }: { params: { eventName: string } }
) {
    const event = eventArr.filter((event)=>event.path===params.eventName);
    const eventName = event[0].name;
	const teams = await prisma.team.findMany({
		where: {
			eventName: eventName,
		},
		include: { member1: true, member2: true, member3: true, member4: true },
	});
	return NextResponse.json(teams);
}
