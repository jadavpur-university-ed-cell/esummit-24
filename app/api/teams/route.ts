import {prisma} from "@/prisma/pclient"
import { NextResponse, NextRequest } from 'next/server';


export async function POST(req: NextRequest, res: NextResponse) {
  // no longer used in form.tsx, can be deleted if no one else is using this.
    const body = await req.json();
    let { eventName, teamName, member1Id, member2Id, member3Id, member4Id } = body;
    try {
      const team = await prisma.team.create({
        data: {
          eventName,
          teamName,
          member1Id,
          member2Id,
          member3Id,
          member4Id
        },
      });
      return NextResponse.json({ team },{status:201});
    } catch (error) {
      return NextResponse.json({ error: 'Error creating team', details: (error as Error).message },{status:500});
    }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  // no longer used in queries.ts and editTeamForm.tsx, can be deleted if no one else is using.
    const body = await req.json();
    const { teamId, eventName, teamName, member1Id, member2Id, member3Id, member4Id } = body;

    try {
      const team = await prisma.team.update({
        where :{
          teamId: teamId // using teamId to identify team to update
        },
        data: {
          eventName,
          teamName,
          member1Id,
          member2Id,
          member3Id,
          member4Id
        },
      });
      return NextResponse.json({ team },{status:200});
    } catch (error) {
      return NextResponse.json({ error: 'Error creating team', details: (error as Error).message },{status:500});
    }
}
