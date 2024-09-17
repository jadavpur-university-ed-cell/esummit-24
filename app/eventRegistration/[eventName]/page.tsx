import Event from "@/components/EventRegistration/main";
const test=({params}:{params:{eventName:string}})=>{
  return(
    <div>
      <Event params={params}></Event>
    </div>
  )
}
export default Event;