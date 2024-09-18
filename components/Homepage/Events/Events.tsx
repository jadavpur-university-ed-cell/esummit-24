"use client";
import React, { FunctionComponent } from "react";
import Carousel from "./Carousel";

interface event {
	name: string;
	about: string;
}

const eventList: event[] = [
	{
		name: "LaunchX",
		about: "Launch X is the perfect platform for aspiring entrepreneurs to showcase their innovations and gain valuable feedback from industry experts to achieve next step of their own startup journey.",
	},
	{
		name: "Corporate Clash",
		about: "Hackathon",
	},
	{
		name: "Mock Stock",
		about: "Talk show",
	},
	{
		name: "Hack<n>Pitch",
		about: "Product label design",
	},
	{
		name: "Mock IPL Auction",
		about: "Build your team",
	},
	{
		name: "Diz Mart",
		about: "Build your team",
	},
	{
		name: "Inspira Talks",
		about: "Build your team",
	},
];

function Events() {
	return (
		<>
			<section id="events">
				<div className="min-h-screen bg-[#040411] flex flex-col items-center py-[6vmin] px-[8vmin] gap-y-16">
					<h1 className="animated-title text-7xl font-bold text-[#fcbf49]">Events</h1>
					<div className="flex items-center w-full h-[60vh] grow">
					<Carousel eventList={eventList}/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Events;
