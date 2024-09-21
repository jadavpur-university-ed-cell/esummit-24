import userVerify from "../userVerify";
import HacknPitchEvent from "./clientCode";
export default async function(){
  const res:boolean = await userVerify();
  return(
    <HacknPitchEvent allow={res}></HacknPitchEvent>
  )
}