"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { FaEdit, FaSave } from "react-icons/fa";

interface UserData {
  name: string;
  college: string;
  branch: string;
  year: string;
  foodPreference: string;
  shirtSize: string;
  phoneNumber: string;
  emailID: string;
  photo: File | null;
}

interface UserEvent {
  name: string;
  teamName: string;
  teamMembers: string;
  teamEmails: string;
}

interface UserProfileProps {
  userData: UserData;
  userEvents: UserEvent[];
}

const UserProfile: React.FC<UserProfileProps> = ({ userData, userEvents }) => {
  const [user, setUser] = useState<UserData>(userData);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUser((prevState) => ({
        ...prevState,
        photo: e.target.files[0],
      }));
    }
  };

  const handleSave = () => {
    console.log("User Saved:", user);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#101720] lg-grid-white/[0.03] md:bg-grid-large-white/[0.03] font-semibold text-[#d62828] text-lg flex flex-col items-center py-16 px-5">
      {/* Profile Section */}
      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <h1 className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d62828] to-[#f77f00] mb-2">
          Welcome, {user.name}
        </h1>
      </div>
      <div className="max-w-4xl w-full bg-[#f2b668] p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          {isEditing ? (
            <div className="space-y-4">
              {/* Name Field */}
              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-orange-500">Name</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="text-xl p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900"
                />
              </div>

              {/* College Field */}
              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-orange-500">College</label>
                <input
                  type="text"
                  name="college"
                  value={user.college}
                  onChange={handleChange}
                  placeholder="College"
                  className="text-xl p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900"
                />
              </div>

              {/* Year Field */}
              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-orange-500">Year</label>
                <input
                  type="text"
                  name="year"
                  value={user.year}
                  onChange={handleChange}
                  placeholder="Year"
                  className="text-xl p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900"
                />
              </div>

              {/* Branch Field */}
              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-orange-500">Branch</label>
                <input
                  type="text"
                  name="branch"
                  value={user.branch}
                  onChange={handleChange}
                  placeholder="Branch"
                  className="text-xl p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900"
                />
              </div>

              {/* Food Preference Field */}
              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-orange-500">Food Preference</label>
                <input
                  type="text"
                  name="foodPreference"
                  value={user.foodPreference}
                  onChange={handleChange}
                  placeholder="Food Preference"
                  className="text-xl p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900"
                />
              </div>

              {/* Shirt Size Field */}
              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-orange-500">Shirt Size</label>
                <input
                  type="text"
                  name="shirtSize"
                  value={user.shirtSize}
                  onChange={handleChange}
                  placeholder="Shirt Size"
                  className="text-xl p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900"
                />
              </div>

              {/* Phone Number Field */}
              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-orange-500">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={user.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="text-xl p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900"
                />
              </div>

              {/* Email ID Field */}
              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-orange-500">Email ID</label>
                <input
                  type="email"
                  name="emailID"
                  value={user.emailID}
                  onChange={handleChange}
                  placeholder="Email ID"
                  className="text-xl p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900"
                />
              </div>

              <div className="mt-6 flex space-x-4">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-[#d62828] text-white rounded-md flex items-center"
                >
                  <FaSave className="mr-2" /> Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Displaying Fields */}
              <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
              <ul className="space-y-2 text-xl">
                <li>
                  <span className="font-semibold text-gray-700">College: </span>
                  {user.college}
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Year: </span>
                  {user.year}
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Branch: </span>
                  {user.branch}
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Food Preference: </span>
                  {user.foodPreference}
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Shirt Size: </span>
                  {user.shirtSize}
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Phone Number: </span>
                  {user.phoneNumber}
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Email ID: </span>
                  {user.emailID}
                </li>
              </ul>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 px-4 py-2 bg-[#d62828] text-white rounded-lg font-semibold"
              >
                Edit
              </button>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <Image
              src={user.photo ? URL.createObjectURL(user.photo) : "/images/avatar.jpg"}
              alt="profile-img"
              height={300}
              width={300}
              className="rounded-full border-4 border-gray-300 shadow-lg"
            />
            <input
              type="file"
              accept="image/*"
              id="uploadBtn"
              onChange={handleFileChange}
              className="absolute bottom-0 right-0 opacity-0 w-0 h-0"
            />
            <label
              htmlFor="uploadBtn"
              className="absolute bottom-0 right-0 p-2 cursor-pointer bg-white text-gray-900 rounded-full shadow-md"
            >
              <FaEdit />
            </label>
          </div>
        </div>
      </div>

      {/* Event Participation Section */}
      <div className="mt-8 w-full max-w-4xl bg-[#f2b668] p-6 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-[#101720] mb-4 text-center">Event Participation</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-500">
            <thead className="bg-[#f77f00] ">
              <tr>
                {["Event Name", "Team Name", "Team Members", "Team Emails"].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-white uppercase tracking-wider text-sm"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-[#eae2b7] divide-y divide-red-800">
              {userEvents.map((event, index) => (
                <tr key={index} className="hover:bg-orange-100 transition duration-200">
                  {["name", "teamName", "teamMembers", "teamEmails"].map((field) => (
                    <td key={field} className="px-6 py-4 text-sm text-gray-900">
                      {event[field as keyof UserEvent]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;