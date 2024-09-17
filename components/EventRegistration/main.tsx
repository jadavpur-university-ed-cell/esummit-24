'use client'
import checkUserColide from './userColide'
import {MemberInput,TeamInput} from './Comp'
import {useState } from 'react'
import {useRouter } from 'next/navigation'
import { checkValidEvent,checkTeamName,checkValidMembers,eventPropType } from './ValidatorFunctions'


const Event = ({params}:{params:{eventName:string}}) => {
  const router = useRouter();
  if(!checkValidEvent(params.eventName).valid) router.push('/eventRegistration')
  const eventProp:eventPropType = checkValidEvent(params.eventName);

  const [userMail, setUserMail] = useState<string>("test@gmail.com");
  const [members, setMembers] = useState<Array<string>>([userMail]);
  const [teamDetails, setTeamDetails] = useState<{name:string,size:number}>({name:"",size:eventProp.teamSize.max});
  const [loading, setLoading] = useState<boolean>(false); 

  const addMember=()=>{setMembers([...members,""])}
  const onSubmit=async()=>{
    //checking team validation
    setLoading(true);
    let res = await checkTeamName(eventProp.name, teamDetails.name) 
    if(res){
      //member validity checking , checks member registration, checks member team collilsion
      const actualMembers = members.filter(e => e != "");
      res = await checkValidMembers(actualMembers,eventProp.name,teamDetails.name,eventProp.teamSize.max,eventProp.teamSize.min)
      console.log(res);
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
    setLoading(false);
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
          {
            loading? <div>Checking</div> : <></>
          }
        </div>
      </div>
    </div>
  </>
  )
}


export default Event;