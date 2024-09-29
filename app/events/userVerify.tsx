import { prisma } from "@/prisma/pclient";
import { auth } from "@/auth"
export default function userVerify():Promise<boolean> {
  return new Promise(async (r) => {
    const session = await auth();
    //this will give fatal error if secret is not set in the .env file
    if (!session) { r(false); return; }
    if (session.user.role === "Admin") { r(true); return; }
    //db call
    try {
      const dbres = await prisma.user.findFirst({
        where: {
          id: session.user.id
        },
        select: {
          isVerified: true,
        }
      });
      if (!dbres) { r(false); return; }
      if (!dbres?.isVerified) { r(false); return; }
      r(true); return;
    }
    catch (err) {
      console.log(err);
      r(false); return;
    }
  })
}