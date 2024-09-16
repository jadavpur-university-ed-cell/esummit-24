"use client";
import React from "react";
import Carousel from "./Carousel";

interface event {
  name: string;
  about: string;
  eventNumber:number;
}
{/*1 for solo; 2 for multiple candidates*/}
const eventList: event[] = [
  {
    name: "Hack <N> Pitch",
    about: "Pitch your hack and win exciting prizes",
	eventNumber:2
  },
  {
    name: "Corporate Clash",
    about: "Compete with top corporate teams",
	eventNumber:4
  },
  {
    name: "Inspira Talks",
    about: "Talks from inspiring industry leaders",
	eventNumber:1
  },
  {
    name: "Mock Stock",
    about: "Experience the thrill of stock market trading",
	eventNumber:3
  },
  {
    name: "Mock IPL Auction",
    about: "Participate in a thrilling IPL auction simulation",
	eventNumber:5
  },
  {
    name: "Dizmart",
    about: "Showcase your design and marketing skills",
	eventNumber:6
  },
  {
    name: "LaunchX",
    about: "Launch your product in the ultimate startup competition",
	eventNumber:8
  },
];

function EventsComponent() {
  return (
    <>
      <section id="events">
        <div className="h-[80vh] bg-[#101720] flex flex-col items-center p-[10vmin] gap-y-10">
          <h1 className="text-5xl text-[#fcbf49]">Events</h1>
          <div className="flex items-center w-full h-full grow">
            <Carousel eventList={eventList} />
          </div>
        </div>
      </section>
    </>
  );
}

export default EventsComponent;
