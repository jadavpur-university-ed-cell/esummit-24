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
import slide_image_1 from "./assets/img1.jpg";
import slide_image_2 from "./assets/img2.jpg";
import slide_image_3 from "./assets/img3.jpg";
import slide_image_4 from "./assets/img4.jpg";
import slide_image_5 from "./assets/img5.jpg";
import slide_image_6 from "./assets/img6.jpg";
import slide_image_7 from "./assets/img7.jpg";
import slide_image_8 from "./assets/img8.jpg";

function Gallery() {
  const images = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
    slide_image_6,
    slide_image_7,
    slide_image_8,
  ];
  return (
    <div className="container gallery-container">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <h1 className="heading">Gallery</h1>
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
        className="swiper_container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`slide_image_${index + 1}`} />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Gallery;