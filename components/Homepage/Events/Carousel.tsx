import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

interface CardProps {
	name: string;
	about: string;
	route: string;
	image: string;
	day: string;
}

const Card = ({ name, about, route, image, day }: CardProps) => {
	const router = useRouter();
	return (
		<CardSpotlight className="flex flex-col items-center h-full p-6">
			<Image src={image} alt={name} className="w-auto h-40 aspect-video mb-3 object-contain" width={300} height={200} />
			<h1 className="text-3xl text-[#fcbf49] text-center z-20 mb-4">{name}</h1>
			<h2 className="text-2xl text-white text-center z-20 mb-6">{about}</h2>
			<a
			onClick={()=>{
				router.push(route);
			}}
				className="px-6 py-3 bg-[#fcbf49] text-[#101720] rounded-full z-20 mb-4">
				Learn More
			</a>
			<h2 className="text-xl text-[#fcbf49] font-bold text-center bg-[#101720] py-2 px-4 rounded-full z-20">
				{day}
			</h2>
		</CardSpotlight>
	);
};

interface Event {
	name: string;
	about: string;
	route: string;
	image: string;
	day: string;
}


const Carousel = ({ eventList }: { eventList: Event[] }) => {
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
					<Card
						name={event.name}
						about={event.about}
						route={event.route}
						image={event.image}
						day={event.day}
					/>{" "}
				</SwiperSlide>
			))}
			<div className="w-full flex justify-end px-8 pt-4 gap-x-6">
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
};

export default Carousel;