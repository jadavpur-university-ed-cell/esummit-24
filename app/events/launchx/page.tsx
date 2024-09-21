import userVerify from "../userVerify";
import LaunchXEvent from "./clientCode";
export default async function(){
  const res:boolean = await userVerify();
  return(
    <LaunchXEvent allow={res}></LaunchXEvent>
  )
}