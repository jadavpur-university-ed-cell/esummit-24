import allEventNames from"@/lib/allEventNames.json"
import checkUserColide from './userColide'
import { PrismaClient } from "@prisma/client"

interface eventPropType{
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
  return new Promise(async (resolve, reject) => {
    if (team == "") { alert('team name is empty'); resolve(false); return; }
    try {
      const dbres = await fetch("/api/user/checkTeamExists", {
        headers: {
          "event": event,
          "team": team
        },
        cache: 'no-cache'
      })
      if (dbres.status == 200) {
        const body = await dbres.json()
        if (!body.msg) { resolve(true); return }//the team does not Exist
        else { alert("team already exits"); resolve(false); return; }
      }
      else {
        console.log('got backend err');
        alert('something went wrong try again later');
        resolve(false);
        return;
      }
    }
    catch (err) {
      console.log('got err');
      alert('something went wrong try again later');
      resolve(false);
      return;
    }
  })
}

const checkValidMembers=(
  members:Array<string>,
  eventName:string,
  teamName:string,
  teamSizeMax:number,
  teamSizeMin:number,
):Promise<Array<string>>=>{
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
        resolve([]);return;
      }
      if(dbres.status == 404){
        const res = await dbres.json()
        if (res.msg === 'userNotFound') alert(`${i} not registered`);
        else alert("could verify users plse try again later");
        resolve([]);
        return;
      }
      if (dbres.status == 200) {
        const res = await dbres.json();
        ids.push(res.id);
      }
    }
    for( const i in ids){
      const a = await checkUserColide(ids[i],eventName,teamName);
      if(!a){
        alert(`${members[i]} is already in a team`);
        resolve([]);
        return;
      }
    }
    resolve(ids);
  })
}


export {checkTeamName,checkValidEvent,checkValidMembers} ;
export type {eventPropType};