'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa6';
import Footer from '@/components/Homepage/Footer/Footer';
//type for team member
type Member = {
  name: string;
  role: string;
  imageUrl: string;
  instaUrl: string;
  linkedinUrl: string;
};

//type for each team
type Team = {
  name: string;
  members: Member[];
};

//the team data
const teams: Team[] = [
  {
    name: 'Tech',
    members: [
      {
        name: 'Piyush Gupta',
        role: 'Tech Lead',
        imageUrl:
          '/Team/Piyush_Kumar_Gupta.png',
        instaUrl: 'https://www.instagram.com/kpiyushgupta/',
        linkedinUrl: 'http://linkedin.com/in/kumarpiyushgupta',
      },
      {
        name: 'Rahul Pandey',
        role: 'Backend Developer',
        imageUrl:
          '/Team/Rahul_Pandey.jpeg',
        instaUrl: 'https://www.instagram.com/rahul.p_19?igsh=MWYzaTZlc3hzZ25oeA==',
        linkedinUrl: 'https://www.linkedin.com/in/rahul-pandey2005/',
      },
      {
        name: 'Ahnik Purkait ',
        role: 'Frontend Developer',
        imageUrl:
          '/Team/Ahnik_Purkait.jpg',
        instaUrl: 'https://www.instagram.com/voldyys_moldies',
        linkedinUrl: 'https://www.linkedin.com/in/ahnikpurkait',
      },
      {
        name: 'Aindree Chatterjee',
        role: 'Frontend Developer',
        imageUrl:
          '/Team/Aindree_Chatterjee.png',
        instaUrl: 'https://www.instagram.com/aindree2005/',
        linkedinUrl: 'https://www.linkedin.com/in/aindree-chatterjee-b93279201/',
      },
      {
        name: 'Arnob Bhakta',
        role: 'OC, Backend Developer',
        imageUrl:
          '/Team/Arnob_Bhakta.jpg',
        instaUrl: '#',
        linkedinUrl: 'https://www.linkedin.com/in/arnob-bhakta-a86531296/',
      },
      {
        name: 'Anuran Das',
        role: 'OC, Frontend Developer',
        imageUrl:
          '/Team/Anuran_Das.png',
        instaUrl: 'https://www.instagram.com/anu.run?igsh=MTRvcHlla2x6dTY3dw==',
        linkedinUrl: 'https://www.linkedin.com/in/anuran-das-86898a23b',
      },
      {
        name: 'Rishob Mondal',
        role: 'Frontend Developer',
        imageUrl:
          '/Team/Rishob_Mondal.jpg',
        instaUrl: 'https://www.instagram.com/mondal_rishob?igsh=MXkybzNxcWlpNG91bg==',
        linkedinUrl: 'https://www.linkedin.com/in/rishob-mondal-671497258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        name: 'Yash Raj Singh',
        role: 'Frontend Developer',
        imageUrl:
          '/Team/Yash_Raj_Singh.jpg',
        instaUrl: 'https://www.instagram.com/raj.yashhh/',
        linkedinUrl: 'https://www.linkedin.com/in/yashhhhh/',
      }
    ],
  },
  {
    name: 'PR',
    members: [
      {
        name: 'Sohamdeep Mondal',
        role: 'PR Lead',
        imageUrl:
          '/Team/Sohamdeep_Mondal.jpeg',
        instaUrl: 'https://www.instagram.com/sohamdeep7?igsh=Y21vODFndWlpdGto&utm_source=qr',
        linkedinUrl: 'https://www.linkedin.com/in/sohamdeep-mondal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      },
      // Add more Public Relations team members here
    ],
  },
  {
    name: 'Finance',
    members: [
      {
        name: 'Jotiraditya Banerjee',
        role: 'Finance Lead',
        imageUrl:
          '/Team/Jotiraditya_Banerjee.png',
        instaUrl: 'https://www.instagram.com/_._leviianthan_._',
        linkedinUrl: 'https://www.linkedin.com/in/jotiraditya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        name: 'Aditya Anand',
        role: 'Sponsorship Member',
        imageUrl:
          '/Team/Aditya_Anand.jpg',
        instaUrl: 'https://www.instagram.com/aditya_anand176?igsh=c3F6ZHFwbWI1cnFx',
        linkedinUrl: 'https://www.linkedin.com/in/aditya-astralite-anand/',
      },
      {
        name: 'Arka_Dhar',
        role: 'Sponsorship Member',
        imageUrl:
          '/Team/Arka_Dhar.jpeg',
        instaUrl: 'https://www.instagram.com/__ark_phoenix/?next=%2F',
        linkedinUrl: 'http://www.linkedin.com/in/arka-dhar-4921882a7',
      },
      {
        name: 'Om Karmakar',
        role: 'Sponsorship Member',
        imageUrl:
          '/Team/Om_Karmakar.jpg',
        instaUrl: 'https://www.instagram.com/iamomkarmakar?igsh=MTlzaWZhYXRzbG5ndw==',
        linkedinUrl: 'https://www.linkedin.com/in/om-karmakar-52214b1ba',
      },
      {
        name: 'Aishani Roy ',
        role: 'Sponsorship Member',
        imageUrl:
          '/Team/Aishani_Roy.jpg',
        instaUrl: 'https://www.instagram.com/aishani._?igsh=MTZtMmN3M3VrZ3o1cA==',
        linkedinUrl: 'https://www.linkedin.com/in/aishani-roy-a6804829b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        name: 'Shubham Sarkar',
        role: 'Sponsorship Member',
        imageUrl:
          '/Team/Shubham_Sarkar.jpg',
        instaUrl: 'https://www.instagram.com/_iamshubhamsarkar_?igsh=MTZ2b24xc2pwdmI4dQ==',
        linkedinUrl: 'https://www.linkedin.com/in/shubham-sarkar-57438b27a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        name: 'Bitan Mukherjee',
        role: 'Judges Coordinator',
        imageUrl:
          '/Team/Bitan_Mukherjee.jpg',
        instaUrl: 'https://www.instagram.com/bitanmukherjeeee?igsh=MWV3cmFsZjY0dmdkbw==',
        linkedinUrl: 'https://www.linkedin.com/in/bitan-mukherjee-10b66a1a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        name: 'Arpan Banerjee ',
        role: 'Judges Coordinator',
        imageUrl:
          '/Team/Arpan_Banerjee.jpg',
        instaUrl: 'https://www.instagram.com/arpan_banerjee_ab?igsh=N2J0bDd5OG1sc3Bt',
        linkedinUrl: 'https://www.linkedin.com/in/arpan-banerjee-470ba6297',
      },
      {
        name: 'Ayudh Banerjee',
        role: 'Judges Coordinator',
        imageUrl:
          '/Team/Ayudh_Banerjee.jpeg',
        instaUrl: 'https://www.instagram.com/melody_of_lyf/',
        linkedinUrl: 'https://www.linkedin.com/in/ayudh-banerjee/',
      },
      // Add more finance team members here
    ],
  },
  {
    name: 'Design',
    members: [
      {
        name: 'Anurag Dey',
        role: 'Creative Lead',
        imageUrl:
          '/Team/Anurag_Dey.jpg',
        instaUrl: 'https://www.instagram.com/_theweirdintrovert_/',
        linkedinUrl: 'https://www.linkedin.com/in/iamanurag101/',
      },
      {
        name: 'Anitketan Suin',
        role: 'Video Designer',
        imageUrl:
          '/Team/Anitketan_Suin.jpg',
        instaUrl: 'https://www.instagram.com/_.anit._xd/',
        linkedinUrl: 'https://www.linkedin.com/in/anitketan-suin-07488b289/',
      },
      {
        name: 'Apurba Nandi',
        role: 'Designer',
        imageUrl:
          '/Team/Apurba_Nandi.jpg',
        instaUrl: 'https://www.instagram.com/just.apurba/',
        linkedinUrl: 'https://www.linkedin.com/in/apurbanandi/',
      },
      {
        name: 'Meghna Das',
        role: 'Designer',
        imageUrl:
          '/Team/Meghna_Das.jpg',
        instaUrl: 'https://www.instagram.com/heels_xl?igsh=cXRsdmJpMmdyMzdk',
        linkedinUrl: 'https://www.linkedin.com/in/meghna-das-009628248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        name: 'Prama Ray',
        role: 'OC, Designer',
        imageUrl:
          '/Team/Prama_Ray.jpg',
        instaUrl: 'https://www.instagram.com/thelaughinghooman?igsh=c2Z4MzV0YzBvOHpv',
        linkedinUrl: 'https://www.linkedin.com/in/pramaray?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      
      {
        name: 'Shrinjita Biswas',
        role: 'OC, Video Designer',
        imageUrl:
          '/Team/Shrinjita_Biswas.jpg',
        instaUrl: 'https://www.instagram.com/shrinjita.exe?igsh=ZGMwanRiMDB4cXcw',
        linkedinUrl: 'https://www.linkedin.com/in/shrinjita-biswas-82421921a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        name: 'Chandrima Ghosh',
        role: 'Designer',
        imageUrl:
          '/Team/Chandrima_Ghosh.jpg',
        instaUrl: '#',
        linkedinUrl: 'http://www.linkedin.com/in/chandrima-ghosh-5a15292a7',
      },
      {
        name: 'Saumili Roy',
        role: 'Designer',
        imageUrl:
          '/Team/Saumili_Roy.jpeg',
        instaUrl: 'https://www.instagram.com/saumilir?igsh=MWVzejloNTl4YTJwOQ==',
        linkedinUrl: 'http://linkedin.com/saumili-roy',
      },
      {
        name: 'Sombrata Biswas',
        role: 'Content Designer',
        imageUrl:
          '/Team/Sombrata_Biswas.jpeg',
        instaUrl: 'https://www.instagram.com/some.brat.uh?igsh=ODYzZm40OW8zYWYy',
        linkedinUrl: 'https://www.linkedin.com/in/sombrata-b-099365217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      }
      
      // Add more design team members here
    ],
  },
  {
    name: 'Logistics',
    members: [
      {
        name: 'Sohini Hazra',
        role: 'Logistics Head',
        imageUrl:
          '/Team/Sohini_Hazra.png',
        instaUrl: 'https://www.instagram.com/_._.sohini._._/',
        linkedinUrl: 'https://www.linkedin.com/in/sohini-hazra-a17121254/',
      },
      // Add more finance team members here
    ],
  },
];

//className function with TypeScript types
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
      {/* Team Display */}
      <div className="bg-[#101720]">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl text-[#f77f00] font-extrabold tracking-tight sm:text-4xl">{activeTeam} Team</h2>
              <p className="text-xl text-[#fcbf49]">
                Meet the people behind the scenes who make this event possible
              </p>
            </div>
                  {/* Tabs for Team Selection */}
            <div className="sm:block bg-gray-900">
        <nav className="relative z-0 rounded-lg shadow flex" aria-label="Tabs">
          {teams.map((team, tabIdx) => (
            <button
              key={team.name}
              onClick={() => setActiveTeam(team.name)}
              className={classNames(
                team.name === activeTeam ? 'text-[#eae2b7] hover:text-gray-800' : 'text-gray-100 hover:text-gray-800',
                tabIdx === 0 ? 'rounded-l-full' : '',
                tabIdx === teams.length - 1 ? 'rounded-r-full' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-gray-800 py-4 px-4 text-sm font-medium text-center hover:bg-[#eae2b7] focus:z-10'
              )}
              aria-current={team.name === activeTeam ? 'page' : undefined}
            >
              <span>{team.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  team.name === activeTeam ? 'bg-[#eae2b7]' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </button>
          ))}
        </nav>
        </div>
            <ul
              role="list"
              className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl"
            >
              {activeTeamMembers.map((person) => (
                <li key={person.name}>
                  <div className="space-y-6">
                    <Image className="mx-auto h-40 w-40 rounded-full ring-1 ring-[#fcbf49] xl:w-56 xl:h-56" width={300} height={300} src={person.imageUrl} alt={person.name} />
                    <div className="space-y-2">
                      <div className="text-lg text-[#fcbf49] hover:text-[#f77f00] leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-gray-300">{person.role}</p>
                      </div>
                      <ul role="list" className="flex justify-center space-x-5">
                        <li>
                          <a href={person.instaUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <FaInstagram className='w-5 h-5 text-[#fcbf49] hover:text-[#f77f00] '/>
                          </a>
                        </li>
                        <li>
                          <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            <FaLinkedin className='w-5 h-5 text-[#fcbf49] hover:text-[#f77f00] '/>
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
      <Footer/>
    </div>
  );
}
export default TeamPage