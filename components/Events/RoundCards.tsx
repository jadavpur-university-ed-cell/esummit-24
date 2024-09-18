"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

// Define the type for each round's data
interface Round {
  title: string;
  date: string;
  description: string;
}

// Define the props type for the RoundCards component
interface RoundCardsProps {
  headingColor: string;
  textColor: string;
  rounds: Round[];
}

const RoundCards: React.FC<RoundCardsProps> = ({ headingColor, textColor, rounds }) => {
  return (
    <div className="w-full py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rounds.map((round, index) => (
          <div
            key={index}
            className="rounded-lg shadow-xl py-6 px-8 mx-4 border border-white bg-[#101720] bg-grid-white/[0.03] md:bg-grid-large-white/[0.03] backdrop-blur-md"
          >
            {/* Title */}
            <h2 className={`text-2xl font-bold ${headingColor}`}>{round.title}</h2>

            {/* Date with Font Awesome Calendar Icon */}
            <div className="flex items-center text-xl  mt-2">
              <FontAwesomeIcon icon={faCalendar} className={`mr-2 ${textColor}`} />
              <p className={`${textColor}`}>{round.date}</p>
            </div>

            {/* Description */}
            <p className="text-md mt-4 text-white font-medium" >{round.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoundCards;
