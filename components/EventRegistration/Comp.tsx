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
  <div className="sm:col-span-2">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="mt-1 flex">
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
        value={state[id]}
        onChange={(e)=>{handleChange(e)}}
        disabled={disabled}
      />
      {!disabled?<button onClick={handleRemove}>Remove</button>:<></>}
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
    <div>
      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
        Team Name
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="team-name"
          id="team-name"
          autoComplete="team-name"
          className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
          value={teamDetails.name}
          onChange={(e) => { setTeamDetails({ ...teamDetails, name: e.target.value }) }}
        />
      </div>
    </div>
  )
}