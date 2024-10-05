"use client";
import  { Success,Warning } from "@/components/Modals";
import { MemberInput, TeamInput } from "./Comp";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
	checkValidEvent,
	checkTeamName,
	checkValidMembers,
	eventPropType,
	sanitizeMembers,
} from "./ValidatorFunctions";

const Event = ({params,email}: {
	params: { eventName: string };
	email: string;
}) => {
	const router = useRouter();
	if (!checkValidEvent(params.eventName).valid)
		router.push("/eventRegistration");
	const eventProp: eventPropType = checkValidEvent(params.eventName);
	const [userMail, setUserMail] = useState<string>(email);
	const [members, setMembers] = useState<Array<string>>([userMail]);
	const [teamDetails, setTeamDetails] = useState<{
		name: string;
		size: number;
	}>({ name: "", size: eventProp.teamSize.max });
	const [loading, setLoading] = useState<boolean>(false);

	const [showWarning,setShowWarning] = useState<{show:boolean,title:string,msg:string}>({
		show:false,
		title:"Got an Err",
		msg:"got an err"
	})
	const [showSuccess,setShowSuccess] = useState<{show:boolean,title:string,msg:string}>({
		show:false,
		title:"Succesfull",
		msg:"Succesfull msg"
	})

	// console.log(params.eventName);

	if(params.eventName=="hacknpitch") 
		return (<div className="flex flex-col items-center gap-y-3 p-8">
				<h1 className="text-[#fcbf49] text-2xl font-semibold">Register via Unstop</h1>
				<Link href="#" className="underline text-[#eae2b7]">Unstop Link</Link>
			</div>)

	const addMember = () => {
		setMembers([...members, ""]);
	};
	const onSubmit = async () => {
		//checking team validation
		setLoading(true);
		let res = await checkTeamName(eventProp.name, teamDetails.name,showWarning,setShowWarning);
		if (res) {
			//member validity checking , checks member registration, checks member team collilsion
			const actualMembers = members.filter((e) => e != "");

			//zod validation on the the given member's email
			const res = await sanitizeMembers(actualMembers);
			if(!res) {setLoading(false);return;}
			// zod validation done 

			//validating the members
			const resIds = await checkValidMembers(
				actualMembers,
				eventProp.name,
				teamDetails.name,
				eventProp.teamSize.max,
				eventProp.teamSize.min,
				showWarning,
				setShowWarning,
			);
			//validating members done

			if (resIds.length) {

				//submitting the team
				const sendableBody: {
					eventName: string;
					teamName: string;
					member1Id: string | null;
					member2Id: string | null;
					member3Id: string | null;
					member4Id: string | null;
				} = {
					eventName: eventProp.name,
					teamName: teamDetails.name,
					member1Id: null,
					member2Id: null,
					member3Id: null,
					member4Id: null,
				};
				//array to object conversion
				//sendableBody.member1Id = {resIds.length>=1? resIds[1]:null};
				sendableBody.member1Id = resIds.length >= 1 ? resIds[0] : null;
				sendableBody.member2Id = resIds.length >= 2 ? resIds[1] : null;
				sendableBody.member3Id = resIds.length >= 3 ? resIds[2] : null;
				sendableBody.member4Id = resIds.length >= 4 ? resIds[3] : null;
				console.log(sendableBody);
				const dbres = await fetch("/api/teams/", {
					method: "POST",
					body: JSON.stringify(sendableBody),
				});
				if (dbres.status == 201) {
					let obj = {...showSuccess};
					obj.title = "Congratulations";
					obj.msg = "Team Created";
					obj.show = true;
					setShowSuccess(obj);
				}
				else {
					const obj = {...showWarning};
					obj.title = "Internal Issues"
					obj.msg = "Try again later"
					setShowWarning(obj);
					alert("Error in creating team");
					const res = await dbres.json();
					console.log(res);
				}
			}
		}
		// setting loader to false
		setLoading(false);
	};
	return (
		<>
			<div className="flex flex-col p-8 pb-0">
				<div className="w-full flex justify-center">
					<h1 className="text-4xl font-bold text-[#fcbf49]">
						Event Registration
					</h1>
				</div>
				<div className="relative py-6 px-4 sm:py-6 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:flex justify-center">
					<div className="flex justify-center">
						<div className="max-w-md mx-auto sm:max-w-lg lg:mx-0 flex flex-col items-center gap-y-3">
							<h2 className="text-xl font-normal tracking-tight sm:text-2xl text-[#f77f40]">
								Participate in {eventProp.name}
							</h2>
							<TeamInput
								teamDetails={teamDetails}
								setTeamDetails={setTeamDetails}></TeamInput>
							{/* the input boxes are rendered here */}
							{members.map((data, index) => {
								return (
									<MemberInput
										key={index}
										id={index}
										label={`Member ${index + 1}`}
										state={members}
										setState={setMembers}
										disabled={index === 0 ? true : false}></MemberInput>
								);
							})}
							<div className="flex items-center space-x-2">
								{members.length < teamDetails.size ? (
								<button onClick={addMember} className="bg-gray-700 text-gray-100 text-sm px-3 py-2 rounded-full">Add Member</button>
							) : (
								<></>
							)}
							{/* submit button rendered here */}
							<button
								type="submit"
								className="inline-flex justify-center py-2 px-3 font-medium border border-transparent shadow-sm text-sm rounded-full text-[#101720] bg-[#fcbf49] hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grape-500"
								onClick={onSubmit}
								disabled={loading}>
								{loading?"Checking..":"Register"}
							</button>
							{/* for the loading feature */}
						</div>
							{loading ? <p className="text-sm text-[#fcbf49]">Loading...</p> : <></>}
					 </div>
				   </div>
					<Warning showWarning={showWarning} setShowWarning={setShowWarning}/>
					<Success showSuccess={showSuccess} setShowSuccess={setShowSuccess}/>
				</div>
			</div>
		</>
	);
};

export default Event;
