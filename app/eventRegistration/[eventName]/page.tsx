'use client'
import Link from 'next/link'
import allEventNames from './allEventNames'
import {MemberInput,TeamInput} from './Comp'
import React, { HtmlHTMLAttributes, useState } from 'react'
import { DiVim } from 'react-icons/di'
import { boolean, string } from 'zod'
import { eventNames } from 'process'

type eventPropType = {
  valid: boolean,
  teamSize?: {
    min: number,
    max: number
  }
}

const checkValidEvent = (eventName:string) =>{
  let res:eventPropType = {valid:true};
  if(eventName in allEventNames){
    res.valid = true;
    //@ts-ignore
    res.teamSize = {max : allEventNames[eventName].max,min : allEventNames[eventName].min};
  }
  else res.valid = false;
  return res;
}
const checkTeamName =  (event:string,team:string):boolean =>{
  if(team == "") {alert('team name is empty');return false;}
  fetch("/api/user/checkTeamExists",{
    method:"GET",
    headers:{
      "event":event,
      "team":team
    },
    cache:'no-cache'
   }).then(res =>{
    if(res.status == 200){
      res.json().then((body)=>{
        if(!body.msg) {return true}//the team does not Exist
        else {alert("team already exits");return false;}
      })
    }
    else {
    console.log('got backend err');
      alert('something went wrong try again later');
      return false;
    }
   }).catch(err=>{
    console.log('got err');
      alert('something went wrong try again later');
      return false;
   })
}

const checkValidMembers=(
  members:Array<string>,
  teamSizeMax:number,
  teamSizeMin:number,
):boolean=>{
    const actualMembers = members.filter(e=>e!=""); // to get rid of the null inputs
    let s = actualMembers.length;
    if(s>teamSizeMin || s<teamSizeMax) {alert("team Size not met");return false;}
    for (let i = 0; i < s; i++) {
      for (let j = i + 1; j < s; j++) {
        if (actualMembers[i] == actualMembers[j]) {alert("multiple member with same mail");return false;}
      }
    }
    return true;
}

const Event = ({params}:{params:{eventName:string}}) => {
  if(!checkValidEvent(params.eventName).valid) return(<div>not Valid Event</div>);
  const eventProp:eventPropType = checkValidEvent(params.eventName);
  const [userMail, setUserMail] = useState<string>("owner@gmail.com");
  const [members, setMembers] = useState<Array<string>>([userMail]);
  const [teamDetails, setTeamDetails] = useState<{name:string,size:number}>({name:"",size:eventProp.teamSize.max});
  const addMember=()=>{
    setMembers([...members,""])
  }
  const submit=async()=>{
    //checking team validation
    if(checkTeamName(params.eventName,teamDetails.name))
    //member validity checking
    if(checkValidMembers(members, eventProp.teamSize.max,eventProp.teamSize.min))alert('valid for submission');
    //member registration checking 
    //submitting the team
  }
  return (<>
  <h1>Event is {params.eventName}</h1>
    <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
      <div className="lg:pr-8">
        <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Participate</h2>
          <TeamInput teamDetails={teamDetails} setTeamDetails={setTeamDetails}></TeamInput>
          {/* the input boxes are rendered here */}
          {members.map((data, index) => {
            return (
              <MemberInput key={index} id={index} label={`team member ${index + 1}`} state={members} setState={setMembers} disabled={index === 0 ? true : false}></MemberInput>
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