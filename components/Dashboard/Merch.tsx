"use client";

import React from "react";
import Image from "next/image";
import ghostRed from '@/public/ghosts/Ghost_red.png';
import ghostYellow from '@/public/ghosts/Ghost_yellow.png';
import ghostPink from '@/public/ghosts/Ghost_pink.png';

const MerchPage: React.FC = () => {
  const tshirtDescription = `Show off your style with our exclusive T-shirt design. Crafted for comfort and designed to make a statement. Perfect for any occasion.`;
  const capDescription = `Complete your look with our stylish cap. Designed to provide both comfort and a trendy appearance. A must-have accessory for any outfit.`;

  return (
    <div className="relative min-h-screen w-full bg-[#101720] bg-grid-white/[0.1] text-white">
      {/* Decorative Images */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-5 left-5">
          <Image src={ghostRed} alt="Red Ghost" width={100} height={100} className="opacity-70" />
        </div>
        <div className="absolute top-5 right-5">
          <Image src={ghostYellow} alt="Yellow Ghost" width={100} height={100} className="opacity-70 " />
        </div>
        <div className="absolute top-8 right-80">
          <Image src={ghostPink} alt="Pink Ghost" width={100} height={100} className="opacity-70 " />
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-center relative z-10">
        <section className="bg-[#f77f00] w-[66.6666%] h-[35px]"></section>
      </div>

      {/* Title */}
      <div className="flex flex-col justify-center items-center pt-16 pb-8 relative z-10">
        <h1 className="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d62828] to-[#f77f00]">
          Merch
        </h1>
        
      </div>
      <div className="w-full h-1 bg-white mb-8 relative z-10"></div>

      {/* Merch Sections */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 pt-8 pb-16 relative z-10">
        {/* T-Shirt Section */}
        <div className="flex flex-col w-full md:w-[45%] px-4">
          <div className="flex flex-col bg-gradient-to-br from-yellow-600 to-red-800 hover:bg-gradient-to-tr border border-black border-solid rounded-[40px] shadow-lg">
            <h1 className="text-5xl font-semibold text-white text-right px-10 pt-10">
              T-Shirt
            </h1>
            <div className="flex self-end mt-5 max-w-full bg-yellow-400 h-[3px] w-[30%] outline-dashed mr-8" />
            <div className="flex flex-col justify-center items-center pt-4 pb-6 w-full">
              {/* T-Shirt Description */}
              <p className="text-xl text-yellow-200 font-medium px-10 pt-5 text-center">
                {tshirtDescription}
              </p>
              {/* T-Shirt Design */}
              <div className="flex justify-center items-center pt-5">
                <Image width={200} height={200} src="/path/to/tshirt-design.jpg" alt="T-Shirt Design" className="w-full max-w-[400px] rounded-lg shadow-md"/>
              </div>
              {/* Payment Link */}
              <a href="https://payment-link-for-tshirt.com" target="_blank" rel="noopener noreferrer">
                <button className="bg-orange-200 text-black font-bold border border-black rounded-lg px-8 py-2 mt-8 hover:bg-orange-800 hover:text-white transition-all duration-300">
                  Buy T-Shirt
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Vertical Step Design */}
        <div className="hidden md:flex justify-center items-center">
          <div className="bg-gradient-to-b from-yellow-500 to-yellow-300 w-[5px] h-[300px]"></div>
        </div>

        {/* Cap Section */}
        <div className="flex flex-col w-full md:w-[45%] px-4 mt-8 md:mt-0">
          <div className="flex flex-col bg-gradient-to-br from-yellow-700 to-red-600 hover:bg-gradient-to-l border border-black border-solid rounded-[40px] shadow-lg">
            <h1 className="text-5xl font-semibold text-white text-right px-10 pt-10">
              Cap
            </h1>
            <div className="flex self-end mt-5 max-w-full bg-yellow-100 divide-orange-600 h-[3px] w-[30%] outline-dashed mr-8" />
            <div className="flex flex-col justify-center items-center pt-4 pb-6 w-full">
              {/* Cap Description */}
              <p className="text-xl text-yellow-200 font-medium px-10 pt-5 text-center">
                {capDescription}
              </p>
              {/* Cap Design */}
              <div className="flex justify-center items-center pt-5">
                <Image width={200} height={200} src="/path/to/cap-design.jpg" alt="Cap Design" className="w-full max-w-[400px] rounded-lg shadow-md"/>
              </div>
              {/* Payment Link */}
              <a href="https://payment-link-for-cap.com" target="_blank" rel="noopener noreferrer">
                <button className="bg-orange-200 text-black font-bold border border-black rounded-lg px-8 py-2 mt-8 hover:bg-orange-800 hover:text-white transition-all duration-300">
                  Buy Cap
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Sections */}
      <div className="flex flex-col">
        {/* First Row */}
        <div className="flex justify-between relative z-10">
          <section className="bg-red-500 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-red-500 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
        </div>

        {/* Second Row */}
        <div className="flex justify-between mt-4 relative z-10">
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-orange-400 w-[25%] h-[35px]"></section>
          <section className="w-[25%] h-[35px]"></section>
          <section className="bg-orange-400 w-[25%] h-[35px]"></section>
        </div>
      </div>
    </div>
  );
};

export default MerchPage;