"use client";
import React from "react";
import FAQ from "@/components/Events/FAQS";
import PoCCard from "@/components/Events/PoCCard";
import RoundCards from "@/components/Events/RoundCards";
import { eventProps } from "../eventProps";
import { useRouter } from "next/navigation";
import EventsNavbar from "@/components/Events/Navbar";

const LaunchXEvent: React.FC<eventProps> = ({allow})=> {
  const router = useRouter();
  const description = `Launch X is the perfect platform for aspiring entrepreneurs to showcase their innovations and gain valuable feedback from industry experts to achieve the next step in their startup journey. With esteemed partners such as NASSCOM, 100X VC, TiE Kolkata, and WeWork Labs from previous editions, our reputation speaks for itself. Begin your journey by showcasing your startup idea, where you’ll fine-tune and launch your venture with guidance from top-tier mentors and support from over 20,000 passionate business aficionados. Navigate through these thrilling rounds:`;

  const bulletPoints = [
    "Round 1: Preliminary Submission – Make an impactful debut by sending a 3-slide PowerPoint presentation on the official website or Unstop, capturing the essence of your innovative idea.",
    "Round 2: Offline Pitching Round – Compete as one of 30 shortlisted teams, delivering a compelling 5-minute pitch followed by a 2-minute rebuttal, putting your presentation skills and idea strength to the ultimate test.",
    "Final Round: In-Person Presentation – If feasible, travel to Kolkata for the final showdown, where you might face an Elevator Pitch session assessed by prestigious VCs."
  ];

  const bottomText = "Gain unparalleled access to top-tier VCs, forge invaluable networks, and vie against 100+ promising ventures from across India for substantial rewards and a place in the spotlight.";

  const faqs = [
    { question: "What is LaunchX?", answer: "Launch X is a platform for entrepreneurs to showcase their startups and receive feedback from industry experts." },
    { question: "How can I participate?", answer: "Register through the 'Participate' button on this page." },
    { question: "What are the requirements?", answer: "You should have a startup idea and be prepared to pitch it in the rounds." }
  ];

  // Points of Contact Data
  const pointsOfContact = [
    { name: "John Doe", phoneNumber: "+1234567890", nameColor: "text-red-500" },
    { name: "Jane Smith", phoneNumber: "+0987654321", nameColor: "text-blue-500" },
    { name: "Alice Johnson", phoneNumber: "+1122334455", nameColor: "text-green-500" }
  ];

  return (
    <div className="min-h-screen bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] text-white">

      <div className="flex justify-center">
        {/* <section className="bg-gradient-to-r from-zinc-600 to-zinc-700 w-[66.6666%] h-[35px]"></section> */}
        <EventsNavbar />
      </div>

      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <h1 className="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-gray-200">
          LaunchX
        </h1>
      </div>
      
      {/* <div className="mt-4 w-full h-0.5 bg-white"></div> */}
      {/* About Section */}
      <div className="flex flex-col justify-center items-center pt-2 pb-0.5">
        <div className="flex flex-col w-[75%] pb-14 ml-5 bg-gradient-to-br from-gray-600 to-zinc-800 hover:bg-gradient-to-tr border border-black border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full">
          <h1 className="text-5xl font-semibold text-white text-right px-10 pt-10 order-1">
            About
          </h1>
          <div className="flex shrink-0 self-end mt-5 max-w-full bg-zinc-500 h-[3px] w-[30%] outline-dashed mr-8 order-2" /> 
          <div className="flex flex-col md:flex-row w-full px-10 py-0.5 gap-10 order-3">
            <div className="flex items-center md:w-[40%] w-full justify-center">
              <img
                src="/event-logos/LaunchX.png"
                alt="LaunchX Logo"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col md:w-[60%] w-full">
              <p className="text-xl text-zinc-300 font-medium px-10 pt-5">{description}</p>
              <ul className="list-disc list-inside text-left text-xl font-medium px-10 pt-5 text-white mt-8">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="pb-2">{point}</li>
                ))}
              </ul>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-zinc-200 px-10 pt-10">
                {bottomText}
              </h1>

              {/* Register Button */}
              <button className="gap-10 text-xl px-3 w-[76] sm:w-[50%] self-center bg-red-200  text-black font-bold border border-black rounded-lg  py-2 mt-8 hover:bg-red-800 hover:text-white transition-all duration-300"
              disabled ={!allow}
              onClick={()=>{
                router.push('/eventRegistration/launchx');
              }}
              >
                Participate {allow?"":"🔒"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col mt-16">
        <div className="flex justify-between">
          <section className="bg-zinc-400 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-zinc-400 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
        </div>
        <div className="flex justify-between mt-2">
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-zinc-600 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-zinc-600 w-[25%] h-[35px]"></section>
        </div>
      </div>

      {/* Rounds Section */}
      <div className="pt-12">
        <div className="flex flex-col justify-center items-center pt-8 pb-0.5">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-gray-600 to-zinc-200">
            Rounds
            <div className="mt-4 w-full h-0.5 bg-white"></div>
          </h1>
        </div>
        <RoundCards
          headingColor="text-gray-500"
          textColor="text-gray-50"
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
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-gray-600 to-zinc-200">
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
          <section className="bg-gray-700 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-gray-600 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-gray-500 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-gray-400 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
        </div>
        
        {/* Second Row */}
        <div className="flex justify-between mt-2">
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-cyan-700 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-cyan-600 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-cyan-500 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-cyan-400 w-[12.5%] h-[35px]"></section>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
        <div className="lg:w-3/5 lg:pr-8">
          <FAQ 
            faqs={faqs} 
            headingColor="text-cyan-400" 
            questionColor="text-cyan-200" 
            answerColor="text-white"
            backgroundColor="zinc-600"
          />
        </div>
        <div className="lg:w-2/5 lg:pl-8 mt-8 lg:mt-0">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-gray-600 to-zinc-200">Sponsors</h2>
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

export default LaunchXEvent;