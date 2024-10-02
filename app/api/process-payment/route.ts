import {prisma} from "@/prisma/pclient"
import { PaymentStatus,TransactionType } from "@prisma/client";
import { NextRequest,NextResponse } from "next/server";
export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const transId = body.transId;
  const bankId = body.bankId;
  const uid = body.uid;
  if (!uid || !bankId || !transId) {
    console.log([uid, transId, bankId])
    return NextResponse.json({ success: false }, { status: 400 });
  }
  try {
    const dbres = await prisma.transaction.create({
      data:{
        transactionId:transId,
        bankId:bankId,
        userId:uid,
        type: TransactionType.Merch,
        status:PaymentStatus.Pending
      }
    })
    if (!dbres) {
      console.log(dbres);
      return NextResponse.json({ success: false }, { status: 400 });
    }
    return NextResponse.json({ success: true, paymentStatus: dbres.status }, { status: 200 });
  }
  catch(err){
    console.log(err);
    return NextResponse.json({ success: false}, { status: 500 });
  }

}