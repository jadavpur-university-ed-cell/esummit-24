"use client";

import React from "react";
import FAQ from "@/components/Events/FAQS";
import PoCCard from "@/components/Events/PoCCard";

const CorporateClashEvent: React.FC = () => {
  const bulletPoints = [
    "The challenge is designed to test your problem solving and problem statement understanding abilities.",
    "Sharpen your critical analysis skills to dissect complex challenges.",
    "The Analyst challenge transcends personal growth, offering an intellectually stimulating experience within a high-stakes corporate environment."
  ];

  const bottomText = "Don't miss this chance to step up, solve, and succeed in the world of business analysis!";

  const faqs = [
    { question: "What is Corporate Clash?", answer: "Corporate Clash is a high-stakes problem-solving challenge designed to test your analytical and critical thinking skills in a corporate environment." },
    { question: "How can I participate?", answer: "You can participate by registering through the 'Participate' button on this page." },
    { question: "What are the requirements?", answer: "You need to have a keen interest in business analysis and problem-solving skills. No prior experience is required." }
  ];

  // Points of Contact Data
  const pointsOfContact = [
    { name: "John Doe", phoneNumber: "+1234567890", nameColor: "text-red" },
    { name: "Jane Smith", phoneNumber: "+0987654321", nameColor: "text-blue" },
    { name: "Alice Johnson", phoneNumber: "+1122334455", nameColor: "text-green" }
  ];

  return (
    <div className="min-h-screen bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] text-white">
      <div className="flex justify-center">
        <section className="bg-orange-600 w-[66.6666%] h-[35px]"></section>
      </div>

      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <h1 className="text-7xl font-semibold text-orange-300">
          Corporate Clash
        </h1>
      </div>
      <div className="mt-4 w-full h-0.5 bg-white"></div>

      {/* About Section */}
      <div className="flex flex-col justify-center items-center pt-4 pb-0.5">
        <div className="flex flex-col w-[75%] pb-14 ml-5 bg-gradient-to-bl from-orange-500 to-[#c8102e] border border-black border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full">
          <h1 className="text-4xl font-semibold text-white text-right px-10 pt-10">
            About
          </h1>
          {/* Underline for About */}
          <div className="flex shrink-0 self-end mt-5 max-w-full bg-zinc-500 h-[3px] w-[30%] outline-dashed mr-8" />
          {/* Content Box */}
          <div className="flex flex-col justify-center items-center pt-4 pb-0.5 w-[60%] self-end">
            {/* Bulleted Points */}
            <ul className="list-disc list-inside text-left px-10 pt-5 text-xl text-white">
              {bulletPoints.map((point, index) => (
                <li key={index} className="pb-2">{point}</li>
              ))}
            </ul>
            {/* Bottom Text */}
            <h1 className="text-3xl font-semibold text-white px-10 pt-10">
              {bottomText}
            </h1>
            {/* Register Button */}
            <button className="bg-red-200 text-black font-bold border border-black rounded-lg px-8 py-2 mt-8 hover:bg-red-800 hover:text-white transition-all duration-300">
              Participate
            </button>
          </div>
        </div>
      </div>
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

      {/* Points of Contact Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-red-600 text-center mb-8">Points of Contact</h2>
        <div className="flex flex-wrap justify-center gap-4 ">
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

      {/* FAQ Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <FAQ 
          faqs={faqs} 
          headingColor="text-red-600" // Red heading color
          questionColor="text-red-400" // Lighter red for questions
          answerColor="text-white" // White for answers
        />
      </div>
    </div>
  );
};

export default CorporateClashEvent;
