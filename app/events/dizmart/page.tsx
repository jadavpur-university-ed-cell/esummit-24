import userVerify from "../userVerify";
import DizmartEvent from "./clientCode";
export default async function(){
  const res:boolean = await userVerify();
  return(
    <DizmartEvent allow={res}></DizmartEvent>
  )
}