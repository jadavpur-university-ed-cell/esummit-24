import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaEdit, FaSave } from 'react-icons/fa';

interface Team {
  eventName: string;
  teamName: string;
  member1: { name: string };
  member2: { name: string };
  member3: { name: string };
  member4: { name: string };
}

interface User {
  id: string;
  name: string;
  college: string;
  year: string;
  branch: string;
  foodPreference: string;
  image: string | null;
  member1of: Team[];
  member2of: Team[];
  member3of: Team[];
  member4of: Team[];
}

const UserProfile = ({ userId }: { userId: string }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/user/${userId}`);
      const data = await res.json();
      setUser(data);
    }
    fetchData();
  }, [userId]);

  if (!user) return <div>Loading...</div>;
  const teams = [...user.member1of, ...user.member2of, ...user.member3of, ...user.member4of];

  const handleSave = () => {
    console.log('User Saved:', user);
    setIsEditing(false);
  };

  return (
    <div className="relative pb-20 pt-26 min-h-screen bg-[#101720] text-white">
      <div className="flex flex-col items-center">
        <div className="flex items-center flex-col w-full bg-gray-900 p-8 rounded-lg shadow-lg">
          <div className="flex-1 flex flex-col items-center text-center">
            {/* User Information */}
            {isEditing ? (
              <div className="mt-4 w-full space-y-4">
                {/* Editable fields */}
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="text-lg p-2 border rounded-md w-full"
                />
                {/* Add similar fields for college, year, branch, foodPreference */}
              </div>
            ) : (
              <div>
                <h2 className="text-4xl font-bold">{user.name}</h2>
                <p className="text-lg">{user.college}</p>
                <p className="text-lg">{user.year}</p>
                <p className="text-lg">{user.branch}</p>
                <p className="text-lg">{user.foodPreference}</p>
                {user.image && (
                  <div className="w-40 h-40 rounded-full overflow-hidden mt-4">
                    <Image src={user.image} alt="Profile Image" width={160} height={160} />
                  </div>
                )}
              </div>
            )}

            <button onClick={() => setIsEditing(!isEditing)} className="mt-4 px-4 py-2 bg-blue-500 rounded-md">
              {isEditing ? <FaSave /> : <FaEdit />}
            </button>
          </div>
        </div>

        {/* Event Participation */}
        <div className="w-full mt-8 bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Event Participation</h3>
          <table className="w-full text-left table-auto border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="border p-2">Event Name</th>
                <th className="border p-2">Team Name</th>
                <th className="border p-2">Team Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr key={index} className="bg-gray-800">
                  <td className="border p-2">{team.eventName}</td>
                  <td className="border p-2">{team.teamName}</td>
                  <td className="border p-2">
                    {team.member1.name}, {team.member2.name}, {team.member3.name}, {team.member4.name}
                  </td>
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
