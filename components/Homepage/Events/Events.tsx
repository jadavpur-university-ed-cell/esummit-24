"use client";
import React, { FunctionComponent } from "react";
import Carousel from "./Carousel";

interface event {
	name: string;
	about: string;
}

const eventList: event[] = [
	{
		name: "One",
		about: "Build your team",
	},
	{
		name: "Two",
		about: "Hackathon",
	},
	{
		name: "Three",
		about: "Talk show",
	},
	{
		name: "Four",
		about: "Product label design",
	},
	{
		name: "Five",
		about: "Build your team",
	},
	{
		name: "Six",
		about: "Build your team",
	},
	{
		name: "Seven",
		about: "Build your team",
	},
];

function Events() {
	return (
		<>
			<section id="events">
				<div className="h-[120vmin] bg-[#101720] flex flex-col items-center p-[10vmin]">
					<h1 className="text-5xl text-[#fcbf49]">Events</h1>
					<div className="flex items-center w-full h-full grow">
					<Carousel eventList={eventList}/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Events;
