"use client";

import React from "react";

const LaunchXEvent: React.FC = () => {
  const description = `Launch X is the perfect platform for aspiring entrepreneurs to showcase their innovations and gain valuable feedback from industry experts to achieve the next step in their startup journey. With esteemed partners such as NASSCOM, 100X VC, TiE Kolkata, and WeWork Labs from previous editions, our reputation speaks for itself. Begin your journey by showcasing your startup idea, where you’ll fine-tune and launch your venture with guidance from top-tier mentors and support from over 20,000 passionate business aficionados. Navigate through these thrilling rounds:`;

  const bulletPoints = [
    "Round 1: Preliminary Submission – Make an impactful debut by sending a 3-slide PowerPoint presentation on the official website or Unstop, capturing the essence of your innovative idea.",
    "Round 2: Offline Pitching Round – Compete as one of 30 shortlisted teams, delivering a compelling 5-minute pitch followed by a 2-minute rebuttal, putting your presentation skills and idea strength to the ultimate test.",
    "Final Round: In-Person Presentation – If feasible, travel to Kolkata for the final showdown, where you might face an Elevator Pitch session assessed by prestigious VCs."
  ];

  const bottomText = "Gain unparalleled access to top-tier VCs, forge invaluable networks, and vie against 100+ promising ventures from across India for substantial rewards and a place in the spotlight.";
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
        <section className="bg-[#b7c6cf] w-[66.6666%] h-[35px]"></section>
      </div>

      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <h1 className="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-zinc-500">LaunchX</h1>
      </div>
      <div className="mt-4 w-full h-0.5 bg-white"></div>

      {/* About Section */}
      <div className="flex flex-col justify-center items-center pt-2 pb-0.5">
        <div className="flex flex-col w-[75%] pb-14 ml-5 bg-gradient-to-br from-gray-600 to-zinc-800 hover:bg-gradient-to-tr border border-black border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full">
          {/* Ensure the heading appears first */}
          <h1 className="text-4xl font-semibold text-white text-right px-10 pt-10 order-1">
            About
          </h1>
          {/* Underline for About */}
          <div className="flex shrink-0 self-end mt-5 max-w-full bg-zinc-500 h-[3px] w-[30%] outline-dashed mr-8 order-2" />
          
          {/* Flex Container for Logo and Text */}
          <div className="flex flex-col md:flex-row w-full px-10 py-0.5 gap-10 order-3">
            {/* LaunchX Logo */}
            <div className="flex items-center md:w-[40%] w-full justify-center">
              <img
                src="/event-logos/LaunchX.png"
                alt="LaunchX Logo"
                className="w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col md:w-[60%] w-full">
              {/* Description */}
              <p className="text-xl text-zinc-300 font-medium px-10 pt-5">{description}</p>
              {/* Bulleted Points */}
              <ul className="list-disc list-inside text-left text-xl font-medium px-10 pt-5 text-white mt-8">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="pb-2">{point}</li>
                ))}
              </ul>
              {/* Bottom Text */}
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-zinc-200 px-10 pt-10">
                {bottomText}
              </h1>
              {/* Register Button */}
              <button className="gap-10 text-xl px-3 w-[76] sm:w-[50%] self-center bg-zinc-200 text-black font-bold border border-black rounded-lg py-2 mt-8 hover:bg-cyan-200 hover:text-zinc-800 transition-all duration-300">
                Participate
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Step Design */}
      <div className="flex flex-col">
        {/* First Row */}
        <div className="flex justify-between mt-16">
          <section className="bg-zinc-300 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-zinc-300 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
        </div>

        {/* Second Row  */}
        <div className="flex justify-between">
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-gray-600 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-gray-600 w-[25%] h-[35px]"></section>
        </div>
      </div>
    </div>
  );
};

export default LaunchXEvent;
