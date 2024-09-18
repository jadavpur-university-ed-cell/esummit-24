import React, { useRef } from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface event {
	name: string;
	about: string;
}

function Card({ name, about }: { name: string; about: string }) {
	return (
		<>
			<CardSpotlight className="flex flex-col items-center gap-y-10 h-full">
				<h1 className="text-3xl text-white text-center z-20">{name}</h1>
				<h2 className="text-2xl text-white text-center z-20">{about}</h2>
			</CardSpotlight>
		</>
	);
}

export default function Carousel({ eventList }: { eventList: event[] }) {
	const swiperRef = useRef<SwiperRef | null>(null);
	return (
		<Swiper
			ref={swiperRef}
			spaceBetween={50}
			slidesPerView={"auto"}
			scrollbar={{ draggable: true }}
			autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
			modules={[Autoplay, Navigation]}
			navigation={true}
			centeredSlides={true}
			grabCursor={true}
			speed={800}
			loop={true}
			longSwipes={false}>
			{eventList.map((event, ind) => (
				<SwiperSlide key={ind}>
					<Card name={event.name} about={event.about} />
				</SwiperSlide>
			))}
			<div className="w-full flex justify-end p-8 gap-x-6">
				<button
					onClick={() => swiperRef.current?.swiper.slidePrev()}
					className="text-[#101720] bg-[#fcbf49] rounded-full aspect-square p-2 z-50">
					<FaChevronLeft />
				</button>
				<button
					onClick={() => swiperRef.current?.swiper.slideNext()}
					className="text-[#101720] bg-[#fcbf49] rounded-full aspect-square p-2 z-50">
					<FaChevronRight />
				</button>
			</div>
		</Swiper>
	);
}
