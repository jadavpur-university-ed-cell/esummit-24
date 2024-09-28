import userVerify from "../userVerify";
import MockIPLEvent from "./clientCode";
export default async function(){
  const res:boolean = await userVerify();
  return(
    <MockIPLEvent allow={res}></MockIPLEvent>
  )
}