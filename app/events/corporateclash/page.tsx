import userVerify from "../userVerify";
import CorporateClashEvent from "./clientCode";
export default async function(){
  const res:boolean = await userVerify();
  return(
    <CorporateClashEvent allow={res}></CorporateClashEvent>
  )
}