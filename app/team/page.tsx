'use client'
import React, { useState } from 'react';

// Define the type for team member
type Member = {
  name: string;
  role: string;
  imageUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
};

// Define the type for each team
type Team = {
  name: string;
  members: Member[];
};

// Create the team data
const teams: Team[] = [
  {
    name: 'Marketing',
    members: [
      {
        name: 'Whitney Francis',
        role: 'Copywriter',
        imageUrl:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      // Add more marketing team members here
    ],
  },
  {
    name: 'Tech',
    members: [
      {
        name: 'John Doe',
        role: 'Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1603415526960-f36a7f2b1339?crop=faces&fit=crop&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      // Add more tech team members here
    ],
  },
  {
    name: 'Finance',
    members: [
      {
        name: 'Jane Smith',
        role: 'Accountant',
        imageUrl:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      // Add more finance team members here
    ],
  },
];

// Define the classNames function with TypeScript types
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// Main component
const TeamPage=()=> {
  const [activeTeam, setActiveTeam] = useState(teams[0].name); // Default to first team

  // Get the currently active team's members
  const activeTeamMembers = teams.find((team) => team.name === activeTeam)?.members || [];

  return (
    <div>
      {/* Tabs for Team Selection */}
      <div className="sm:block bg-gray-100">
        <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
          {teams.map((team, tabIdx) => (
            <button
              key={team.name}
              onClick={() => setActiveTeam(team.name)}
              className={classNames(
                team.name === activeTeam ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === teams.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
              )}
              aria-current={team.name === activeTeam ? 'page' : undefined}
            >
              <span>{team.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  team.name === activeTeam ? 'bg-indigo-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </button>
          ))}
        </nav>
      </div>

      {/* Team Members Display */}
      <div className="bg-[#101720]">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{activeTeam} Team</h2>
              <p className="text-xl text-gray-500">
                Meet the people behind the scenes who make this event possible
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
            >
              {activeTeamMembers.map((person) => (
                <li key={person.name}>
                  <div className="space-y-6">
                    <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={person.imageUrl} alt={person.name} />
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                      <ul role="list" className="flex justify-center space-x-5">
                        <li>
                          <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeamPage