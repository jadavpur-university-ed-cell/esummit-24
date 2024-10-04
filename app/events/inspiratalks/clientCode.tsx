"use client";

import React from "react";
import SpeakerCard from "@/components/Events/SpeakerCard";
import EventsNavbar from "@/components/Events/Navbar";
import PoCCard from "@/components/Events/PoCCard";

const InspiraTalks: React.FC = () => {
  const pointsOfContact = [
    { name: "Jahid", phoneNumber: "+918945909374", nameColor: "text-red-500" },
    { name: "Chandrima Ghosh", phoneNumber: "+919051998358", nameColor: "text-blue-500" },
    { name: "Yash Raj Singh", phoneNumber: "+919155277350", nameColor: "text-blue-500" }
  ];
  return (
    <div className="min-h-screen bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] text-white pb-8 w-full">
      <div className="flex justify-center">
        {/* <section className="bg-[#f2b2d8] w-[66.6666%] h-[35px]"></section> */}
        <EventsNavbar />
      </div>
      <div className="flex flex-col justify-center items-center pt-16 pb-0.5 w-full">
        <div className="p-5 text-center">
          <h1 className="text-7xl font-semibold" style={{ color: '#f2b2d8' }}>
            Inspira Talks
          </h1>
        </div>
        {/* Animated white horizontal line */}
        {/* <div className="mt-4 w-full h-0.5 bg-white"></div> */}
        {/* About Section with Speaker Cards */}
        <section className="flex flex-col max-md:flex-col justify-center w-[75%] pb-14 ml-5 mt-8 pt-4 bg-[#f2b2d8] border border-black border-solid rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.3)] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap justify-between w-full px-10 space-y-6 md:space-y-0 md:space-x-6 max-md:flex-col max-md:items-center">
            <div className="w-[30%] max-md:w-full">
              <SpeakerCard
                name="Coming Soon"
                talk="Coming Soon"
                synopsis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus eaque rem quod exercitationem tempora mollitia expedita quo enim officia?"
                dayTime="Day 1, 03:00 PM"
                mode="TBD"
                linkedin="https://linkedin.com/in/lindsaywalton"
                imgLink="/speakerImages/comingsoon.png"
              />
            </div>
            <div className="w-[30%] max-md:w-full">
              <SpeakerCard
                name="Coming Soon"
                talk="Coming Soon"
                synopsis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus eaque rem quod exercitationem tempora mollitia expedita quo enim officia?"
                dayTime="Day 2, 6:30 PM"
                mode="Offline"
                linkedin="https://linkedin.com/in/alexjohnson"
                imgLink="/speakerImages/comingsoon.png"
              />
            </div>
            <div className="w-[30%] max-md:w-full">
              <SpeakerCard
                name="Coming Soon"
                talk="Coming Soon"
                synopsis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus eaque rem quod exercitationem tempora mollitia expedita quo enim officia?"
                dayTime="Day 2, 8:30 PM"
                mode="Hybrid"
                linkedin="https://linkedin.com/in/samanthalee"
                imgLink="/speakerImages/comingsoon.png"
              />
            </div>
          </div>
        </section>
        <div className="flex flex-wrap justify-center gap-3 w-full">
          {pointsOfContact.map((contact, index) => (
            <PoCCard
              key={index}
              name={contact.name}
              phoneNumber={contact.phoneNumber}
              nameColor={contact.nameColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspiraTalks;