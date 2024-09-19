import React from 'react';

interface CardProps {
  name: string;
  talk: string;
  synopsis: string;
  dayTime: string;
  mode: string;
  linkedin: string;
}

const SpeakerCard: React.FC<CardProps> = ({ name, talk, synopsis, dayTime, mode, linkedin }) => {
  return (
    <div className="relative p-4 bg-white shadow-lg group border-solid rounded-[40px] mt-8 overflow-hidden">
      {/* Speaker Image and Details */}
      <div className="aspect-w-3 aspect-h-2">
        <img
          className="object-cover shadow-lg rounded-lg"
          src="https://via.placeholder.com/150" // Placeholder image, you can change this
          alt={name}
        />
      </div>

      {/* Speaker Info */}
      <div className="space-y-2 mt-4">
        <a href={linkedin} className="text-lg leading-6 font-medium text-pink-600 hover:underline">
          {name}
        </a>
        <p className="text-pink-600 font-semibold text-3xl">{talk}</p>
        <p className="text-md text-gray-800 font-medium">{dayTime}</p>
        <p className="text-md text-gray-500">{mode}</p>
      </div>

      {/* Hover to show synopsis and register button */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-[40px] shadow-lg flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">Synopsis</h3>
          <p className="text-gray-700 text-sm">{synopsis}</p>
        </div>
        <div className="mt-4">
          <button className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
