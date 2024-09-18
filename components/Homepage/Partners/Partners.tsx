"use client"
import React from 'react';
import Sponsors from '@/components/Homepage/Partners/Sponsors.json';
import {HoverEffect} from '@/components/Homepage/Partners/customised-card';



function Partners() {

  const sponsordata = Sponsors.sponsor
  return (
    <>
    <section id="partners" className='bg-[#040411] min-h-screen flex flex-col justify-center'>
      <div className=" flex flex-col items-center min-h-[94vh] p-7 mx-5">
        <h1 className="animated-title text-5xl sm:text-7xl font-bold text-[#fcbf49]">Partners</h1>
        <HoverEffect items={sponsordata}/>
      </div>
    </section>
  </>
  )
}

export default Partners















