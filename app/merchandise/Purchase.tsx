"use client"
import { useFormStatus } from "react-dom";
import purchaseMerch from "../actions/purchaseMerch";
import { useState } from "react";
export default function({size,userId}:{size:string|null,userId:string}){
  if(size == null){
    return(
      <div>
        first save you shirt size
      </div>
    )
  }
  const [response, setResponse]= useState("");
  const {pending} = useFormStatus();
  const onSubmit= async (formdata:FormData)=>{
    if(!formdata.get("shirt")&&!formdata.get("cap")) {alert("check items to proceed");return;}
    formdata.append('userId',userId);
    let res = await purchaseMerch(formdata);
    setResponse(JSON.stringify(res));
  }
  return(
    <div>
    <form className="flex flex-col items-center" action={onSubmit}>
      <label>
        Shirt Size : <input type="text" disabled={true} value={size}/>
      </label>
      <label>
        shirt
        <input type="checkbox" name="shirt"/>
      </label>
      <label >
        cap
        <input type="checkbox" name="cap"/>
      </label>
      <button type="submit" disabled={pending}>{
        pending?"submitting":"submit"
        }</button>
    </form>
    <div>
      {
        response
      }
    </div>
    </div>
    
  )
}