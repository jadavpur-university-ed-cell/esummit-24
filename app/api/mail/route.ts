import sendMail from "@/lib/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest, res:NextResponse){
    try {
        const data = await req.json();
        await sendMail(data);
        return NextResponse.json({success:true},{status:200});
    } catch (err) {
        return NextResponse.json({success:false},{status:500});
    }
}