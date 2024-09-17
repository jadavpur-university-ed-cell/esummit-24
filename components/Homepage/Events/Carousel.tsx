import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { CardSpotlight } from "@/components/ui/card-spotlight";

interface CardProps {
  name: string;
  about: string;
  route: string;
  image: string;
  day: string;
}

const Card = ({ name, about, route, image, day }: CardProps) => {
  return (
    <CardSpotlight className="flex flex-col items-center h-full p-6">
      <img src={image} alt={name} className="w-auto h-60 mb-6 object-cover" />
      <h1 className="text-3xl text-[#fcbf49] text-center z-20 mb-4">{name}</h1>
      <h2 className="text-2xl text-white text-center z-20 mb-6">{about}</h2>
      <a
        href={route}
        className="px-6 py-3 bg-[#fcbf49] text-[#101720] rounded-full z-20 mb-4"
      >
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
    <div className="relative flex items-center justify-center w-full h-full md:h-3/4 lg:h-full grow">
      <button
        onClick={prev}
        className="absolute left-0 md:-left-5 z-10 p-2 text-[#101720] bg-[#fcbf49] rounded-full aspect-square"
      >
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
              }`}
            >
              <Card
                name={event.name}
                about={event.about}
                route={event.route}
                image={event.image}
                day={event.day}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={next}
        className="absolute right-0 md:-right-5 z-10 p-2 text-[#101720] bg-[#fcbf49] rounded-full aspect-square"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
