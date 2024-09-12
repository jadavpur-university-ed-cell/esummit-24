'use client'
import React, {useRef} from "react"
import { FaPenToSquare, FaXmark } from "react-icons/fa6";
import EditUser from "../EditUser";

interface User {
	id: string;
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

	function toggleEditUser() {
		if (!editUserRef.current) return;
		editUserRef.current.hasAttribute("open")
			? editUserRef.current.close()
			: editUserRef.current.showModal();
	}

	if (!user.rollNo) user.rollNo = "Non JU";
	return (
		<div className="grid grid-cols-6 gap-x-4 text-white text-lg w-full text-center">
			<p>{user.name}</p>
			<p>{user.email}</p>
			<p>{user.phone}</p>
			<p>{user.rollNo}</p>
			<p>{user.gender}</p>
			<button className="flex justify-center text-xl" onClick={toggleEditUser}>
				<FaPenToSquare />
			</button>
			<dialog ref={editUserRef} className="relative h-[80vh] w-[70vw] backdrop:bg-[#00000080] bg-[#101720] text-white">
				<EditUser user={user} />
				<button onClick={toggleEditUser} className="absolute top-4 right-4"><FaXmark /></button>
			</dialog>
		</div>
	);
}