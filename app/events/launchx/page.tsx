import Footer from "@/components/Homepage/Footer/Footer";
import userVerify from "../userVerify";
import LaunchXEvent from "./clientCode";
export default async function Page(){
  const res:boolean = await userVerify();
  return(
    <>
    <LaunchXEvent allow={res}></LaunchXEvent>
    <Footer/>
    </>
  )
}