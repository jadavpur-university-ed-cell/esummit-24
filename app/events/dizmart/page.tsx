import Footer from "@/components/Homepage/Footer/Footer";
import userVerify from "../userVerify";
import DizmartEvent from "./clientCode";
export default async function Page(){
  const res:boolean = await userVerify();
  return(
    <>
    <DizmartEvent allow={res}></DizmartEvent>
    <Footer/>
    </>
  )
}