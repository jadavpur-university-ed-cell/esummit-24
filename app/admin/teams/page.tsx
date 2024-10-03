import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface Event {
	name: string;
	path: string;
}

const events: Event[] = [
	{
		name: "Hack<n>Pitch",
		path: "hacknpitch",
	},
	{
		name: "Corporate Clash",
		path: "corporateclash",
	},
	{
		name: "Mock Stock",
		path: "mockstock",
	},
	{
		name: "Mock IPL Auction",
		path: "mockiplauction",
	},
	{
		name: "Diz Mart",
		path: "dizmart",
	},
	{
		name: "LaunchX",
		path: "launchx",
	}
];

function EventCard({ name,path, ind }: { name: string, path:string, ind: number }) {
	return (
		<>
			<div
				className={clsx(
					"w-full h-[50vh] p-5 my-4 rounded-xl flex items-center justify-between flex-col relative bg-[#202d3fa1]",
					{ "col-span-3": ind !== 2 && ind !== 3 && ind !== 4 },
					{ "col-span-2": ind === 2 || ind === 3 || ind === 4 }
				)}>
				<h2 className="text-4xl">{name}</h2>
				<Link
					className="absolute right-5 bottom-5 text-white font-light bg-[#0000005d] px-3 py-1 rounded-[3px]"
					href={{
						pathname: `/admin/teams/${path}`,
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
				<Link href='/admin/teams/createTeam' className="bg-[#202d3f] text-white px-5 py-2 rounded-[4px]">Create New Team</Link>
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
