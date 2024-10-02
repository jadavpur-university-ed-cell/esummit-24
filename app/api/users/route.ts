import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/pclient";


export async function GET (req:NextRequest, res:NextResponse){
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                isVerified: true,
                rollNo: true,
                gender: true,
                foodPreference: true,
                shirtSize: true
            }
        });
        return NextResponse.json(users,{status:200});
    } catch (err) {
        return NextResponse.json({msg:"Error fetching users.",error:err},{status:500});
    }
}