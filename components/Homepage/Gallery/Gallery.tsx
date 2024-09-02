"use client";
import React from "react";
import "./Gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay CSS (optional)

import {
  EffectCoverflow,
  Pagination,
  Autoplay,
} from "swiper/modules"; // Import Autoplay module

import {images} from "@/components/Homepage/Gallery/images";
import Image from "next/image";


function Gallery() {
  
  return (
    <section id="gallery" className='bg-[#101720] min-h-screen flex flex-col justify-center font-[Poppins]'>
    <div className=" bg-[#101720] flex flex-col items-center justify-start min-h-[94vh] mx-5 p-5 rounded-3xl border-white  border-2">
      <h1 className="text-5xl text-[#fcbf49] py-3 mb-7">Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 2500, // Adjust the delay time (in milliseconds) between slides
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]} // Include Autoplay module
        className="h-[80vh] flex flex-col items-center justify-center w-[100%] lg:w-[71.5%] mx-auto sm:rounded-[6rem]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-[38rem]">
            <Image src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
        <div className="flex items-center justify-center">
          <div className="swiper-pagination flex justify-center text-center"></div>
        </div>
      </Swiper>
    </div>
    </section>
  )
}

export default Gallery;