import Event from "@/components/EventRegistration/main";
export default function({params}:{params:{eventName:string}}){
  return(
    <div>
      <Event params={params}></Event>
    </div>
  )
}