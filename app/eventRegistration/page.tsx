import Link from "next/link"
import allEventNames from "@/lib/allEventNames.json"
import userVerify from "@/app/events/userVerify";
export default async function (){
  const res:boolean = await userVerify();
  if(res)
  return(
    <div className="">
      {allEventNames.map(e=>{return(
        <div key={e.path}>
          <Link href={`/eventRegistration/${e.path}`} >
            Event : {e.name}
          </Link>
        </div>
      )})}
    </div>
  )
  else 
    return (
      <div>
        you are not authorized
      </div>
    )
}