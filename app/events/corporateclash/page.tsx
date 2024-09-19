import CorporateClashEvent from "./clientCode"
export default async function (){
  //most of the await calls;
  const res:boolean = await new Promise((r)=>{
    setTimeout(()=>{
      r(false);
    },500);
  })
  return(
    <CorporateClashEvent allow={res}></CorporateClashEvent>
  )
}