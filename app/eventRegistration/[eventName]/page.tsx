import Event from "@/components/EventRegistration/main";
import {auth} from "@/auth"
import userVerify from "@/app/events/userVerify";
export default async function ({params}:{params:{eventName:string}}){
  const userVerified:boolean = await userVerify();
  if(userVerified)
  {
  let res = await auth();
  return(
    <div>
      {/* @ts-ignore */}
      <Event params={params} email={res?.user.email}></Event>
    </div>
  )
  }
  else{
    return(
      <div>
        You are not allowed here
      </div>
    )
  }
}