import Event from "@/components/EventRegistration/main";
import {auth} from "@/auth"
export default async function ({params}:{params:{eventName:string}}){
  let res = await auth();
  return(
    <div>
      <Event params={params} email={res?.user.email}></Event>
    </div>
  )
}