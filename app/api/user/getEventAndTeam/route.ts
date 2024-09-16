import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req:NextRequest){
  const prisma = new PrismaClient;
  const userId = req.headers.get("userId");
  if(!userId) return new Response(JSON.stringify({
    msg:"inputInvalid"
  }),{status:400});
  try{
    const details = await prisma.user.findFirst({
      where:{
        //@ts-ignore
        id:userId
      },
      select:{
        member1of:true,
        member2of:true,
        member3of:true,
        member4of:true,
      }
    });
    //const teamList = [details?.member1of,details?.member2of,details?.member3of,details?.member4of].filter((e)=>{e?.length!=0})
    return new Response(JSON.stringify({
      members:{...details}
    }),{status:200});
  }
  catch(err){
    console.log(err);
    new Response(JSON.stringify({
      msg:"serverError"
    }),{status:500});
  }
}