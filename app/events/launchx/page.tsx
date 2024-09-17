"use client";

import React from "react";
import Heading from "@/components/Homepage/Events/Heading";

const LaunchXEvent: React.FC = () => {
  const description = `Launch X is the perfect platform for aspiring entrepreneurs to showcase their innovations and gain valuable feedback from industry experts to achieve the next step in their startup journey. With esteemed partners such as NASSCOM, 100X VC, TiE Kolkata, and WeWork Labs from previous editions, our reputation speaks for itself. Begin your journey by showcasing your startup idea, where you’ll fine-tune and launch your venture with guidance from top-tier mentors and support from over 20,000 passionate business aficionados. Navigate through these thrilling rounds:`;

  const bulletPoints = [
    "Round 1: Preliminary Submission – Make an impactful debut by sending a 3-slide PowerPoint presentation on the official website or Unstop, capturing the essence of your innovative idea.",
    "Round 2: Offline Pitching Round – Compete as one of 30 shortlisted teams, delivering a compelling 5-minute pitch followed by a 2-minute rebuttal, putting your presentation skills and idea strength to the ultimate test.",
    "Final Round: In-Person Presentation – If feasible, travel to Kolkata for the final showdown, where you might face an Elevator Pitch session assessed by prestigious VCs."
  ];

  const bottomText = "Gain unparalleled access to top-tier VCs, forge invaluable networks, and vie against 100+ promising ventures from across India for substantial rewards and a place in the spotlight.";

  return (
    <div className="bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] text-white">
      <div className="flex justify-center">
        <section className="bg-[#b7c6cf] w-[66.6666%] h-[35px]"></section>
      </div>
      
      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <h1 className="text-7xl font-semibold text-zinc-200">LaunchX</h1>
      </div>
      <div className="mt-4 w-full h-0.5 bg-white"></div>
      

      {/* About Section */}
      <div className="flex flex-col justify-center items-center pt-4 pb-0.5">
        <div className="flex flex-col w-[75%] pb-14 ml-5 bg-gradient-to-bl from-gray-600 to-zinc-800 hover:bg-gradient-to-l border border-black border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full">
          <h1 className="text-5xl font-semibold text-zinc-50 text-right px-10 pt-10">
            About
          </h1>
          {/* Underline for About */}
          <div className="flex shrink-0 self-end mt-5 max-w-full bg-zinc-500 h-[3px] w-[30%] outline-dashed mr-8" />
          {/* Content Box */}
          <div className="flex flex-col justify-center items-center pt-4 pb-0.5 w-[60%] self-end">
            {/* Description */}
            <p className="text-lg text-zinc-300 font-medium px-10 pt-5">{description}</p>
            {/* Bulleted Points */}
            <ul className="list-disc list-inside text-left px-10 pt-5 text-xl text-zinc-600">
              {bulletPoints.map((point, index) => (
                <li key={index} className="pb-2 font-medium text-white">{point}</li>
              ))}
            </ul>
            {/* Bottom Text */}
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-zinc-200 px-10 pt-10">
              {bottomText}
            </h1>
          </div>
        </div>
      </div>

      {/* Bull and Bear Phases */}
      <div className="flex flex-col">
        {/* First Row - Bull Phase */}
        <div className="flex justify-between mt-16">
          <section className="bg-zinc-300 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-zinc-300 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
        </div>
        
        {/* Second Row - Bear Phase */}
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
