'use server'
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function getTeams(event:string){
const getUserList = await prisma.team.findMany({
    where: {
        eventName: event
    },
    include: {member1: true, member2: true, member3: true, member4: true}
});
return getUserList;
}

export {getTeams}