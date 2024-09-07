import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaEdit, FaSave } from 'react-icons/fa';

interface User {
  name: string;
  college: string;
  year: string;
  branch: string;
  foodPreference: string;
  image: string | null;
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

const UserProfile = ({ userid }: { userid: string }) => {
  const [user, setUser] = useState<User | null>(null);
  const [teams, setTeams] = useState<Team[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user data
    fetch(`/api/user/${userid}/user`)
      .then(response => response.json())
      .then(data => {
        setUser(data.user);
        setTeams(data.teams);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, [userid]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => prev ? { ...prev, [e.target.name]: e.target.value } : null);
  };

  const handleSave = () => {
    console.log('User Saved:', user);
    setIsEditing(false);
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-[#101720] text-white flex flex-col items-center py-10">
      <main className="w-4/5 flex flex-col items-center">
        <h1 className="text-4xl mb-5">User Profile</h1>

        {/* User Info Card */}
        <div className="w-full md:w-3/4 lg:w-1/2 bg-gray-900 p-8 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col items-start">
            {isEditing ? (
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-2 bg-gray-800 text-white rounded-md"
                />
                <input
                  type="text"
                  name="college"
                  value={user.college}
                  onChange={handleChange}
                  placeholder="College"
                  className="w-full p-2 bg-gray-800 text-white rounded-md"
                />
                <input
                  type="text"
                  name="year"
                  value={user.year}
                  onChange={handleChange}
                  placeholder="Year"
                  className="w-full p-2 bg-gray-800 text-white rounded-md"
                />
                <input
                  type="text"
                  name="branch"
                  value={user.branch}
                  onChange={handleChange}
                  placeholder="Branch"
                  className="w-full p-2 bg-gray-800 text-white rounded-md"
                />
                <input
                  type="text"
                  name="foodPreference"
                  value={user.foodPreference}
                  onChange={handleChange}
                  placeholder="Food Preference"
                  className="w-full p-2 bg-gray-800 text-white rounded-md"
                />
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center"
                >
                  <FaSave className="mr-2" /> Save
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-xl font-semibold">{user.name}</p>
                <p className="text-lg">{user.college}</p>
                <p className="text-lg">{user.year}</p>
                <p className="text-lg">{user.branch}</p>
                <p className="text-lg">{user.foodPreference}</p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md flex items-center"
                >
                  <FaEdit className="mr-2" /> Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>

        <h2 className="text-3xl mb-4">Event Participation</h2>
        <div className="w-full grid grid-cols-6 place-items-center gap-x-4">
          {teams.map((team, index) => (
            <div
              key={index}
              className={clsx(
                "col-span-6 md:col-span-2 lg:col-span-1 bg-[#202d3fa1] p-4 rounded-lg flex flex-col items-center justify-between h-48"
              )}
            >
              <h3 className="text-xl">{team.eventName}</h3>
              <p>Team: {team.teamName}</p>
              <p>Members: {team.member1.name}, {team.member2.name}, {team.member3.name}, {team.member4.name}</p>
              <Link
                className="text-white bg-[#0000005d] px-3 py-1 rounded-md"
                href={`/events/${team.eventName}`}
              >
                View Team
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
