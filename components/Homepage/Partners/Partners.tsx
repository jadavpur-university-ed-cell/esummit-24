"use client"
import React from 'react';
import Sponsors from '@/components/Homepage/Partners/Sponsors.json';
import {HoverEffect} from '@/components/Homepage/Partners/customised-card';



function Partners() {

  const sponsordata = Sponsors.sponsor
  return (
    <>
    <section id="partners" className='bg-[#101720] min-h-screen flex flex-col justify-center font-[Poppins]'>
      <div className=" bg-[#101720] flex flex-col items-center min-h-[94vh] p-7 mx-5 rounded-3xl border-white  border-2">
        <h1 className="text-5xl text-[#fcbf49]">Partners</h1>
        <HoverEffect items={sponsordata}/>
      </div>
    </section>
  </>
  )
}

export default Partners















