import React, {useState} from "react";
import Image from "next/image";
import { editUserReq } from "../../queries";

interface User {
	id: string;
	name: string;
	email: string;
	phone: string;
	isVerified: boolean;
	rollNo: string;
	gender: string;
	foodPreference: string;
	shirtSize: string;
}

function VerifyUser({ user }: { user: User }) {

	const [verifiedStatus, setVerifiedStatus] = useState("");
	const [mailStatus, setMailStatus] = useState("");
	const [messageColor, setMessageColor] = useState("bg-transparent");

	async function handleVerify(){
		user.isVerified = true;
		const data = await editUserReq(user);
		const mail = await fetch("http://localhost:3000/api/mail",{
			method: 'POST',
			headers: {
				"Content-Type" : "application/json"
			},
			body: JSON.stringify({
				to: user.email,
				name: user.name,
				subject: "E-Summit'24: College Verification successful",
				body: `<h4>Congratulations ${user.name}, you have been verified successfully.</h4>`
			})
		})
		const mailResult = await mail.json();
		data.success? setVerifiedStatus("User verified.") : setVerifiedStatus("Error in verification.");
		data.success? setMessageColor(" bg-transparent text-green-500") : setMessageColor("bg-transparent text-red-500");
		mailResult.success? setMailStatus("Email sent.") : setMailStatus("Error in sending email.");
	}
	
	async function handleReject(){
		const data = await editUserReq(user);
		const mail = await fetch("http://localhost:3000/api/mail",{
			method: 'POST',
			headers: {
				"Content-Type" : "application/json"
			},
			body: JSON.stringify({
				to: user.email,
				name: user.name,
				subject: "E-Summit'24: College verification request rejected",
				body: `<h4>Hey ${user.name}, We are sorry to inform you that the verification has request has been rejected. Please try again with a valid college proof.</h4>`
			})
		})
		const mailResult = await mail.json();
		data.success? setVerifiedStatus("User rejected.") : setVerifiedStatus("Error in verification.");
		data.success? setMessageColor(" bg-transparent text-green-500") : setMessageColor("bg-transparent text-red-500");
		mailResult.success? setMailStatus("Email sent.") : setMailStatus("Error in sending email.");
	}

	return (
		<div className="flex flex-col p-6 h-full w-full gap-y-4">
			<div>
				<h1 className="text-3xl font-medium">Verify User</h1>
			</div>
			<div className="w-full flex justify-center">
				<div className="w-1/2">
				{/* <Image
					src={user.verifyImage}
					width={600}
					height={500}
					alt="verification-image"
					/> */}
				</div>
				<div className="flex flex-col w-1/2 justify-center gap-y-16">
					<div className="w-full flex justify-center">
						<h2>Roll Number: {user.rollNo}</h2>
					</div>
					<div className="w-full flex justify-center gap-x-12">
						<button className="bg-white text-[#101720] px-2 py-1 rounded-md" onClick={handleVerify}>Verify</button>
						<button className="bg-white text-[#101720] px-2 py-1 rounded-md" onClick={handleReject}>Reject</button>
					</div>
					<div className="w-full flex justify-around">
						<input type="text" disabled className={messageColor} value={verifiedStatus} />
						<input type="text" disabled className={mailStatus==="Email sent."?`bg-transparent text-green-500`:`bg-transparent text-red-500`} value={mailStatus} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default VerifyUser;
