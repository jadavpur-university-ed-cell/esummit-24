import React from 'react';

interface PoCCardProps {
  name: string;
  phoneNumber: string;
  nameColor: string;  
}

const PoCCard: React.FC<PoCCardProps> = ({ name, phoneNumber, nameColor }) => {
  const nameColorClass = `${nameColor}-600`;
  const phoneColorClass = `${nameColor}-400`;

  return (
    <div className="p-4 bg-white shadow-lg border-solid rounded-lg mt-8 overflow-hidden w-[20%] justify-between">
      {/* Card Content */}
      <div className="space-y-2 justify-between">
        <p className={`text-2xl font-semibold ${nameColorClass} text-2xl`}>
          {name}
        </p>
        <p className={`text-lg font-medium ${phoneColorClass}`}>
          {phoneNumber}
        </p>
      </div>

      {/* WhatsApp Button */}
      <div className="mt-4">
        <a
          href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`} // Removes non-digit characters for WhatsApp link
          className="px-4 py-2 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
        >
          <svg
            className="w-7 h-10 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h3v14H3V5zm5 0h3v14H8V5zm5 0h3v14h-3V5zm5 0h3v14h-3V5z"
            />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default PoCCard;
