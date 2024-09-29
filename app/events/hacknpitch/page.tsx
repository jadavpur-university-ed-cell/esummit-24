import userVerify from "../userVerify";
import HacknPitchEvent from "./clientCode";
export default async function Page(){
  const res:boolean = await userVerify();
  return(
    <HacknPitchEvent allow={res}></HacknPitchEvent>
  )
}