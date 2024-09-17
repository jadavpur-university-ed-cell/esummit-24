"use client";

import React from "react";

const DizmartEvent: React.FC = () => {
  const description = `Ever felt the power of a perfect design? In an instant, a compelling label can drive decisions. At Dizmart, create a standout label that commands attention and sets brands apart. Design with impact. Win with purpose.`;

  const bulletPoints = [
    "Fuse your creativity with your business acumen to reimagine a product label and maximise its market potential.",
    "Dive into the intricacies of graphic design, brand cultivation, marketing, and sales while putting your skills against the best.",
    "Take your masterpiece to the masses in a heart-pounding showdown to be the top performer.",
    "Design is judged by its impact, not just its look. Dizmart provides a platform to merge functionality with visual excellence. Showcase your skill in turning concepts into effective solutions—where true success lies in execution."
  ];

  const bottomText = "Show the world your talent in blending creativity with strategy at Dizmart. Make your design count.";

  return (
    <div className=" bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] text-white">
      <div className="flex justify-center">
        <section className="bg-red-900 w-[66.6666%] h-[35px]"></section>
      </div>

      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <h1 className="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
          Dizmart
        </h1>
      </div>
      <div className="mt-4 w-full h-0.5 bg-white"></div>

      {/* About Section */}
      <div className="flex flex-col justify-center items-center pt-4 pb-0.5">
        <div className="flex flex-col w-[75%] pb-14 ml-5 bg-gradient-to-br from-orange-500 to-red-600 hover:bg-gradient-to-l border border-black border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full">
          <h1 className="text-5xl font-semibold text-white text-right px-10 pt-10">
            About
          </h1>
          {/* Underline for About */}
          <div className="flex shrink-0 self-end mt-5 max-w-full bg-yellow-400 h-[3px] w-[30%] outline-dashed mr-8" />
          {/* Content Box */}
          <div className="flex flex-col justify-center items-center pt-4 pb-0.5 w-[60%] self-end">
            {/* Description */}
            <p className="text-xl text-yellow-200 font-medium px-10 pt-5 ">
              {description}
            </p>
            {/* Bulleted Points */}
            <ul className="list-disc list-inside text-left px-10 pt-5 text-xl text-yellow-100">
              {bulletPoints.map((point, index) => (
                <li key={index} className="pb-2 font-medium text-yellow-50">
                  {point}
                </li>
              ))}
            </ul>
            {/* Bottom Text */}
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-50 px-10 pt-10">
              {bottomText}
            </h1>
          </div>
        </div>
      </div>

      {/* Decorative Sections */}
      <div className="flex flex-col mt-16">
        {/* First Row */}
        <div className="flex justify-between">
          <section className="bg-red-900 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-red-900 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
        </div>

        {/* Second Row */}
        <div className="flex justify-between">
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-orange-500 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-orange-500 w-[25%] h-[35px]"></section>
        </div>
      </div>
    </div>
  );
};

export default DizmartEvent;

