import React, { useState } from "react";
import FormComponent from "./FormComponent"; // Import the FormComponent

interface AboutSectionProps {
  description: string;
  imageUrl?: string;
  eventNumber: number; // Prop to handle event-specific styles
}

const AboutSection: React.FC<AboutSectionProps> = ({ description, imageUrl, eventNumber }) => {
  // State to toggle form visibility
  const [isFormVisible, setFormVisible] = useState(false);

  // Determine color based on eventNumber
  const sectionColor = eventNumber % 2 === 0 ? '#D62828' : '#F77F00'; // Red for even, Orange for odd

  return (
    <div className="py-8 px-4" style={{ backgroundColor: '#101720' }}> 
      <div className="max-w-4xl mx-auto">
        {/* About Section */}
        <div className="rounded-lg p-8 relative" style={{ backgroundColor: sectionColor }}>
          <h2 className="text-3xl font-semibold text-center mb-4 border-b-2 border-white pb-2" style={{ color: '#FFFFFF' }}> 
            About
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Image Placeholder */}
            <div className="bg-gray-300 h-48 w-full rounded">
              {imageUrl ? (
                <img src={imageUrl} alt="About" className="h-full w-full object-cover rounded" />
              ) : (
                <div className="flex items-center justify-center h-full text-[#101720] text-lg font-semibold">
                  No Image
                </div>
              )}
            </div>
            {/* Description */}
            <div className="col-span-2 flex items-center">
              <p className="text-lg" style={{ color: '#FFFFFF' }}>{description}</p> {/* White text */}
            </div>
          </div>
        </div>
      </div>

      {/* Register Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => setFormVisible(!isFormVisible)} // Toggle form visibility
          className="py-3 px-6 bg-[#FFFFFF] text-black font-bold rounded-md shadow-sm hover:bg-gray-300"
        >
          {isFormVisible ? "Hide Registration" : "Register"}
        </button>
      </div>

      {/* Conditionally render FormComponent */}
      {isFormVisible && (
        <div className="mt-8">
          <FormComponent eventNumber={eventNumber} />
        </div>
      )}

      {/* Dynamic Orange/Red Design Line */}
      <div className="relative">
        <svg
          className="mx-auto"
          width="100%"
          height="40"
          viewBox="0 0 500 40"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,10 Q100,30 250,10 T500,10 L500,40 L0,40 Z"
            fill={sectionColor}
          />
        </svg>
      </div>
    </div>
  );
};

export default AboutSection;
