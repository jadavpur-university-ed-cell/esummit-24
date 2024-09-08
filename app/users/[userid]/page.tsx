import React, { useState } from 'react';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

interface User {
  name: string;
  college: string;
  year: string;
  branch: string;
  image: string | null;
  foodPreference: string; 
  shirtSize: string;      
  gender: string;         
}

interface Team {
  teamId: string;
  eventName: string;
  teamName: string;
  member1: { id: string; name: string };
  member2: { id: string; name: string };
  member3: { id: string; name: string };
  member4: { id: string; name: string };
}

const UserProfile = async ({ params }: { params: { userid: string } }) => {
  const prisma = new PrismaClient();
  const { userid } = params;

  // Fetch user data
  const user = await prisma.user.findUnique({
    where: { id: userid },
  });

  // Fetch teams the user is part of
  const teams = await prisma.team.findMany({
    where: {
      OR: [
        { member1Id: userid },
        { member2Id: userid },
        { member3Id: userid },
        { member4Id: userid },
      ],
    },
    include: {
      member1: { select: { id: true, name: true } },
      member2: { select: { id: true, name: true } },
      member3: { select: { id: true, name: true } },
      member4: { select: { id: true, name: true } },
    },
  });

  const [editMode, setEditMode] = useState(false);
  const [foodPreference, setFoodPreference] = useState(user?.foodPreference || '');
  const [shirtSize, setShirtSize] = useState(user?.shirtSize || '');

  const handleSave = async () => {
  
    await prisma.user.update({
      where: { id: userid },
      data: {
        foodPreference,
        shirtSize,
      },
    });

    setEditMode(false); // Exit edit mode after saving
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-[#101720] text-white flex flex-col items-center py-10">
      <main className="w-4/5 flex flex-col items-center">
        <h1 className="text-4xl mb-5">User Profile</h1>

        {/* User Info Card */}
        <div className="w-full md:w-3/4 lg:w-1/2 bg-gray-900 p-8 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col items-start space-y-2">
            <p className="text-xl font-semibold">{user.name}</p>
            <p className="text-lg">{user.college}</p>
            <p className="text-lg">{user.year}</p>
            <p className="text-lg">{user.branch}</p>
            
            {editMode ? (
              <>
                <label className="text-lg">
                  Food Preference:
                  <input
                    className="ml-2 text-black"
                    type="text"
                    value={foodPreference}
                    onChange={(e) => setFoodPreference(e.target.value)}
                  />
                </label>
                <label className="text-lg">
                  Shirt Size:
                  <input
                    className="ml-2 text-black"
                    type="text"
                    value={shirtSize}
                    onChange={(e) => setShirtSize(e.target.value)}
                  />
                </label>
                <button
                  onClick={handleSave}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <p className="text-lg">Food Preference: {user.foodPreference}</p>
                <p className="text-lg">Shirt Size: {user.shirtSize}</p>
                <button
                  onClick={() => setEditMode(true)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Edit
                </button>
              </>
            )}
            <p className="text-lg">Gender: {user.gender}</p>
          </div>
        </div>

        <h2 className="text-3xl mb-4">Event Participation</h2>
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Event Name</th>
              <th className="px-4 py-2">Team Name</th>
              <th className="px-4 py-2">Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index} className="bg-[#202d3fa1]">
                <td className="border px-4 py-2">{team.eventName}</td>
                <td className="border px-4 py-2">{team.teamName}</td>
                <td className="border px-4 py-2">
                  {team.member1.name}, {team.member2.name}, {team.member3.name}, {team.member4.name}
                </td>
                <td className="border px-4 py-2">
                  <Link
                    className="text-white bg-[#0000005d] px-3 py-1 rounded-md"
                    href={`/events/${team.eventName}`}
                  >
                    View Team
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default UserProfile;
