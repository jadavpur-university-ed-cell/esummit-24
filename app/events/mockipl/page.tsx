"use client";

import React from "react";

const MockIPLEvent: React.FC = () => {
  const description = `Step into the shoes of an IPL team owner and make strategic decisions to build your dream squad. With a roster of over 75 international superstars at your disposal, this is your chance to showcase your cricketing desires and strategic prowess.`;

  const bulletPoints = [
    "Round 1: Data Analysis requires you to analyze player stats and submit a detailed report and Excel sheet, showcasing your strategic acumen.",
    "Round 2: Real-Time Bidding involves a live auction where you’ll assemble your team within a budget, testing your decision-making and budget management skills.",
    "In the Final Decision, judges will evaluate your team's strategic planning and budget use."
  ];

  const bottomText = "If you've ever thought you could outperform the real IPL auctions, now is your chance to prove it. The Mock IPL Auction isn't just a competition; it's a platform to channel your cricketing passion into effective strategies!";

  return (
    <div className="\ bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] text-white">
      <div className="flex justify-center">
        <section className="bg-yellow-900 w-[66.6666%] h-[35px]"></section>
      </div>

      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <h1 className="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-yellow-200">
          Mock IPL Auction
        </h1>
        <div className="mt-4 w-full h-0.5 bg-white"></div>
      </div>

      {/* About Section */}
      <div className="flex flex-col justify-center items-center pt-4 pb-0.5">
        <div className="flex flex-col w-[75%] pb-14 ml-5 bg-gradient-to-br from-yellow-600 to-sky-500 border border-black border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full">
          <h1 className="text-5xl font-semibold text-white text-right px-10 pt-10">
            About
          </h1>
          {/* Underline for About */}
          <div className="flex shrink-0 self-end mt-5 max-w-full bg-sky-400 h-[3px] w-[30%] outline-dashed mr-8" />
          {/* Content Box */}
          <div className="flex flex-col justify-center items-center pt-4 pb-0.5 w-[60%] self-end">
            {/* Description */}
            <p className="text-xl text-sky-200 font-medium px-10 pt-5">
              {description}
            </p>
            {/* Bulleted Points */}
            <ul className="list-disc list-inside text-left px-10 pt-5 text-xl text-sky-100">
              {bulletPoints.map((point, index) => (
                <li key={index} className="pb-2 font-medium text-sky-50">
                  {point}
                </li>
              ))}
            </ul>
            {/* Bottom Text */}
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-50 px-10 pt-10">
              {bottomText}
            </h1>
          </div>
        </div>
      </div>

      {/* Decorative Sections */}
      <div className="flex flex-col mt-16">
        {/* First Row */}
        <div className="flex justify-between">
          <section className="bg-yellow-500 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-yellow-500 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
        </div>

        {/* Second Row */}
        <div className="flex justify-between">
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-sky-400 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-sky-400 w-[25%] h-[35px]"></section>
        </div>
      </div>
    </div>
  );
};

export default MockIPLEvent;
