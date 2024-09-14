import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req:NextRequest){
  const prisma = new PrismaClient;
  const userMail = req.headers.get('mail');
  const event = req.headers.get('event');
  try{
    const dbres = await prisma.user.findFirst({
      where:{
        email:userMail
      },
      include:{
        member1of:true,
        member2of:true,
        member3of:true,
        member4of:true,
      },
      
    });
    if(dbres==null) return new Response('userNotFound',{status:404});
    const teamArr = [dbres.member1of,dbres.member2of,dbres.member3of,dbres.member4of].filter(e=>{
      return e.length!=0;
    })[0];
    return new Response(JSON.stringify({
      teams:teamArr
    }),{status:200});
  }
  catch(e){
    return new Response('serverError',{status:500});
  }
}