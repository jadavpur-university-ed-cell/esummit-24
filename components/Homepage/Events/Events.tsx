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
    about: "Join Hack-n-Pitch: Innovate, hack, and pitch your ideas overnight!",
    route: "/events/hacknpitch",
  },
  {
    name: "Corporate Clash",
    about: "Test your strategic skills in the ultimate analyst challenge.",
    route: "/events/corporateclash",
  },
  {
    name: "Inspira Talks",
    about: "Learn from top experts and ignite your entrepreneurial journey.",
    route: "/events/inspiratalks",
  },
  {
    name: "Mock Stock Exchange",
    about: "Master trading skills in a risk-free, competitive stock simulation.",
    route: "/events/mockstock",
  },
  {
    name: "Mock IPL Auction",
    about: "Build your dream IPL team in a strategic mock auction.",
    route: "/events/mockipl",
  },
  {
    name: "Dizmart",
    about: "Design impactful labels at Dizmart, merging creativity, branding, and marketing.",
    route: "/events/dizmart",
  },
  {
    name: "LaunchX",
    about: "Showcase, pitch, and launch your startup with expert backing.",
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
