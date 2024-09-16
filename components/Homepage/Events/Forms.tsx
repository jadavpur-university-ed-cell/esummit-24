import React from "react";
import Ghost1 from "@/components/Homepage/Events/assets/Ghost 1.png";
import Ghost2 from "@/components/Homepage/Events/assets/Ghost 2.png";

interface FormComponentProps {
  eventNumber: number; // Prop to handle event-specific styles
}

const FormComponent: React.FC<FormComponentProps> = ({ eventNumber }) => {
  // Determine color based on eventNumber
  const sectionColor = eventNumber % 2 === 0 ? '#D62828' : '#F77F00'; // Red for even, Orange for odd
  const ghostImage = eventNumber % 2 === 0 ? Ghost1 : Ghost2;

  return (
    <div className="py-8 px-4" style={{ backgroundColor: '#101720' }}> {/* Use black from the image */}
      <div className="max-w-4xl mx-auto">
        {/* Form Section */}
        <div className="rounded-lg p-8 relative" style={{ backgroundColor: sectionColor }}>
          <h2 className="text-3xl font-bold text-center mb-4 border-b-2 border-white pb-2" style={{ color: '#FFFFFF' }}> {/* White text */}
            Register
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-lg font-medium" style={{ color: '#FFFFFF' }}>
                Enter Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="teamName" className="block text-lg font-medium" style={{ color: '#FFFFFF' }}>
                Enter Team Name
              </label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
                placeholder="Team Awesome"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#FFFFFF] text-black font-bold rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-900 focus:ring-opacity-50"
            >
              Register
            </button>
          </form>
          {/* Ghost Image */}
          <div className="absolute bottom-4 left-4">
            <img src={ghostImage} alt="Ghost" className="h-16 w-16" />
          </div>
        </div>
      </div>

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

export default FormComponent;
