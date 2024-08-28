import { NextRequest,NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req:NextRequest, {params}:{params:{teamId:string}}) {
    console.log("delete request received.",params.teamId);
    await prisma.team.delete({
    where: {
        teamId: params.teamId
    }
});
return NextResponse.json({"message":`Team with id ${params.teamId} deleted successfully.`})
}