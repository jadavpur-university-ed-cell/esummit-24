// components/Homepage/Events/About.tsx
"use client";

import React, { useState } from "react";
import FormComponent from "./Forms";

interface AboutSectionProps {
  description: string;
  imageUrl?: string;
  eventNumber: number;
}

const AboutSection: React.FC<AboutSectionProps> = ({ description, imageUrl, eventNumber }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const sectionColor = eventNumber % 2 === 0 ? '#D62828' : '#FCBF49';

  return (
    <div className="w-full p-5" style={{ backgroundColor: sectionColor }}>
      <h2 className="text-3xl font-semibold text-center text-white">{description}</h2>
      {/* Add image handling here if needed */}
      <div className="text-center mt-8">
        <button
          onClick={() => setFormVisible(!isFormVisible)} // Toggle form visibility
          className="py-3 px-6 bg-[#FFFFFF] text-black font-bold rounded-md shadow-sm hover:bg-gray-300"
        >
          {isFormVisible ? "Hide Registration" : "Register"}
        </button>
      </div>
      {isFormVisible && (
        <div className="mt-8">
          <FormComponent eventNumber={eventNumber} />
        </div>
      )}
    </div>
  );
};

export default AboutSection;

