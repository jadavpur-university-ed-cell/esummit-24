// import React from "react";
// import styles from "./Speakers.module.css";
// import Speaker from "./Speaker";
// import Title from "./Title";

// const Speakers=()=> {
//   const speakersList=[
//     {name:"Speaker 1",designation:"xyz"},
//     {name:"Speaker 2",designation:"xyz"},
//     {name:"Speaker 3",designation:"xyz"},
//     {name:"Speaker 4",designation:"xyz"},
//     {name:"Speaker 5",designation:"xyz"},
//     {name:"Speaker 6",designation:"xyz"},
//     {name:"Speaker 7",designation:"xyz"},
//     {name:"Speaker 8",designation:"xyz"},
//   ];
//   return (
//     <div className={styles.grid}>
//       <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
//       <Speaker speakerName={speakersList[0].name} speakerDesignation={speakersList[0].designation} />
//       <Speaker speakerName={speakersList[1].name} speakerDesignation={speakersList[1].designation} />
//       <Speaker speakerName={speakersList[2].name} speakerDesignation={speakersList[2].designation} />
//       <Speaker speakerName={speakersList[3].name} speakerDesignation={speakersList[3].designation} />
//       <Title />
//       <Speaker speakerName={speakersList[4].name} speakerDesignation={speakersList[4].designation} />
//       <Speaker speakerName={speakersList[5].name} speakerDesignation={speakersList[5].designation} />
//       <Speaker speakerName={speakersList[6].name} speakerDesignation={speakersList[6].designation} />
//       <Speaker speakerName={speakersList[7].name} speakerDesignation={speakersList[7].designation} />
//     </div>
//   );
// };

// export default Speakers;

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface SpeakerDetails {
  image:string;
  name: string;
  designation: string;
  about: string;
  link: string;
}

const speakers: SpeakerDetails[] = [
  {
    image: "/Team/Rahul_Pandey.jpeg",
    name: "Rahul Pandey",
    designation: "Placeholder at Website",
    about: "Quantum physics demonstrates that certain things change state when directly observed. In my case, I change into a moron.",
    link: "https://youtu.be/EE-xtCF3T94?si=Pk0tdOn_WSVOoAXi" 
  },  
  {
    image: "/Team/Rahul_Pandey.jpeg",
    name: "Rahul Pandey",
    designation: "Placeholder at Website",
    about: "Quantum physics demonstrates that certain things change state when directly observed. In my case, I change into a moron.",
    link: "https://youtu.be/EE-xtCF3T94?si=Pk0tdOn_WSVOoAXi" 
  },  
  {
    image: "/Team/Rahul_Pandey.jpeg",
    name: "Rahul Pandey",
    designation: "Placeholder at Website",
    about: "Quantum physics demonstrates that certain things change state when directly observed. In my case, I change into a moron.",
    link: "https://youtu.be/EE-xtCF3T94?si=Pk0tdOn_WSVOoAXi" 
  },  
  {
    image: "/Team/Rahul_Pandey.jpeg",
    name: "Rahul Pandey",
    designation: "Placeholder at Website",
    about: "Quantum physics demonstrates that certain things change state when directly observed. In my case, I change into a moron.",
    link: "https://youtu.be/EE-xtCF3T94?si=Pk0tdOn_WSVOoAXi" 
  }  
];

const SpeakerItems: React.FC<SpeakerDetails> = ({ image, name, designation, about, link }) => (
  <div className="p-4 sm:w-4/5 lg:w-11/12">
    <div className="h-full bg-gray-700 bg-opacity-40 px-8 py-8 rounded-xl overflow-hidden text-center relative transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
      <Image src={image} alt={name} width={300} height={300} className='w-full aspect-square rounded-xl'/>
      <div className='flex items-center justify-between my-4'>
      <h1 className="title-font sm:text-4xl text-2xl font-bold text-gray-100">{name}</h1>
      <h2 className="tracking-widest text-xl title-font font-extralight text-[#f77f00] w-1/3 text-wrap">{designation}</h2>
      </div>
      <p className="mb-3 text-start leading-8">{about}</p>
      <Link href={link} passHref className='text-yellow-400 inline-flex items-center'>
        <h3>View</h3>
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
      </Link>
    </div>
  </div>
);

const Speakers:React.FC = () => { 
  return (
    <>
    <div className="bg-[#101720] flex justify-center p-8 items-center">
    <h1 className="animated-title text-5xl md:text-7xl text-[#fcbf49] font-bold">Speakers</h1>
    </div>
    <section className="text-gray-400 bg-[#101720]">
      <div className="container px-5 py-8 mx-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center w-full xl:w-2/3 lg:gap-16">
          {speakers.map((speaker, index) => (
            <SpeakerItems key={index} {...speaker} />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
export default Speakers;
