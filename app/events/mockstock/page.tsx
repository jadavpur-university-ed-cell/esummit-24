import userVerify from "../userVerify";
import MockStockEvent from "./clientCode";
export default async function Page(){
  const res:boolean = await userVerify();
  return(
    <MockStockEvent allow={res}></MockStockEvent>
  )
}