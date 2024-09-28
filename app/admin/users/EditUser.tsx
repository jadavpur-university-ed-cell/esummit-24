import React, {useState} from "react";
import { editUserReq } from "../queries";

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

function EditUser({ user }: { user: User }) {

	const [formData, setFormData] = useState(user);
	const [editStatus, setEditStatus ] = useState(" ");
	const [messageColor, setMessageColor] = useState("bg-transparent");

	async function handleFormSubmit(e: React.FormEvent) {
		e.preventDefault();
		const data = await editUserReq(formData);
		data.success? setEditStatus("User edited successfully!") : setEditStatus("Error in editing user.");
		data.success? setMessageColor(" bg-transparent text-green-500") : setMessageColor("bg-transparent text-red-500");
		handleReset(e);
	}

	function handleFormEdit(e:React.ChangeEvent<HTMLInputElement>, formField: string){
		setFormData({
			...formData,
			[formField] : e.target.value
		})
	}

	function handleSelectChange(e:React.ChangeEvent<HTMLSelectElement>, formField: string){
		setFormData({
			...formData,
			[formField] : e.target.value
		})
	}

	function handleReset(e:React.FormEvent){
		e.preventDefault();
		setFormData(user);
	}

	return (
		<div className="flex flex-col text-white h-full">
			<h1 className="text-3xl my-5">Edit User</h1>
			<form className="flex flex-col justify-around items-center h-full">
				<div className="flex justify-between w-4/5 ">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" value={formData.name} onChange={(e)=>handleFormEdit(e,"name")} className="bg-transparent outline-none border-b" autoComplete="off"/>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" value={formData.email} onChange={(e)=>handleFormEdit(e,"email")} className="bg-transparent outline-none border-b" autoComplete="off" />
				</div>
				<div className="flex justify-between w-4/5 ">
					<label htmlFor="phone">Phone Number</label>
					<input type="text" name="phone" id="phone" value={formData.phone} onChange={(e)=>handleFormEdit(e,"phone")} className="bg-transparent outline-none border-b" autoComplete="off"/>
					<label htmlFor="rollNo">Roll Number</label>
					<input type="text" name="rollNo" id="rollNo" value={formData.rollNo} onChange={(e)=>handleFormEdit(e,"rollNo")} className="bg-transparent outline-none border-b" autoComplete="off" />
				</div>
				<div className="flex justify-between w-4/5 ">
					<label htmlFor="gender" className="text-white">Gender</label>
					<input type="text" name="gender" id="gender" value={formData.gender} onChange={(e)=>handleFormEdit(e,"gender")} className="bg-transparent outline-none border-b" autoComplete="off"/>
					<label htmlFor="foodPreference">Food Preference</label>
					<input type="text" name="foodPreference" id="foodPreference" value={formData.foodPreference} onChange={(e)=>handleFormEdit(e,"foodPreference")} className="bg-transparent outline-none border-b" autoComplete="off" />
				</div>
				<div className="flex gap-x-6">
					<label htmlFor="shirtSize">Shirt Size</label>
					<select name="shirtSize" id="shirtSize" className="text-[#101720] font-medium" value={formData.shirtSize} onChange={(e)=>handleSelectChange(e,"shirtSize")}>
						<option value={formData.shirtSize} hidden>{formData.shirtSize}</option>
						<option value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
						<option value="extralarge">Extra Large</option>
					</select>
				</div>
				<div className="w-4/5 flex justify-around">
				<button type="submit" onClick={handleFormSubmit} className="bg-white rounded-sm px-2 py-1 text-[#101720] font-medium">
					Edit User
				</button>
				<input type="text" className={messageColor} value={editStatus} disabled />
				<button className="bg-white text-[#101720] px-2 py-1 rounded-sm font-medium" onClick={handleReset}>
					Reset Details
				</button>
				</div>
			</form>
		</div>
	);
}

export default EditUser;
