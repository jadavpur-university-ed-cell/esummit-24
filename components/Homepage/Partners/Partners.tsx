"use client";

import React from "react";
import Image from "next/image";

interface Sponsor {
  logo: string;
  
}

// Reusable component to display each sponsor
const SponsorItem: React.FC<Sponsor> = ({ logo }) => {
  return (
    
    
      <Image
        src={logo}
        alt={"logo"}
        width={100}
        height={100}
      />
    
  );
};

// Component to list and map through sponsors in a horizontal scrollable container
const PreviousSponsor: React.FC<{ sponsors: Sponsor[] }> = ({ sponsors }) => {
  return (
    <div className="previous-sponsor-list">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="previous-sponsor-item">
          <SponsorItem logo={sponsor.logo}  />
        </div>
      ))}
      <style jsx>{`
        .previous-sponsor-list {
          display: flex;
          align-items: center;
          overflow-x: auto; /* Enable horizontal scrolling */
          gap: 20px;
          padding: 20px;
          max-width: 100vw;
        }

        .previous-sponsor-item {
          flex-shrink: 0; /* Prevent shrinking of items */
          transition: transform 0.2s ease, filter 0.2s ease;
          filter: grayscale(100%);
        }

        .previous-sponsor-item:hover {
          transform: scale(1.1); /* Slight zoom on hover */
          filter: grayscale(0); /* Remove grayscale on hover */
        }

        .grayscale {
          filter: grayscale(100%); /* Make images grayscale */
        }

        /* For WebKit browsers (like Chrome, Safari) to hide scrollbar */
        div.previous-sponsor-list::-webkit-scrollbar {
          height: 8px;
        }
        div.previous-sponsor-list::-webkit-scrollbar-thumb {
          background-color: #fcbf49;
          border-radius: 10px;
        }
        div.previous-sponsor-list::-webkit-scrollbar-track {
          background-color: #101720;
        }
      `}</style>
    </div>
  );
};

const Partners: React.FC = () => {
  // Array of sponsors
  const sponsors = [
    { logo: "/previous-sponsor/1.png"},
    { logo: "/previous-sponsor/2.png"},
    { logo: "/previous-sponsor/3.png"},
    { logo: "/previous-sponsor/4.png"},
    { logo: "/previous-sponsor/5.png"},
    { logo: "/previous-sponsor/6.png"},
    { logo: "/previous-sponsor/7.png"},
    { logo: "/previous-sponsor/8.png"},
    { logo: "/previous-sponsor/9.png"},
    { logo: "/previous-sponsor/10.png"},
    { logo: "/previous-sponsor/11.png"},
    { logo: "/previous-sponsor/12.png"},
    { logo: "/previous-sponsor/13.png"},
    { logo: "/previous-sponsor/14.png"},
    { logo: "/previous-sponsor/15.png"},
    { logo: "/previous-sponsor/16.png"},
    { logo: "/previous-sponsor/17.png"},
    { logo: "/previous-sponsor/18.png"},
    { logo: "/previous-sponsor/19.png"},
    { logo: "/previous-sponsor/20.png"},
    { logo: "/previous-sponsor/21.png"},
    { logo: "/previous-sponsor/22.png"},
    { logo: "/previous-sponsor/23.png"},
    // Add more sponsors as needed
  ];

  return (
    <section id="partners" className=" flex flex-col bg-[#101720] bg-opacity-60 justify-center">
      <div className="flex flex-col items-center p-7 mx-5 lg:min-h-[65vh]">
        <h1 className="animated-title text-5xl sm:text-7xl my-6 font-bold text-[#fcbf49]">
          Previous Sponsors
        </h1>
        <PreviousSponsor sponsors={sponsors} />
      </div>
    </section>
  );
};

export default Partners;
