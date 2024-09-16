"use client";

import React from "react";
import Heading from "@/components/Homepage/Events/Heading";
import AboutSection from "@/components/Homepage/Events/About";

const MockIPLEvent: React.FC = () => {
  const description = `In a dynamic corporate world, adaptability and analytical prowess are vital. If you thrive on dissecting business successes and challenges to craft strategic solutions, the "Analyst" case study challenge awaits you. `;
  const eventNumber = 3;

  return (
    <div className="h-screen bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] text-white">
      <div className="flex justify-center">
        <section className="bg-[#F77F00]  w-[66.6666%] h-[35px]">
        </section>
      </div>
      
      <div className="flex flex-col justify-center items-center pt-16 pb-0.5">
        <Heading name={"Mock IPL Auction"} eventNumber={eventNumber} />
        <div className="mt-4 w-full h-0.5 bg-white"></div>
      </div>
      
      {/* About */}
      <div className="flex flex-col justify-center items-center pt-4 pb-0.5">
       <section className="flex flex-col w-[75%] pb-14 ml-5 bg-[#F77F00] border border-black border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full"></section>
       </div>
      

    </div>

    </div>
  );
};

export default MockIPLEvent;
