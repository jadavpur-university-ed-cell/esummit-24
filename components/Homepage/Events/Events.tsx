"use client";
import React from "react";
import Carousel from "./Carousel";

interface Event {
  name: string;
  about: string;
  route: string;
  image: string;
  day:string
}

const eventList: Event[] = [
  {
    name: "Hack <N> Pitch",
    about: "Join Hack-n-Pitch: Innovate, hack, and pitch your ideas overnight!",
    route: "/events/hacknpitch",
    image: "/event-logos/HackNPitch.png",
    day:"Day 1"
  },
  {
    name: "Corporate Clash",
    about: "Test your strategic skills in the ultimate analyst challenge.",
    route: "/events/corporateclash",
    image: "/event-logos/CorporateClash.png",
    day:"Day 1"
  },
  {
    name: "Inspira Talks",
    about: "Learn from top experts and ignite your entrepreneurial journey.",
    route: "/events/inspiratalks",
    image: "/event-logos/inspiratalks.png", 
    day:"Day 2"
  },
  {
    name: "Mock Stock Exchange",
    about: "Master trading skills in a risk-free, competitive stock simulation.",
    route: "/events/mockstock",
    image: "/event-logos/MockStock.png",
    day:"Day 2"
  },
  {
    name: "Mock IPL Auction",
    about: "Build your dream IPL team in a strategic mock auction.",
    route: "/events/mockipl",
    image: "/event-logos/MockIPLAuction.png", // Add appropriate image,
    day:"Day 2"
  },
  {
    name: "Dizmart",
    about: "Design impactful labels at Dizmart, merging creativity, branding, and marketing.",
    route: "/events/dizmart",
    image: "/event-logos/Dizmart.png",
    day:"Day 3"
  },
  {
    name: "LaunchX",
    about: "Showcase, pitch, and launch your startup with expert backing.",
    route: "/events/launchx",
    image: "/event-logos/LaunchX.png",
    day:"Day 3"
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

