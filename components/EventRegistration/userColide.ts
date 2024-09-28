export default async function checkUserColide(userId:string,eventName:string,team:string){
  return new Promise(async(resolve,reject)=>{
    const dbres = await fetch("/api/user/getEventAndTeam",{
      headers:{
        userId:userId,
      }
    });
    let data = await dbres.json();
    data = data.members;
    let teamList = [...data.member1of,...data.member2of,...data.member3of,...data.member4of];
    teamList = teamList.filter(e=>e.length!=0);
    const outcome = teamList.filter(e=>e.eventName == eventName);
    if(outcome.length==0)resolve(true);
    else resolve(false);
  })
}