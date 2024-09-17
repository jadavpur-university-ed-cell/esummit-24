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
    <div className="relative p-4 bg-white shadow-lg group border-solid rounded-[40px] mt-8">
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
        <h3 className="text-lg leading-6 font-medium">{name}</h3>
        <p className="text-pink-600 font-semibold text-3xl">{talk}</p>
        <p className="text-md text-gray-800 font-medium">{dayTime}</p>
        <p className="text-md text-gray-500">{mode}</p>
      </div>

      {/* Register Button */}
      <div className="mt-4">
        <button className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors">
          Register
        </button>
      </div>

      {/* LinkedIn Social */}
      <div className="mt-3">
        <a href={linkedin} className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">LinkedIn</span>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      {/* Hover to show synopsis */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-[40px] shadow-lg">
        <h3 className="text-lg font-semibold mb-2">Synopsis</h3>
        <p className="text-gray-700 text-sm">{synopsis}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
