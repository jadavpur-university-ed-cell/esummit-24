"use client";

import { useRouter } from "next/navigation";
import React from "react";
import FAQ from "@/components/Events/FAQS";
import PoCCard from "@/components/Events/PoCCard";
import RoundCards from "@/components/Events/RoundCards";
import { eventProps } from "../eventProps";
import EventsNavbar from "@/components/Events/Navbar";
import Image from "next/image";

const DizmartEvent: React.FC<eventProps> = ({allow}) =>{
  const router = useRouter();
  const description = 'Ever felt the power of a perfect design? In an instant, a compelling label can drive decisions. At Dizmart, create a standout label that commands attention and sets brands apart. Design with impact. Win with purpose.'
  const bulletPoints = [
    "Fuse your creativity with your business acumen to reimagine a product label and maximise its market potential.",
    "Dive into the intricacies of graphic design, brand cultivation, marketing, and sales while putting your skills against the best.",
    "Take your masterpiece to the masses in a heart-pounding showdown to be the top performer.",
    "Design is judged by its impact, not just its look. Dizmart provides a platform to merge functionality with visual excellence. Showcase your skill in turning concepts into effective solutions—where true success lies in execution."
  ];

  const bottomText = "Show the world your talent in blending creativity with strategy at Dizmart. Make your design count.";

  const faqs = [
    { question: "What is Dizmart?", answer: "Dizmart is a design challenge where participants create product labels with maximum market potential." },
    { question: "How can I participate?", answer: "You can participate by registering through the 'Participate' button on this page." },
    { question: "What are the requirements?", answer: "A creative mind and basic understanding of product design are recommended. No prior experience is required." }
  ];

  const pointsOfContact = [
    { name: "Emily Green", phoneNumber: "+1234567890", nameColor: "text-red-500" },
    { name: "Michael Brown", phoneNumber: "+0987654321", nameColor: "text-blue-500" }
  ];

  return (
    <div className="min-h-screen bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] text-white">
      <div className="flex justify-center">
        {/* <section className="bg-gradient-to-r from-red-600 to-orange-600 w-[66.6666%] h-[35px]"></section> */}
        <EventsNavbar />
      </div>

      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <h1 className="text-4xl sm:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-200">
          Dizmart
        </h1>
      </div>
      {/* <div className="mt-4 w-full h-0.5 bg-white"></div> */}

      {/* About Section */}
      <div className="flex flex-col justify-center items-center   pt-2 pb-0.5  ah ">
        <div className="flex flex-col sm:w-[75%] w-[85%] pb-14  bg-gradient-to-br from-red-800 to-orange-600 border hover:bg-gradient-to-tr border-black border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full mx-auto">
          <h1 className="text-3xl sm:text-5xl font-semibold text-white text-center sm:text-right px-10 pt-10">
            About
          </h1>
          {/* Underline for About */}
          <div className="flex  shrink-0 sm:self-end self-center  mt-2 sm:mt-5 mb-3 sm:mb-0 max-w-full bg-zinc-500 h-[3px] w-[40%] sm:w-[30%] outline-dashed sm:mr-8" />
          
          {/* Flex Container for Logo and Text */}
          <div className="flex flex-col md:flex-row w-full sm:px-10 py-0.5 gap-10">
            {/* Corporate Clash Logo */}
            <div className="flex items-center md:w-[40%] w-full justify-center px-8 sm:px-0">
              <Image
                src="/event-logos/Dizmart.png"
                alt="Corporate Clash Logo"
                className="w-full h-auto"
                height={200}
                width={200}
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col md:w-[60%] w-full">
              {/* Description */}
            <p className="sm:text-xl text-md  text-blue-200 font-medium  sm:px-10 pt-5 ">{description}</p>
              {/* Bulleted Points */}
              <ul className="list-disc list-inside text-left sm:text-xl text-md font-medium sm:px-10 pt-5 text-orange-50 mt-8">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="pb-5 sm:pb-2">{point}</li>
                ))}
              </ul>
              {/* Bottom Text */}
              <h1 className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-50 sm:px-10 pt-10">
                {bottomText}
              </h1>

              {/* Register Button */}
              <button className="gap-10 text-xl px-3 w-[76] sm:w-[50%] self-center bg-[#fcbf49]  text-black font-bold border rounded-lg  py-2 mt-8 hover:bg-[#eae2b7] hover:text-[#101720] transition-all duration-300"
              disabled ={!allow}
              onClick={()=>{
                router.push('/eventRegistration/dizmart');
              }}
              >
                 {allow?"Participate":"🔒"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Step Design Section */}
      <div className="flex flex-col">
        {/* First Row */}
        <div className="flex justify-between mt-16">
          <section className="bg-[#f77f00] w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-[#f77f00] w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
        </div>
        
        {/* Second Row */}
        <div className="flex justify-between">
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-red-700 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-red-700 w-[25%] h-[35px]"></section>
        </div>
      </div>

      {/* Rounds Section */}
      <div className="pt-12 ">
        <div className="flex flex-col justify-center items-center pt-8 pb-0.5">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-orange-600 to-red-200">
            Rounds
            <div className="mt-4 w-full h-0.5 bg-white"></div>
          </h1>
        </div>
        <RoundCards
          headingColor="text-yellow-500"
          textColor="text-yellow-50"
          rounds={[
            {
              title: "Preliminary Round",
              date: "Online",
              description: "Submit your product label design concept for review by our panel.",
            },
            {
              title: "Final Round",
              date: "Offline",
              description: "Pitch your design live in front of our judges and audience.",
            }
          ]}
        />
      </div>

      {/* Points of Contact Section */}
      <div className="py-4 px-4 sm:px-6 lg:px-4">
      <div className="flex flex-col justify-center items-center pt-8 pb-0.5">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-orange-600 to-red-200">
            Points of Contact
            <div className="mt-4 w-full h-0.5 bg-white"></div>
          </h1>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 ">
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
          <section className="bg-orange-900 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-orange-800 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-orange-700 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-orange-600 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
        </div>
        
        {/* Second Row */}
        <div className="flex justify-between mt-2">
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-red-700 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-red-600 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-red-500 w-[12.5%] h-[35px]"></section>
          <section className=" w-[12.5%] h-[35px]"></section>
          <section className="bg-red-400 w-[12.5%] h-[35px]"></section>
        </div>
      </div>


      {/* FAQ Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
        {/* FAQ Column */}
        <div className="lg:w-3/5 lg:pr-8">
          <FAQ 
            faqs={faqs} 
            headingColor="text-red-200" // Red heading color
            questionColor="text-red-200" // Lighter red for questions
            answerColor="text-white" // White for answers
            backgroundColor="orange-700"
          />
        </div>

        {/* Sponsors Column */}
        <div className="lg:w-2/5 lg:pl-8 mt-8 lg:mt-0 ah text-center">
          {/* Add your sponsor names or content here */}
          
          <div className="flex flex-col justify-center items-center pt-8 pb-0.5">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-orange-600 to-red-200">
            Sponsors
            <div className="mt-4 w-full h-0.5 bg-white"></div>
          </h2>
        </div>
          <ul className="mt-7 text-white">
            {/* Replace with actual sponsor names */}
            <li>Sponsor 1</li>
            <li>Sponsor 2</li>
            <li>Sponsor 3</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default DizmartEvent;





{/* <img
src="/event-logos/Dizmart.png"
alt="Corporate Clash Logo"
className="w-full h-auto"
/> */}









{/* <div className="pt-12">
        <div className="flex flex-col justify-center items-center pt-8 pb-0.5">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-orange-600 to-red-200">
            Rounds
            <div className="mt-4 w-full h-0.5 bg-white"></div>
          </h1>
        </div>
        <RoundCards
          headingColor="text-yellow-500"
          textColor="text-yellow-50"
          rounds={[
            {
              title: "Preliminary Round",
              date: "Online",
              description: "Submit your product label design concept for review by our panel.",
            },
            {
              title: "Final Round",
              date: "Offline",
              description: "Pitch your design live in front of our judges and audience.",
            }
          ]}
        />
      </div> */}