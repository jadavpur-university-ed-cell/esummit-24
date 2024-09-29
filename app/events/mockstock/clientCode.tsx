"use client";

import { useRouter } from "next/navigation";
import React from "react";
import FAQ from "@/components/Events/FAQS";
import PoCCard from "@/components/Events/PoCCard";
import RoundCards from "@/components/Events/RoundCards";
import { eventProps } from "../eventProps";
import EventsNavbar from "@/components/Events/Navbar";
import Image from "next/image";


const MockStockEvent: React.FC<eventProps> = ({allow}) => {
  const router = useRouter();
  const description = `The stock market thrives on chaos, but true traders find their edge amidst the madness. Do you have the insight, skill, and nerve to turn unpredictability into profit? Enter Mock Stock—a thrilling simulation that pits you against the market’s wild swings without the real-world risks. Test your strategies, sharpen your instincts, and experience the adrenaline rush of trading in a competitive, risk-free environment. From rookie traders to seasoned strategists, Mock Stock is your chance to learn, adapt, and beat the market madness. Are you ready to take control and conquer the chaos?`;

  const bulletPoints = [
    "Compete on a national scale with the very best in your quest for success.",
    "Learn about the fundamentals of stock trading from seasoned professionals in the industry.",
    "There’s more—Mock Stock represents a unique chance to delve into the intricacies of stock trading."
  ];

  const bottomText = "So; APPLY NOW to test your mettle to become the Wolf of Dalal Street !!";
  const faqs = [
    { question: "What is Mock Stock?", answer: "Mock Stock is a thrilling simulation which dives into the intricacies of the stock market." },
    { question: "How can I participate?", answer: "You can participate by registering through the 'Participate' button on this page." },
    { question: "What are the requirements?", answer: "Enthusiasm and basic understanding of the stock market are recommended. No prior experience is required." }
  ];

  const pointsOfContact = [
    { name: "Emily Green", phoneNumber: "+1234567890", nameColor: "text-red-500" },
    { name: "Michael Brown", phoneNumber: "+0987654321", nameColor: "text-blue-500" }
  ];

  return (
    <div className="bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] text-white">
      <div className="flex justify-center">
        {/* <section className="bg-red-500 w-[66.6666%] h-[35px]"></section> */}
        <EventsNavbar />
      </div>
      
      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <h1 className="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-cyan-500 to-cyan-400">Mock Stock</h1>
      </div>
      {/* <div className="mt-4 w-full h-0.5 bg-white"></div> */}
      
      {/* About Section */}
      <div className="flex flex-col justify-center items-center pt-4 pb-0.5">
        <div className="flex flex-col w-[75%] pb-14 ml-5 bg-gradient-to-br from-sky-700 to-red-600 hover:bg-gradient-to-l border border-black border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full">
          <h1 className="text-5xl font-semibold text-white text-right px-10 pt-10">
            About
          </h1>
          <div className="flex shrink-0 self-end mt-5 max-w-full bg-blue-200 h-[3px] w-[30%] mr-8" />
         
          {/* Flex Container for Logo and Text */}
          <div className="flex flex-col md:flex-row w-full px-8 py-0.5 gap-10">
            {/* Logo */}
            <div className="flex items-center w-full sm:w-full md:w-[40%] justify-center">
              <Image
                src="/event-logos/MockStock.png" //logo to be added
                alt="MockIPL Logo"
                className="w-full h-auto"
                height={200}
                width={200}
              />
            </div>
           
            {/* Text Content */}
            <div className="flex flex-col md:w-[60%] w-full">
              {/* Description */}
              <p className="text-xl text-purple-100 font-medium px-10 pt-5">{description}</p>
             
              {/* Bulleted Points */}
              <ul className="list-disc list-inside text-left text-xl font-medium px-10 pt-5 text-orange-100">
              {bulletPoints.map((point, index) => (
                  <li key={index} className="pb-2 text-cyan-200">{point}</li>
                ))}
              </ul>
             
              {/* Bottom Text */}
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-300 px-10 pt-10">
                {bottomText}
              </h1>
             
              {/* Register Button */}
              <button className="gap-10 text-xl px-3 w-[76] sm:w-[50%] self-center bg-red-200  text-black font-bold border border-black rounded-lg  py-2 mt-8 hover:bg-red-800 hover:text-white transition-all duration-300"
              disabled ={!allow}
              onClick={()=>{
                router.push('/eventRegistration/mockstock');
              }}
              >
                Participate {allow?"":"🔒"}
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Bull and Bear Phases */}
      <div className="flex flex-col">
        {/* First Row - Bull Phase */}
        <div className="flex justify-between mt-16">
          <section className="bg-sky-400 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-sky-400 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
        </div>
        
        {/* Second Row - Bear Phase */}
        <div className="flex justify-between">
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-red-400 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-red-400 w-[25%] h-[35px]"></section>
        </div>
      </div>
    {/* Rounds Section */}
    <div className="pt-12">
        <div className="flex flex-col justify-center items-center pt-8 pb-0.5">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-cyan-500 to-red-400">
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
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-cyan-500 to-red-400">
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
          <section className="bg-blue-600 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-blue-500 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-blue-400 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-blue-300 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
        </div>
       
        {/* Second Row */}
        <div className="flex justify-between mt-2">
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-red-500 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-red-400 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-red-300 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-red-200 w-[12.5%] h-[35px]"></section>
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
            backgroundColor="red-600"
          />
        </div>


        {/* Sponsors Column */}
        <div className="lg:w-2/5 lg:pl-8 mt-8 lg:mt-0">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-cyan-500 to-red-400">Sponsors</h2>
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

export default MockStockEvent;