'use client'
import React, { HtmlHTMLAttributes, useState } from 'react'
import { DiVim } from 'react-icons/di'
import { string } from 'zod'

type prop ={
  id:number,
  label:string,
  state:Array<string>,
  setState:Function,
  disabled:boolean
}
const MemberInput = ({id, state, setState,label, disabled}:prop)=>{
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
      />
      {!disabled?<button onClick={handleRemove}>Remove</button>:<></>}
    </div>
  </div>
)
}

const checkMember = async(member:string) =>{
}

const Event = ({params}:{params:{eventName:string}}) => {
  const [userMail, setUserMail] = useState<string>("owner@gmail.com");
  const [members, setMembers] = useState<Array<string>>([userMail]);
  const [teamDetails, setTeamDetails] = useState<{name:string,readOnly: boolean,size:number}>({name:"sampleTeamName",readOnly:true,size:4});
  const addMember=()=>{
    setMembers([...members,""])
  }
  const submit=async()=>{
    let s = members.length;
    for (let i = 0; i < s; i++) {
      for (let j = i + 1; j < s; j++) {
        if (members[i] == members[j]) {alert("multiple member with same mail");return;}
      }
    }
    //member registration checking 
    //submitting the team
  }
  return (<>
  <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Participate</h2>
                 displaying the team name
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
                        value = {teamDetails.name}
                        onChange={(e)=>{setTeamDetails({...teamDetails,name:e.target.value})}}
                        disabled = {teamDetails.readOnly}
                      />
                    </div>
                  </div> 
                  {/* the input boxes are rendered here */}
                  {members.map((data, index)=>{
                    return (
                      <MemberInput key={index} id={index} label={`team member ${index + 1}`} state={members} setState={setMembers} disabled={index === 0 ? 1 : 0}></MemberInput>
                    )
                  })}
                  {members.length<teamDetails.size?(<button onClick={addMember}>add</button>):<></>}
                  {/* submit button rendered here */}
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-grape-600 hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grape-500"
                      onClick={submit}
                      >
                      Submit
                    </button>
                  </div>
              </div>
              </div>
  </>    
  )
}


export default Event;