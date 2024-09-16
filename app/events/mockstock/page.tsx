"use client";

import React from "react";
import Heading from "@/components/Homepage/Events/Heading";

const MockStockEvent: React.FC = () => {
  const description = `The stock market thrives on chaos, but true traders find their edge amidst the madness. Do you have the insight, skill, and nerve to turn unpredictability into profit? Enter Mock Stock—a thrilling simulation that pits you against the market’s wild swings without the real-world risks. Test your strategies, sharpen your instincts, and experience the adrenaline rush of trading in a competitive, risk-free environment. From rookie traders to seasoned strategists, Mock Stock is your chance to learn, adapt, and beat the market madness. Are you ready to take control and conquer the chaos?`;

  const bulletPoints = [
    "Compete on a national scale with the very best in your quest for success.",
    "Learn about the fundamentals of stock trading from seasoned professionals in the industry.",
    "There’s more—Mock Stock represents a unique chance to delve into the intricacies of stock trading."
  ];

  const bottomText = "So; APPLY NOW to test your mettle to become the Wolf of Dalal Street !!";

  const eventNumber = 3;

  return (
    <div className="bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] text-white">
      <div className="flex justify-center">
        <section className="bg-[#fcbf49] w-[66.6666%] h-[35px]"></section>
      </div>
      
      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <Heading name={"Mock Stock Exchange"} eventNumber={eventNumber} />
      </div>
      <div className="mt-4 w-full h-0.5 bg-white"></div>
      
      {/* About Section */}
      <div className="flex flex-col justify-center items-center pt-4 pb-0.5">
        <div className="flex flex-col w-[75%] pb-14 ml-5 bg-[#fcbf49] border border-black border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full">
          <h1 className="text-3xl font-semibold text-black text-right px-10 pt-10">
            About
          </h1>
          {/* Underline for About */}
          <div className="flex shrink-0 self-end mt-5 max-w-full bg-black h-[3px] w-[276px]" />
          <div className="flex flex-col justify-center items-center pt-4 pb-0.5 w-[60%] self-end">
            {/* Description */}
            <p className="text-lg text-zinc-700 px-10 pt-5">{description}</p>
            {/* Bulleted Points */}
            <ul className="list-disc list-inside text-left px-10 pt-5 text-xl text-zinc-800">
              {bulletPoints.map((point, index) => (
                <li key={index} className="pb-2">{point}</li>
              ))}
            </ul>
            {/* Bottom Text */}
            <h1 className="text-3xl font-bold text-red-900 px-10 pt-10">
              {bottomText}
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="flex flex-col">
        {/* First Row */}
        <div className="flex justify-between mt-8">
          <section className="bg-[#fcbf49] w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-[#fcbf49] w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
        </div>
        
        {/* Second Row */}
        <div className="flex justify-between mt-8">
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-[#fcbf49] w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-[#fcbf49] w-[25%] h-[35px]"></section>
        </div>
      </div>
    </div>
  );
};

export default MockStockEvent;
