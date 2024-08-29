import React, {useState, useEffect} from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

interface event{
    name: string,
    about: string
}

function Card({ name, about }: { name: string; about: string }) {
	return (
		<>
			<CardSpotlight className="flex flex-col items-center h-full">
				<h1 className="text-3xl text-white text-center z-20">{name}</h1>
				<h2 className="text-2xl text-white text-center z-20">{about}</h2>
			</CardSpotlight>
		</>
	);
}

const Carousel = ({eventList}:{eventList:event[]}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const next = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % eventList.length);
	};

	const prev = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + eventList.length) % eventList.length
		);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			next();
		}, 7000);

		return () => clearInterval(interval);
	}, []);

	const getVisibleItems = () => {
		const items = [];
		for (let i = 0; i < 3; i++) {
			items.push(eventList[(currentIndex + i) % eventList.length]);
		}
		return items;
	};

	const visibleItems = getVisibleItems();

	return (
		<div className="relative flex items-center justify-center w-full h-4/5 md:h-1/2 lg:h-4/5 grow">
			<button
				onClick={prev}
				className="absolute left-0 md:-left-5 z-10 p-2 text-[#101720] bg-[#fcbf49] rounded-full aspect-square">
				<FaChevronLeft />
			</button>
			<div className="w-full h-full overflow-hidden grow">
				<div className="flex justify-center w-full h-full gap-x-8 px-4">
					{visibleItems.map((event, index) => (
						<div
							key={index}
							className={`w-full h-full flex-shrink-0 grow lg:w-1/3 transition-all duration-500 ease-in-out transform ${
								visibleItems.length === 1
									? "sm:w-3/5 md:w-full"
									: visibleItems.length === 2
									? "md:w-1/2"
									: "md:w-1/3"
							}`}>
							<Card name={event.name} about={event.about}/>
						</div>
					))}
				</div>
			</div>
			<button
				onClick={next}
				className="absolute right-0 md:-right-5 z-10 p-2 text-[#101720] bg-[#fcbf49] rounded-full aspect-square">
				<FaChevronRight />
			</button>
		</div>
	);
};

export default Carousel;