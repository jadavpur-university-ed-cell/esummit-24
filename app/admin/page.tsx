import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface Event {
	name: string;
	path: string;
}

const events: Event[] = [
	{
		name: "Mock IPL",
		path: "mockipl",
	},
	{
		name: "Hack n Pitch",
		path: "hacknpitch",
	},
	{
		name: "Three",
		path: "three",
	},
	{
		name: "Four",
		path: "four",
	},
	{
		name: "Five",
		path: "five",
	},
	{
		name: "Six",
		path: "six",
	},
	{
		name: "Seven",
		path: "seven",
	},
];

function EventCard({ name,path, ind }: { name: string, path:string, ind: number }) {
	return (
		<>
			<div
				className={clsx(
					"w-full h-[50vh] p-5 my-4 rounded-lg flex items-center justify-between flex-col relative bg-[#17212e]",
					{ "col-span-3": ind !== 2 && ind !== 3 && ind !== 4 },
					{ "col-span-2": ind === 2 || ind === 3 || ind === 4 }
				)}>
				<h2 className="text-4xl">{name}</h2>
				<Link
					className="absolute right-5 bottom-5 text-white font-light bg-[#0000005d] px-3 py-1 rounded-[3px]"
					href={{
						pathname: `/admin/${path}`,
						query: { name: name },
					}}>
					Team List
				</Link>
			</div>
		</>
	);
}

function Admin() {
	return (
		<>
			<main className="m-[10vmin] flex flex-col items-center">
				<h1 className="text-white text-4xl mb-[3vh]">Events</h1>
				<div className="w-3/4 grid grid-cols-6 place-items-center gap-x-4">
					{events.map((event: Event, index: number) => (
						<EventCard key={index} ind={index} name={event.name} path={event.path} />
					))}
				</div>
			</main>
		</>
	);
}

export default Admin;
