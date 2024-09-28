import Link from "next/link"
import allEventNames from "@/lib/allEventNames.json"
import userVerify from "@/app/events/userVerify";
import { redirect } from "next/navigation";
import EventsComponent from "@/components/Homepage/Events/Events";
export default async function eventRegistration(){
  const res:boolean = await userVerify();
  if(res)
  return(
    <EventsComponent />
  )
  else 
    redirect("/sign-in")
}