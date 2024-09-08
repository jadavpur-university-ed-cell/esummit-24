import React from 'react';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

interface User {
  name: string;
  college: string;
  year: string;
  branch: string;
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

const UserProfile = ({ user, teams }: { user: User; teams: Team[] }) => {
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

export const getServerSideProps = async (context: { params: { userid: string } }) => {
  const prisma = new PrismaClient();
  const { userid } = context.params;

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

  return {
    props: {
      user,
      teams,
    },
  };
};

export default UserProfile;
