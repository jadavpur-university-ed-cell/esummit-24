import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req:NextRequest, res:NextResponse){
    // no longer fetched from queries.ts
    try {
        const user = await req.json();

        await prisma.user.update({
            where: {
                id: user.id
            },
            data: user
        })

        return NextResponse.json({msg:`User ${user.name} edited.`,success:true},{status:200});
    } catch (err) {
        return NextResponse.json({msg:err, success:false},{status:500});
    }
}