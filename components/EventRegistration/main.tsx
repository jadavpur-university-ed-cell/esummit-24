'use client'
import {MemberInput,TeamInput} from './Comp'
import {useEffect, useState } from 'react'
import {useRouter } from 'next/navigation'
import {checkValidEvent,checkTeamName,checkValidMembers,eventPropType } from './ValidatorFunctions'
import Loading from "@/components/Loading"
import { getSession } from 'next-auth/react'


const getRes=async() =>{
  const res = getSession();
  console.log(res);
}
const Event = ({params}:{params:{eventName:string}}) => {
  const router = useRouter();
  if(!checkValidEvent(params.eventName).valid) router.push('/eventRegistration')
  const eventProp:eventPropType = checkValidEvent(params.eventName);

  const [userMail, setUserMail] = useState<string>("");
  const [members, setMembers] = useState<Array<string>>([userMail]);
  const [teamDetails, setTeamDetails] = useState<{name:string,size:number}>({name:"",size:eventProp.teamSize.max});
  const [loading, setLoading] = useState<boolean>(false); 

  useEffect(()=>{
    setLoading(true);
    getSession().then(res=>{
      //@ts-ignore
      setUserMail(res?.user.email);
    })
  },[])
  useEffect(()=>{
    setMembers([userMail]);
    setLoading(false);
  },[userMail])

  const addMember=()=>{setMembers([...members,""])}
  const onSubmit=async()=>{
    //checking team validation
    setLoading(true);
    let res = await checkTeamName(eventProp.name, teamDetails.name) 
    if(res){
      //member validity checking , checks member registration, checks member team collilsion
      const actualMembers = members.filter(e => e != "");
      const resIds = await checkValidMembers(actualMembers,eventProp.name,teamDetails.name,eventProp.teamSize.max,eventProp.teamSize.min)
      if(resIds.length){
        //submitting the team
        const sendableBody:{
          eventName:string,
          teamName:string,
          member1Id: string | null,
          member2Id: string | null,
          member3Id: string | null,
          member4Id: string | null,
        } = { eventName:eventProp.name,teamName:teamDetails.name,member1Id: null, member2Id: null, member3Id: null, member4Id: null}
        //array to object conversion
        //sendableBody.member1Id = {resIds.length>=1? resIds[1]:null};
        sendableBody.member1Id = resIds.length>=1? resIds[0]:null;
        sendableBody.member2Id = resIds.length>=2? resIds[1]:null;
        sendableBody.member3Id = resIds.length>=3? resIds[2]:null;
        sendableBody.member4Id = resIds.length>=4? resIds[3]:null;
        console.log(sendableBody);
        const dbres = await fetch("/api/teams/",{
          method:"POST",
          body:JSON.stringify(sendableBody)
        });
        if(dbres.status == 201) alert("team Created");
        else {
          alert("can't create team now");
          const res = await dbres.json();
          console.log(res);
        }
      } 
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
          {/* for the loading feature */}
          {
            loading? <Loading/> : <></>
          }
        </div>
      </div>
    </div>
  </>
  )
}


export default Event;