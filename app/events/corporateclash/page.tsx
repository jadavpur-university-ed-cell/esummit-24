import CorporateClashEvent from "./clientCode"
import {auth} from "@/auth"
export default async function (){
  //most of the await calls;
  const res:boolean = await new Promise(async (r)=>{
    const session = await auth();
    if(!session){r(false);return;}
  })
  console.log(res);
  return(
    <CorporateClashEvent allow={res}></CorporateClashEvent>
  )
}