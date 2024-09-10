import React from "react";

interface AboutSectionProps {
  description: string;
  imageUrl?: string; // Optional image URL
}

const AboutSection: React.FC<AboutSectionProps> = ({ description, imageUrl }) => {
  return (
    <div className="bg-[#101720] text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-[#e58220] rounded-lg p-8 relative">
          <h2 className="text-3xl font-bold text-center mb-4 border-b-2 border-black pb-2">About</h2>
          <div className="grid grid-cols-3 gap-4">
            
            <div className="bg-gray-300 h-48 w-full rounded">
              {imageUrl ? (
                <img src={imageUrl} alt="About" className="h-full w-full object-cover rounded" />
              ) : (
                <div className="flex items-center justify-center h-full text-[#101720] text-lg font-semibold">
                  No Image
                </div>
              )}
            </div>
            <div className="col-span-2 flex items-center">
              <p className="text-lg">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
