import { getSession } from "next-auth/react"
import {auth} from "@/auth"
import { PrismaClient } from "@prisma/client";
import ShirtPref from "./ShirtPref";
import Purchase from "./Purchase";

export default async function(){
  const session = await auth();
  const prisma = new PrismaClient();
  const res = await prisma.user.findFirst({
    where:{
      id:session?.user.id
    }
    ,select:{
      shirtSize:true
    }
  });
  return(
    <div>
      {/* @ts-ignore */}
      <Purchase size={res?.shirtSize} userId={session.user.id}></Purchase>
    </div>
  )
}