import { DeleteIcon } from "lucide-react";

type prop ={
  id:number,
  label:string,
  state:Array<string>,
  setState:Function,
  disabled:boolean
}
export function MemberInput({id, state, setState,label, disabled}:prop){
  const handleRemove=()=>{
    let newState = [...state];
    setState(newState.filter((e,i)=>i!=id))
  }
  const handleChange = (e:any) => {
    let newdata: Array<string> = [...state];
    newdata[id] = e.target.value
    setState(newdata);
  }
return (
  <div className="sm:col-span-3">
  <div className="relative mb-4 flex items-center">
  <input
    type="email"
    id="floatingInput"
    name="email"
    placeholder=" "
    autoComplete="email"
    className="peer block w-full px-3 py-3 text-sm text-gray-200 bg-transparent border border-gray-700 rounded-t-xl appearance-none focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-[#eae2b7] mb-[-1px] rounded-xl"
    value={state[id]}
    onChange={(e) => handleChange(e)}
    disabled={disabled}
  />
  <label
    htmlFor="floatingInput"
    className="absolute text-sm text-[#eae2b7] duration-300 transform -translate-y-6 scale-75 top-2 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6"
  >
    {label}
  </label>
  {!disabled && (
    <button
      onClick={handleRemove}
      className="bg-[#d62828] text-white px-1 text-xs rounded-lg ml-1"
    >
      <DeleteIcon />
    </button>
  )}
   </div>
  </div>
)
}

export type teamProps={
  teamDetails:{
    name: string, size: number
  },
  setTeamDetails:Function
}
export function TeamInput({teamDetails,setTeamDetails}:teamProps){
  return (
      <div className="sm:col-span-3">
       <div className="relative mb-4 flex items-center">
         <input
           type="text"
           id="floatingInput"
           name="team-name"
           placeholder=" "
           autoComplete="team-name"
           className="peer block w-full px-3 py-3 text-sm text-gray-200 bg-transparent border border-gray-700 rounded-t-xl appearance-none focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-[#eae2b7] mb-[-1px] rounded-xl"
           value={teamDetails.name}
           onChange={(e) => { setTeamDetails({ ...teamDetails, name: e.target.value }) }}
         />
         <label
           htmlFor="floatingInput"
           className="absolute text-sm text-[#eae2b7] duration-300 transform -translate-y-6 scale-75 top-2 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6"
         >
           Add a Team Name
         </label>
         </div>
    </div>
  )
}