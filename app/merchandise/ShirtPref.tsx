"use client"

import { useEffect, useState } from "react"

const SizeInput=({state, setState}:{state:string, setState:Function})=>{
  return(
    <select name="" id="">
    <option value="S">Small</option>
    <option value="M">Medium</option>
    <option value="L">Large</option>
    <option value="XL">XL</option>
    <option value="XXL">XXL</option>
    <option value="XXXL">XXXL</option>
    </select>
  )
}
export default function ({size}:{size:string|null}) {
  const [shirtSize, setShirtSize] = useState<string>("");
  useEffect(() => {
    if (size == null) setShirtSize("");
    else setShirtSize(size);
  }, [])
  return (
    <div>
      Your Shirt Size : 
      {shirtSize ==""? <SizeInput state={shirtSize} setState={setShirtSize}/>:shirtSize}
    </div>
  )
}