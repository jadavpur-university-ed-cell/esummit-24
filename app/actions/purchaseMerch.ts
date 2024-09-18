"use server"
export default async function(FormData:FormData){
      const msg = {
        shirt : FormData.get("shirt")? 1:0,
        cap : FormData.get("cap")? 1:0,
        userId : FormData.get("userId"),
        paymentStatus:"Initiated"
      }
      return msg;
}