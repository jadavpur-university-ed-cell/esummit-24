"use client";

import React from "react";
import SpeakerCard from "@/components/Events/SpeakerCard";

const InspiraTalks: React.FC = () => {
  return (
    <div className=" bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] text-white">
      <div className="flex justify-center">
        <section className="bg-[#f2b2d8] w-[66.6666%] h-[35px]"></section>
      </div>

      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <div className="p-5 text-center">
          <h1 className="text-5xl font-semibold" style={{ color: '#f2b2d8' }}>
            Inspira Talks
          </h1>
        </div>
        {/* Animated white horizontal line */}
        <div className="mt-4 w-full h-0.5 bg-white"></div>

        {/* About Section with Speaker Cards */}
        <section className="flex flex-col max-md:flex-col justify-center w-[75%] pb-14 ml-5 mt-8 pt-4 bg-[#f2b2d8] border border-black border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap justify-between w-full px-10 space-y-6 md:space-y-0 md:space-x-6 max-md:flex-col max-md:items-center">
            <div className="w-[30%] max-md:w-full">
              <SpeakerCard
                name="Lindsay Walton"
                talk="Building the Future of Web"
                synopsis="In this talk, Lindsay will explore cutting-edge web technologies that are reshaping the future of the internet."
                dayTime="Day 1, 10:00 AM"
                mode="Online"
                linkedin="https://linkedin.com/in/lindsaywalton"
              />
            </div>
            <div className="w-[30%] max-md:w-full">
              <SpeakerCard
                name="Alex Johnson"
                talk="AI in Modern Healthcare"
                synopsis="Alex discusses the role of AI in advancing diagnostics, patient care, and healthcare management."
                dayTime="Day 2, 2:00 PM"
                mode="Offline"
                linkedin="https://linkedin.com/in/alexjohnson"
              />
            </div>
            <div className="w-[30%] max-md:w-full">
              <SpeakerCard
                name="Samantha Lee"
                talk="Innovations in Renewable Energy"
                synopsis="Samantha delves into the latest innovations in renewable energy, focusing on sustainability and environmental impact."
                dayTime="Day 3, 11:30 AM"
                mode="Hybrid"
                linkedin="https://linkedin.com/in/samanthalee"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InspiraTalks;
