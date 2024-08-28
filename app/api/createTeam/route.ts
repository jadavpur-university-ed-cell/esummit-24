import { NextRequest,NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req:NextRequest) {
    console.log("post request received to create new team");
    // await prisma.team.create({});
return NextResponse.json({"message":`Team with id TEAM ID HERE created successfully.`})
}

// enter team id variable in response