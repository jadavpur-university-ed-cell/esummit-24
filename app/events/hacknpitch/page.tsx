// app/events/hacknpitch/page.tsx
"use client";

import React from "react";

const HacknPitchEvent: React.FC = () => {
  const description = `HackNPitch is an Overnight Hackathon event. Relish the coding culture at JU and compete against the best to craft the app that will outshine all others. Hack-n-Pitch is your chance to shine, whether you're a developer, designer, or entrepreneur. Join us for this exciting challenge, where innovation meets competition, and the best ideas come to life! The wheel, humanity's pioneering invention, succeeded by electricity, the invention that reshaped the world.`;

  const bulletPoints = [
    "Round 01: Idea Submission – Submit a 5-slide presentation based on the provided topics. Up to 15 teams (60 participants) will be shortlisted for the next round.",
    "Round 02: Let’s Hack and Pitch",
    "Day 1: Participate in a 12-hour hackathon to bring your ideas to life.",
    "Day 2: Pitch your creation to a panel of judges. Details on the pitch format and requirements will be shared with shortlisted teams."
  ];

  const bottomText = " Join us for an exciting challenge where innovation meets competition and ideas come to life.";

  return (
    <div className="bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] text-white">
      <div className="flex justify-center">
        <section className="bg-blue-700 w-[66.6666%] h-[35px]"></section>
      </div>
      
      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <h1 className="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-100">
          Hack n Pitch
        </h1>
      </div>
      <div className="mt-4 w-full h-0.5 bg-white"></div>

      {/* About Section */}
      <div className="flex flex-col justify-center items-center pt-4 pb-0.5">
        <div className="flex flex-col w-[75%] pb-14 ml-5 bg-gradient-to-br from-blue-950 to-cyan-800 hover:bg-gradient-to-l border border-black border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full">
          <h1 className="text-5xl font-semibold text-white text-right px-10 pt-10">
            About
          </h1>
          {/* Underline for About */}
          <div className="flex shrink-0 self-end mt-5 max-w-full bg-sky-600 h-[3px] w-[30%] outline-dashed mr-8" />
          {/* Content Box */}
          <div className="flex flex-col justify-center items-center pt-4 pb-0.5 w-[60%] self-end">
            {/* Description */}
            <p className="text-xl  text-blue-200 font-medium px-10 pt-5 ">{description}</p>
            {/* Bulleted Points */}
            <ul className="list-disc list-inside text-left px-10 pt-5 text-xl text-blue-100">
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
          </div>
        </div>
      </div>

      {/* Phases */}
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
    </div>
  );
};

export default HacknPitchEvent;

