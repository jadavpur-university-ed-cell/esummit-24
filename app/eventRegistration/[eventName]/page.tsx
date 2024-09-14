'use client'
import allEventNames from './allEventNames'
import {MemberInput,TeamInput} from './Comp'
import React, { HtmlHTMLAttributes, useState } from 'react'
import { boolean, string } from 'zod'

type eventPropType = {
  valid: boolean,
  name:string,
  path:string,
  teamSize: {
    min: number,
    max: number
  }
}

const checkValidEvent = (eventName:string) =>{
  const res:eventPropType = {valid:false,name:"",path:"",teamSize:{max:0,min:0}};
  for(let i of allEventNames){
    if(i.path === eventName){
      res.valid = true;
      res.name = i.name;
      res.path = i.path;
      res.teamSize = {min:i.min, max:i.max};
      return res;
    }
  }
  return res;
}
const checkTeamName =  async(event:string,team:string) =>{
  return new Promise((resolve, reject)=>{
  if(team == "") {alert('team name is empty');resolve(false);}
  fetch("/api/user/checkTeamExists",{
    headers:{
      "event":event,
      "team":team
    },
    cache:'no-cache'
   }).then(res =>{
    if(res.status == 200){
      res.json().then((body)=>{
        if(!body.msg) {return resolve(true)}//the team does not Exist
        else {alert("team already exits");return resolve(false);}
      })
    }
    else {
    console.log('got backend err');
      alert('something went wrong try again later');
       resolve(false);
    }
   }).catch(err=>{
    console.log('got err');
      alert('something went wrong try again later');
       resolve(false);
   })
  })
}

const checkValidMembers=(
  members:Array<string>,
  teamSizeMax:number,
  teamSizeMin:number,
)=>{
  return new Promise((resolve,reject)=>{
    const actualMembers = members.filter(e=>e!=""); // to get rid of the null inputs
    let s = actualMembers.length;
    if(s<teamSizeMin || s>teamSizeMax) {alert("team Size not met");resolve(false);}
    for (let i = 0; i < s; i++) {
      for (let j = i + 1; j < s; j++) {
        if (actualMembers[i] == actualMembers[j]) {alert("multiple member with same mail");return resolve(false);}
      }
    }
    // making db call
    resolve(true)
  })
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
    let res= await checkTeamName(eventProp.name, teamDetails.name) 
    if(res){
      res = await checkValidMembers(members,eventProp.teamSize.max,eventProp.teamSize.min)
      if(res) alert("submittable");
      else alert("non submittable");
    }
       //member validity checking
    //member registration checking 
    //submitting the team
  }
  return (<>
  <h1>Event is {eventProp.name}</h1>
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