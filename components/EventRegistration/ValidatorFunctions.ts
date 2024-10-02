import allEventNames from "@/lib/allEventNames.json";
import checkUserColide from "./userColide";
import * as z from "zod";

interface eventPropType {
	valid: boolean;
	name: string;
	path: string;
	teamSize: {
		min: number;
		max: number;
	};
}

const checkValidEvent = (eventName: string) => {
	const res: eventPropType = {
		valid: false,
		name: "",
		path: "",
		teamSize: { max: 0, min: 0 },
	};
	for (let i of allEventNames) {
		if (i.path === eventName) {
			res.valid = true;
			res.name = i.name;
			res.path = i.path;
			res.teamSize = { min: i.min, max: i.max };
			return res;
		}
	}
	return res;
};
const checkTeamName = async (event: string, team: string,showWarning:{
	show:boolean, msg:string, title:string
},setShowWarning:Function) => {
	let obj = { ...showWarning };
	return new Promise(async (resolve, reject) => {
		const teamNameSchema = z.string()
			.min(3, { message: "Team Name must be at least 3 characters long." })
			.max(10, { message: "Team Name must be at most 10 characters long." })
			.regex(/^(?=.*[a-zA-Z]).+$/, { message: "Team Name must include at least one letter and cannot consist solely of numbers and symbols." })
			.regex(/^[a-zA-Z0-9_!@#$%^&*()]+$/, { message: "Team Name can only contain letters, numbers, underscores, and certain special characters." });
		const res =await teamNameSchema.safeParseAsync(team);
		if(!res.success) {
			obj.show = true;
			obj.title = "Team Name Error";
			obj.msg = "";
			res.error.errors.forEach(e=>{
			 obj.msg +="" + e.message;
			});
			setShowWarning(obj);
			resolve(false);return;
		}
		try {
			console.log(event);
			const dbres = await fetch("/api/user/checkTeamExists", {
				headers: {
					event: event,
					team: team,
				},
				cache: "no-cache",
			});
			console.log()
			if (dbres.status == 200) {
				const body = await dbres.json();
				if (!body.msg) {
					console.log("here",body.msg);
					resolve(true);
					return;
				} //the team does not Exist
				else {
					obj.show = true;
					obj.title = "Team name error";
					obj.msg = "Team already exits";
					setShowWarning(obj);
					resolve(false);
					return;
				}
			} else {
				console.log("got backend err");
				obj.show = true;
				obj.title = "Internal Error"
				obj.msg = "try again later"
				setShowWarning(obj);
				resolve(false);
				return;
			}
		} catch (err) {
			console.log("got err");
			obj.show = true;
			obj.title = "Internal Error"
			obj.msg = "try again later"
			setShowWarning(obj);
			resolve(false);
			return;
		}
	});
};
export const sanitizeMembers=async (members:Array<string>)=>{
	const schema = z.string().email();
	for(let i of members)
	{
		const res = await schema.safeParseAsync(i);
		if(!res.success){
			alert(`${i} is not a email id`);
			return false;
		}
	}
	return true;
}


const checkValidMembers = (
	members: Array<string>,
	eventName: string,
	teamName: string,
	teamSizeMax: number,
	teamSizeMin: number,
	showWarning:{show:boolean,title:string,msg:string},
	setShowWarning:Function
):Promise<Array<string>> => {
	let obj = {...showWarning};
	return new Promise(async (resolve, reject) => {
		let s = members.length;
		if (s < teamSizeMin || s > teamSizeMax) {
			obj.show = true;
			obj.msg = `Team Size should be ${teamSizeMin} to ${teamSizeMax} members`;
			obj.title = "Team Size not fulfiled";
			setShowWarning(obj);
			resolve([]);
			return;
		}
		for (let i = 0; i < s; i++) {
			for (let j = i + 1; j < s; j++) {
				if (members[i] == members[j]) {
					obj.show = true;
					obj.msg = `one or more member with same email`;
					obj.title = "Duplicate members";
					setShowWarning(obj);
					resolve([]);
					return;
				}
			}
		}
		//checking if user Exists or not
		const ids: Array<string> = [];
		for (let i of members) {
			const dbres = await fetch("/api/user/getUserId", {
				headers: {
					mail: i,
				},
			});
			if (dbres.status == 500) {
				obj.show = true;
				obj.title = "Internal Error";
				obj.msg = `please try again later`;
				setShowWarning(obj);
				resolve([]);
				return;
			}
			if (dbres.status == 404) {
				const res = await dbres.json();
				if (res.msg === "userNotFound") {
					obj.show = true;
					obj.title = "Member Not found";
					obj.msg = `${i} not registrered`;
					setShowWarning(obj);
				}
				else {
					alert("could not verify users plse try again later");
				}
				resolve([]);
				return;
			}
			if (dbres.status == 200) {
				const res = await dbres.json();
				ids.push(res.id);
			}
		}
		for (const i in ids) {
			const a = await checkUserColide(ids[i], eventName, teamName);
			if (!a) {
				obj.show = true;
				obj.title = "Member already in a team";
				obj.msg = `${members[i]} is already in a team`;
				setShowWarning(obj);
				resolve([]);
				return;
			}
		}
		resolve(ids);
	});
};

export { checkTeamName, checkValidEvent, checkValidMembers };
export type { eventPropType };
