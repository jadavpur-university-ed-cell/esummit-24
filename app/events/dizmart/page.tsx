"use client";

import React from "react";
import Heading from "@/components/Homepage/Events/Heading";
import AboutSection from "@/components/Homepage/Events/About";

const DizmartEvent: React.FC = () => {
  const description = `In a dynamic corporate world, adaptability and analytical prowess are vital. If you thrive on dissecting business successes and challenges to craft strategic solutions, the "Analyst" case study challenge awaits you. `;
  const eventNumber = 3;

  return (
    <div className="h-screen bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] text-white">
      <div className="flex justify-center">
        <section className="bg-[#F77F00]  w-[66.6666%] h-[35px]">
        </section>
      </div>
      
      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <Heading name={"Dizmart"} eventNumber={eventNumber} />
      </div>
      <div className="mt-4 w-full h-0.5 bg-white"></div>
      

    </div>
  );
};

export default DizmartEvent;
