import Footer from "@/components/Homepage/Footer/Footer";
import userVerify from "../userVerify";
import MockIPLEvent from "./clientCode";
export default async function Page(){
  const res:boolean = await userVerify();
  return(
    <>
    <MockIPLEvent allow={res}></MockIPLEvent>
    <Footer/>
    </>
  )
}