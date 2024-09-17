'use client'
import checkUserColide from './userColide'
import allEventNames from '@/utils/allEventNames'
import {MemberInput,TeamInput} from './Comp'
import {useState } from 'react'
import {useRouter } from 'next/navigation'

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
  if(team == "") {alert('team name is empty');resolve(false);return;}
  fetch("/api/user/checkTeamExists",{
    headers:{
      "event":event,
      "team":team
    },
    cache:'no-cache'
   }).then(res =>{
    if(res.status == 200){
      res.json().then((body)=>{
        if(!body.msg) {resolve(true);return}//the team does not Exist
        else {alert("team already exits");resolve(false);return;}
      })
    }
    else {
    console.log('got backend err');
      alert('something went wrong try again later');
       resolve(false);
       return;
    }
   }).catch(err=>{
    console.log('got err');
      alert('something went wrong try again later');
       resolve(false);
       return;
   })
  })
}

const checkValidMembers=(
  members:Array<string>,
  eventName:string,
  teamName:string,
  teamSizeMax:number,
  teamSizeMin:number,
)=>{
  return new Promise(async (resolve,reject)=>{
    let s = members.length;
    if(s<teamSizeMin || s>teamSizeMax) {alert("team Size not met");resolve(false);return;}
    for (let i = 0; i < s; i++) {
      for (let j = i + 1; j < s; j++) {
        if (members[i] == members[j]) {alert("multiple member with same mail");return resolve(false);}
      }
    }
    //checking if user Exists or not
    const ids:Array<string>= [];
    for(let i of members){
      const dbres = await fetch("/api/user/getUserId",{
        headers:{
          mail:i
        }
      });
      if(dbres.status == 500){
        alert("could verify users plse try again later");
        resolve(false);return;
      }
      if(dbres.status == 404){
        dbres.json().then(res=>{
          if(res.msg === 'userNotFound') alert(`${i} not registered`);
          else alert("could verify users plse try again later");
          resolve(false);return;
        })
      }
      if(dbres.status == 200){
        dbres.json().then(res=>{
          ids.push(res.id);
        })
      }
    }
    console.log(ids);
    for( const i in ids){
      const a = await checkUserColide(ids[i],eventName,teamName);
      if(!a){
        alert(`${members[i]} is already in a team`);
        resolve(false);
        return;
      }
    }
    resolve(true);
  })
}

const Event = ({params}:{params:{eventName:string}}) => {
  const router = useRouter();
  if(!checkValidEvent(params.eventName).valid) router.push('/eventRegistration')
  const eventProp:eventPropType = checkValidEvent(params.eventName);

  const [userMail, setUserMail] = useState<string>("test@gmail.com");
  const [members, setMembers] = useState<Array<string>>([userMail]);
  const [teamDetails, setTeamDetails] = useState<{name:string,size:number}>({name:"",size:eventProp.teamSize.max});

  const addMember=()=>{setMembers([...members,""])}
  const onSubmit=async()=>{
    //checking team validation
    let res = await checkTeamName(eventProp.name, teamDetails.name) 
    if(res){
      //member validity checking , checks member registration, checks member team collilsion
      const actualMembers = members.filter(e => e != "");
      res = await checkValidMembers(actualMembers,eventProp.name,teamDetails.name,eventProp.teamSize.max,eventProp.teamSize.min)
      if(res){
        //submitting the team
        const sendableMembers:{
          eventName:string,
          teamName:string,
          member1: string | null,
          member2: string | null,
          member3: string | null,
          member4: string | null,
        } = { eventName:eventProp.name,teamName:teamDetails.name,member1: null, member2: null, member3: null, member4: null}
        //array to object conversion
        try {sendableMembers.member1 = actualMembers[0];}catch(e){};
        try {sendableMembers.member2 = actualMembers[1];}catch(e){};
        try {sendableMembers.member3 = actualMembers[2];}catch(e){};
        try {sendableMembers.member4 = actualMembers[3];}catch(e){};
        //console.log(sendableMembers);
        alert(JSON.stringify(sendableMembers));
      } 
      else alert("non submittable");
    }
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
            onClick={onSubmit}
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