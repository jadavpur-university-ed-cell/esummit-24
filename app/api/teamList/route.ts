import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
	req: NextRequest,
	{ params }: { params: { eventName: string } }
) {
	console.log("get request received.");
	return NextResponse.json({ msg: "hello" });
}
