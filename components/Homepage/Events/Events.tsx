"use client";
import React from "react";
import Carousel from "./Carousel";

interface Event {
  name: string;
  about: string;
  route: string;
}

const eventList: Event[] = [
  {
    name: "Hack <N> Pitch",
    about: "Pitch your hack and win exciting prizes",
    route: "/events/hacknpitch",
  },
  {
    name: "Corporate Clash",
    about: "Compete with top corporate teams",
    route: "/events/corporateclash",
  },
  {
    name: "Inspira Talks",
    about: "Talks from inspiring industry leaders",
    route: "/events/inspiratalks",
  },
  {
    name: "Mock Stock Exchange",
    about: "Experience the thrill of stock market trading",
    route: "/events/mockstock",
  },
  {
    name: "Mock IPL Auction",
    about: "Participate in a thrilling IPL auction simulation",
    route: "/events/mockipl",
  },
  {
    name: "Dizmart",
    about: "Showcase your design and marketing skills",
    route: "/events/dizmart",
  },
  {
    name: "LaunchX",
    about: "Launch your product in the ultimate startup competition",
    route: "/events/launchx",
  },
];

function EventsComponent() {
  return (
    <section id="events">
      <div className="h-[80vh] bg-[#101720] flex flex-col items-center p-[10vmin] gap-y-10">
        <h1 className="text-5xl text-[#fcbf49]">Events</h1>
        <div className="flex items-center w-full h-full grow">
          <Carousel eventList={eventList} />
        </div>
      </div>
    </section>
  );
}

export default EventsComponent;
