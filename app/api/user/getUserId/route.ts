import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req:NextRequest){
  const prisma = new PrismaClient;
  const userMail = req.headers.get('mail');
  try{
    const dbres = await prisma.user.findFirst({
      where:{
        email:userMail
      },
      select:{
        id:true
      }
    });
    if(dbres==null) return new Response(JSON.stringify({msg:'userNotFound'}),{status:404});
    return new Response(JSON.stringify({
      id:dbres.id
    }),{status:200});
  }
  catch(e){
    return new Response('serverError',{status:500});
  }
}