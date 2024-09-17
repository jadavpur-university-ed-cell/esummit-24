import Link from "next/link"
import allEventNames from "../../utils/allEventNames"
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