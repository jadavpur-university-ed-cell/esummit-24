'use client'
import React, {useRef} from "react";
import VerifyUser from "./VerifyUser";
import EditUser from "../EditUser";
import {FaXmark, FaPenToSquare } from "react-icons/fa6"

interface User {
	id: string,
	name: string;
	email: string;
	phone: string;
	isVerified: boolean;
	rollNo: string;
	verifyImage: string;
	gender: string;
	foodPreference: string;
	shirtSize: string;
}

export default function UserDetails({ user }: { user: User }) {
	const editUserRef = useRef<HTMLDialogElement>(null);
	const verifyUserRef = useRef<HTMLDialogElement>(null);
	
	function toggleEditUser(){
        if(!editUserRef.current) return;
        editUserRef.current.hasAttribute("open")? editUserRef.current.close() : editUserRef.current.showModal();
    }
	
	function toggleVerifyUser(){
        if(!verifyUserRef.current) return;
        verifyUserRef.current.hasAttribute("open")? verifyUserRef.current.close() : verifyUserRef.current.showModal();
    }

	return (
		<div className="grid grid-cols-6 gap-x-4 text-white text-lg w-full text-center">
			<p>{user.name}</p>
			<p>{user.email}</p>
			<p>{user.phone}</p>
			<p>{user.gender}</p>
			<button onClick={toggleVerifyUser}>Click Here to Verify</button>
			<dialog ref={verifyUserRef} className="relative h-[90vh] w-[70vw] backdrop:bg-[#00000080] bg-[#101720] text-white">
				<VerifyUser user={user} />
				<button onClick={toggleVerifyUser} className="absolute top-4 right-4"><FaXmark /></button>
			</dialog>
			<button className="flex justify-center text-xl" onClick={toggleEditUser}>
				<FaPenToSquare />
			</button>
			<dialog ref={editUserRef} className="relative h-[80vh] w-[70vw] bg-[#101720] backdrop:bg-[#00000080]">
				<EditUser user={user}/>
				<button onClick={toggleEditUser} className="absolute top-4 right-4"><FaXmark /></button>
			</dialog>
		</div>
	);
}