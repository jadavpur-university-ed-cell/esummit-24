import { useRouter } from "next/navigation";
import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

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
		<CardSpotlight className="flex flex-col items-center h-full p-6 w-[90vw] sm:w-[40vw] xl:w-[27vw] 2xl:w-[15vw]">
			<Image
				src={image}
				alt={name}
				className="w-auto h-40 aspect-video mb-3 object-contain"
				width={300}
				height={200}
			/>
			<h1 className="text-3xl text-[#fcbf49] text-center z-20 mb-4">{name}</h1>
			<h2 className="text-2xl text-white text-center z-20 mb-6 text-wrap w-2/3">
				{about}
			</h2>
			<a
				onClick={() => {
					router.push(route);
				}}
				className="px-6 py-3 bg-[#fcbf49] text-[#101720] rounded-full z-20 mb-4 cursor-pointer">
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

const CarouselComponent = ({ eventList }: { eventList: Event[] }) => {
	return (
		<Carousel
			plugins={[
				Autoplay({
					delay: 6000,
				}),
			]}
			opts={{
				loop: true,
				align: "start",
			}}
			className="w-[85vw] 2xl:w-[60vw]">
			<CarouselContent className="-ml-4">
				{eventList.map((event, ind) => (
					<CarouselItem
						key={ind}
						className="sm:basis-1/2 xl:basis-1/3 2xl:basis-1/4">
						<Card
							name={event.name}
							about={event.about}
							route={event.route}
							image={event.image}
							day={event.day}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="bg-[#fcbf49]" />
			<CarouselNext className="bg-[#fcbf49]" />
		</Carousel>
	);
};

export default CarouselComponent;
