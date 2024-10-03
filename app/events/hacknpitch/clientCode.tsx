"use client";


import { useRouter } from "next/navigation";
import React from "react";
import FAQ from "@/components/Events/FAQS";
import PoCCard from "@/components/Events/PoCCard";
import RoundCards from "@/components/Events/RoundCards";
import { eventProps } from "../eventProps";
import EventsNavbar from "@/components/Events/Navbar";
import Image from "next/image";


const HacknPitchEvent: React.FC<eventProps> = ({allow}) => {
  const router = useRouter();
  const description = `HackNPitch is an Overnight Hackathon event. Relish the coding culture at JU and compete against the best to craft the app that will outshine all others. Hack&minus;n&minus;Pitch is your chance to shine, whether you&apos;re a developer, designer, or entrepreneur. Join us for this exciting challenge, where innovation meets competition, and the best ideas come to life! The wheel, humanity&apos;s pioneering invention, succeeded by electricity, the invention that reshaped the world.`;


  const bulletPoints = [
    "Round 01: Idea Submission &minus; Submit a 5-slide presentation based on the provided topics. Up to 15 teams (60 participants) will be shortlisted for the next round.",
    "Round 02: Let's Hack and Pitch",
    "Day 1: Participate in a 12&minus;hour hackathon to bring your ideas to life.",
    "Day 2: Pitch your creation to a panel of judges. Details on the pitch format and requirements will be shared with shortlisted teams."
  ];


  const bottomText = "Join us for an exciting challenge where innovation meets competition and ideas come to life.";


  // FAQs data
  const faqs = [
    { question: "What is HacknPitch?", answer: "HacknPitch is an overnight hackathon where participants can showcase their coding and pitching skills." },
    { question: "How do I register?", answer: "Click the 'Participate' button on this page to register." },
    { question: "Is there a registration fee?", answer: "Yes, Rs.100 per person." }
  ];


  // Points of Contact data
  const pointsOfContact = [
    { name: "Shivam Mundra", phoneNumber: "+918336940307", nameColor: "text-yellow-400" },
    { name: "Aditya Anand", phoneNumber: "+918961313886", nameColor: "text-red-400" },
    { name: "Arka Dhar", phoneNumber: "+917872980084", nameColor: "text-green-400" }
  ];
  return (
    <div className="min-h-screen bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] text-white">
      {/* Header Section */}
      <div className="flex justify-center">
        {/* <section className="bg-sky-700 w-[66.6666%] h-[35px]"></section> */}
        <EventsNavbar />
      </div>
     
      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <h1 className="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-100">
          Hack n Pitch
        </h1>
      </div>
      {/* <div className="mt-4 w-full h-0.5 bg-white"></div> */}


      {/* About Section */}
      <div className="flex flex-col justify-center items-center pt-4 pb-0.5">
        <div className="flex flex-col w-[75%] pb-14 ml-5 bg-gradient-to-br from-blue-950 to-cyan-800 hover:bg-gradient-to-l border border-black border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full">
          <h1 className="text-5xl font-semibold text-white text-right px-10 pt-10">
            About
          </h1>
          <div className="flex shrink-0 self-end mt-5 max-w-full bg-gray-200 h-[3px] w-[30%] mr-8" />
         
          {/* Flex Container for Logo and Text */}
          <div className="flex flex-col md:flex-row w-full px-8 py-0.5 gap-10">
            {/* Logo */}
            <div className="flex items-center w-full sm:w-full md:w-[40%] justify-center">
              <Image
                src="/event-logos/HackNPitch.png"
                alt="HacknPitch Logo"
                className="w-full h-auto"
                height={200}
                width={200}
              />
            </div>
           
            {/* Text Content */}
            <div className="flex flex-col md:w-[60%] w-full">
              {/* Description */}
              <p className="text-xl text-blue-200 font-medium px-10 pt-5">{description}</p>
             
              {/* Bulleted Points */}
              <ul className="list-disc list-inside text-left text-xl font-medium px-10 pt-5 text-blue-100">
                {bulletPoints.map((point, index) => (
                  <li key={index} className={`pb-2 font-medium text-blue-50 ${index > 1 ? "pl-6 font-light text-white" : ""}`}>
                    {point}
                  </li>
                ))}
              </ul>
             
              {/* Bottom Text */}
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-50 px-10 pt-10">
                {bottomText}
              </h1>

              {/* Register Button */}
              <button className="gap-10 text-xl px-3 w-[76] sm:w-[50%] self-center bg-[#fcbf49]  text-black font-bold border rounded-xl  py-2 mt-8 hover:bg-[#eae2b7] hover:text-[#101720] transition-all duration-300"
              disabled ={!allow}
              onClick={()=>{
                router.push('/eventRegistration/hacknpitch');
              }}
              >
                {allow?"Participate":"🔒"}
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Steps Section */}
      <div className="flex flex-col mt-16">
        {/* First Row */}
        <div className="flex justify-between">
          <section className="bg-blue-500 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-blue-500 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
        </div>
       
        {/* Second Row */}
        <div className="flex justify-between">
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-blue-700 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-blue-700 w-[25%] h-[35px]"></section>
        </div>
      </div>
       {/* Rounds Section */}
       <div className="pt-12">
        <div className="flex flex-col justify-center items-center pt-8 pb-0.5">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-blue-600 to-blue-200">
            Rounds
            <div className="mt-4 w-full h-0.5 bg-white"></div>
          </h1>
        </div>
        <RoundCards
          headingColor="text-blue-500"
          textColor="text-sky-50"
          rounds={[
            {
              title: 'Screening Round',
              date: 'Preliminary Submission',
              description: 'Participants are required to submit a 3-slide PowerPoint presentation via the official website or Unstop. The submission should focus on the core aspects of the proposed innovation, excluding introductory and thank-you slides.',
            },
            {
              title: 'Pitching Round',
              date: 'Offline',
              description: 'Thirty teams will be shortlisted to participate in an offline pitching session. Each team will deliver a 5-minute pitch followed by a 2-minute rebuttal, where they will have the opportunity to defend and elaborate on their presentation.',
            },
            {
              title: 'Final Offline Round',
              date: 'Offline',
              description: 'Selected teams will be invited to Kolkata for the final offline round. Attendance will be subject to the feasibility and availability of the team.',
            },
            {
              title: 'Elevator Pitch (Conditional)',
              date: 'Offline',
              description: 'An elevator pitch session may be conducted at the discretion of the VCs. Details and confirmation of this round will be provided at a later stage.',
            },
          ]}
        />
      </div>


      {/* Points of Contact Section */}
      <div className="py-4 px-4 sm:px-6 lg:px-4">
        <div className="flex flex-col justify-center items-center pt-8 pb-0.5">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-blue-600 to-blue-200">
            Points of Contact
            <div className="mt-4 w-full h-0.5 bg-white"></div>
          </h1>
        </div>
       
        <div className="flex flex-wrap justify-center gap-3">
          {pointsOfContact.map((contact, index) => (
            <PoCCard
              key={index}
              name={contact.name}
              phoneNumber={contact.phoneNumber}
              nameColor={contact.nameColor}
            />
          ))}
        </div>
      </div>
      {/* Step Design Section */}
      <div className="flex flex-col">
        {/* First Row */}
        <div className="flex justify-between mt-16">
          <section className="bg-blue-700 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-blue-600 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-blue-500 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-blue-400 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
        </div>
       
        {/* Second Row */}
        <div className="flex justify-between mt-2">
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-sky-500 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-sky-400 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-sky-300 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-sky-200 w-[12.5%] h-[35px]"></section>
        </div>
      </div>


      {/* FAQ Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
        {/* FAQ Column */}
        <div className="lg:w-3/5 lg:pr-8">
          <FAQ
            faqs={faqs}
            headingColor="text-blue-200" // Blue heading color
            questionColor="text-blue-200" // Lighter blue for questions
            answerColor="text-white" // White for answers
            backgroundColor="cyan-700"
          />
        </div>


        {/* Sponsors Column */}
        <div className="lg:w-2/5 lg:pl-8 mt-8 lg:mt-0">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-blue-600 to-blue-200">Sponsors</h2>
          <ul className="mt-4 text-white">
            <li>Sponsor 1</li>
            <li>Sponsor 2</li>
            <li>Sponsor 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default HacknPitchEvent;