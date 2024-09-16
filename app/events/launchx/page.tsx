"use client";

import React from "react";
import Heading from "@/components/Homepage/Events/Heading";
import AboutSection from "@/components/Homepage/Events/About";

const LaunchXEvent: React.FC = () => {
  const description = `HackNPitch is an Overnight Hackathon event. Relish the coding culture at JU and compete against the best to craft the app that will outshine all others. Hack-n-Pitch is your chance to shine, whether you're a developer, designer, or entrepreneur. Join us for this exciting challenge, where innovation meets competition, and the best ideas come to life! The wheel, humanity's pioneering invention, succeeded by electricity, the invention that reshaped the world.`;
  const eventNumber = 2;

  return (
    <div className="h-screen bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] text-white">
      <div className="flex justify-center">
        <section className="bg-[#d62828]  w-[66.6666%] h-[35px]">
        </section>
      </div>
      
      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <Heading name={"LaunchX"} eventNumber={eventNumber} />
      </div>
      <div className="mt-4 w-full h-0.5 bg-white"></div>

      {/* About */}
      <div className="flex flex-col justify-center items-center pt-4 pb-0.5">
       <section className="flex flex-col w-[75%] pb-14 ml-5 bg-[#d62828] border border-black border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full"></section>
       </div>

    </div>
  );
};

export default LaunchXEvent;
