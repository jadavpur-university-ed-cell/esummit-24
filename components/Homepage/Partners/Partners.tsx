"use client";

import React from "react";
import Image from "next/image";

interface Sponsor {
  logo: string;
  link: string;
}

// Reusable component to display each sponsor
const SponsorItem: React.FC<Sponsor> = ({ logo, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="sponsor-item"
    >
      <Image
        src={logo}
        alt={"logo"}
        width={100}
        height={100}
        className="grayscale"
      />
    </a>
  );
};

// Component to list and map through sponsors in a horizontal scrollable container
const PreviousSponsor: React.FC<{ sponsors: Sponsor[] }> = ({ sponsors }) => {
  return (
    <div className="previous-sponsor-list">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="previous-sponsor-item">
          <SponsorItem logo={sponsor.logo} link={sponsor.link} />
        </div>
      ))}
      <style jsx>{`
        .previous-sponsor-list {
          display: flex;
          overflow-x: auto; /* Enable horizontal scrolling */
          gap: 20px;
          padding: 20px;
          max-width: 100vw;
        }

        .previous-sponsor-item {
          flex-shrink: 0; /* Prevent shrinking of items */
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .previous-sponsor-item:hover .grayscale {
          transform: scale(1.05); /* Slight zoom on hover */
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
    { logo: "/previous-sponsor/1.png", link: "#" },
    { logo: "/previous-sponsor/2.png", link: "#" },
    { logo: "/previous-sponsor/3.png", link: "#" },
    { logo: "/previous-sponsor/4.png", link: "#" },
    { logo: "/previous-sponsor/5.png", link: "#" },
    { logo: "/previous-sponsor/6.png", link: "#" },
    { logo: "/previous-sponsor/7.png", link: "#" },
    { logo: "/previous-sponsor/8.png", link: "#" },
    { logo: "/previous-sponsor/9.png", link: "#" },
    { logo: "/previous-sponsor/10.png", link: "#" },
    { logo: "/previous-sponsor/11.png", link: "#" },
    { logo: "/previous-sponsor/12.png", link: "#" },
    { logo: "/previous-sponsor/13.png", link: "#" },
    { logo: "/previous-sponsor/14.png", link: "#" },
    { logo: "/previous-sponsor/15.png", link: "#" },
    { logo: "/previous-sponsor/16.png", link: "#" },
    { logo: "/previous-sponsor/17.png", link: "#" },
    { logo: "/previous-sponsor/18.png", link: "#" },
    { logo: "/previous-sponsor/19.png", link: "#" },
    { logo: "/previous-sponsor/20.png", link: "#" },
    { logo: "/previous-sponsor/21.png", link: "#" },
    { logo: "/previous-sponsor/22.png", link: "#" },
    { logo: "/previous-sponsor/23.png", link: "#" },
    // Add more sponsors as needed
  ];

  return (
    <section id="partners" className=" flex flex-col justify-center">
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
