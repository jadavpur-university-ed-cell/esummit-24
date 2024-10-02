import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/pclient";

export async function GET(req:NextRequest,{params}:{params:{userId:string}}){
  try {
    const {userId} = params;
    const user = await prisma.user.findFirst({
      where: {
        id: userId
      },
      include: {
        member1of: true,
        member2of: true,
        member3of: true,
        member4of: true
      }
    })
    return NextResponse.json({user},{status:200});
  } catch (error) {
    console.log(error);
    return NextResponse.json({error:error},{status:500});
  }
}

export async function POST(req: NextRequest) {
  try {
    
    const { userId } = await req.json();
    console.log("Fetching teams for user:", userId);

    if (!userId) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

   
    const teams = await prisma.team.findMany({
      where: {
        OR: [
          { member1Id: userId },
          { member2Id: userId },
          { member3Id: userId },
          { member4Id: userId },
        ],
      },
      include: {
        member1: true,
        member2: true,
        member3: true,
        member4: true,
      },
    });

    if (teams.length === 0) {
      return NextResponse.json(
        { message: "No teams found for the given user" },
        { status: 404 }
      );
    }
    return NextResponse.json({ teams });
  } catch (error) {
    console.error("Error fetching teams for user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

