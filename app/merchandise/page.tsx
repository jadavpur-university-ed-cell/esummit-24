import ProductSection from "./ClientCode"
import {prisma} from "@/prisma/pclient"
import { auth } from "@/auth"
//server side rendering
export default async function Page() {
  let userDetails: {
    isLogin: boolean,
    id: string,
    size: string | undefined | null,
    gender: string | undefined | null // null means shirtSize is not set, undefined means not able to get the size
  } = {
    isLogin: false,
    id: "",
    size: null,
    gender: null
  };
  const session = await auth();
  if (session) {
    userDetails.isLogin = true;
    userDetails.id = session.user.id;
    const dbres = await prisma.user.findFirst({
      where: {
        id: session.user.id,
      },
      select: {
        shirtSize: true,
        gender: true
      }
    });
    if (!dbres){
      userDetails.size = undefined;
      userDetails.gender = undefined;
    }
    userDetails.size = dbres?.shirtSize;
    userDetails.gender = dbres?.gender;
  }

  return (
    <div>
      <ProductSection userDetails={userDetails}/>
    </div>
  )

}