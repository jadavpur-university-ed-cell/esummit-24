import { prisma } from "@/prisma/pclient";
import { auth } from "@/auth"
const userVerify=async ():Promise<boolean>=>{
    const session = await auth();
    //this will give fatal error if secret is not set in the .env file
    if (!session) {  return false; }
    if (session.user.role === "Admin") { return true; }
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
      if (!dbres) { return false; }
      if (!dbres?.isVerified) {  return false; }
      return true;
    }
    catch (err) {
      console.log(err);
       return false;
    }
}
export default userVerify;