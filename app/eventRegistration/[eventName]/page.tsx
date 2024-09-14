'use client'
import allEventNames from './allEventNames'
import {MemberInput,TeamInput} from './MemberInput'
import React, { HtmlHTMLAttributes, useState } from 'react'
import { DiVim } from 'react-icons/di'
import { string } from 'zod'


const validEvent = (eventName:string) =>{
  type result={
    valid : boolean,
    teamSize?:{
      min:number,
      max:number
    }
  }
  let res:result = {valid:true};
  if(eventName in allEventNames){
    res.valid = true;
    //@ts-ignore
    res.teamSize = {max : allEventNames[eventName].max,min : allEventNames[eventName].min};
  }
  else res.valid = false;
  return res;
}

const Event = ({params}:{params:{eventName:string}}) => {
  console.log(validEvent(params.eventName));
  const [userMail, setUserMail] = useState<string>("owner@gmail.com");
  const [members, setMembers] = useState<Array<string>>([userMail]);
  const [teamDetails, setTeamDetails] = useState<{name:string,size:number}>({name:"sampleTeamName",size:4});
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
          <TeamInput teamDetails={teamDetails} setTeamDetails={setTeamDetails}></TeamInput>
          {/* the input boxes are rendered here */}
          {members.map((data, index) => {
            return (
              <MemberInput key={index} id={index} label={`team member ${index + 1}`} state={members} setState={setMembers} disabled={index === 0 ? 1 : 0}></MemberInput>
            )
          })}
          {members.length < teamDetails.size ? (<button onClick={addMember}>add</button>) : <></>}
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