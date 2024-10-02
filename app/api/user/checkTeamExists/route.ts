import { prisma } from "@/prisma/pclient";
import { NextRequest } from "next/server";

// return 1 is team Exists
export async function GET(req:NextRequest){
  const eventName = req.headers.get("event");
  const teamName = req.headers.get("team");
  if(eventName == null ||teamName == null ) return new Response(JSON.stringify({
    msg:"badRequest"
  }),{status:400});
  try {
    const dbres = await prisma.team.findFirst({
      where: {
        AND:[
        {teamName: {
          equals: teamName,
          mode: "insensitive"
        }
      },
        {eventName: eventName}
        ]
      }
    });
    if(dbres == null) return new Response(JSON.stringify({msg:0}),{status:200});
    return new Response(JSON.stringify({ msg: 1 }), { status: 200 });
  }
  catch(e){
    console.log(e);
    return new Response(JSON.stringify({msg:"serverError"}),{status:500})
  }
}