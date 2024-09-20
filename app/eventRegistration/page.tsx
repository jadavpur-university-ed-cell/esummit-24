import Link from "next/link"
import allEventNames from "@/lib/allEventNames.json"
export default function (){
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
}