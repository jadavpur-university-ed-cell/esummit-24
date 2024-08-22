import React from "react";
import { getTeams } from "./teamList";
import AddTeamButton from "./AddTeamButton";
import ExportCSV from "./ExportCSV";
import Teams from "./Teams";

async function EventTeams(req: any) {
	const title = req.searchParams.name;
	const teams = await getTeams(title);
	return (
		<>
			{/* <main className="py-[10vh] flex flex-col items-center">
				<h1 className="text-white text-5xl font-medium">{title}</h1>
				<div className="w-3/5 grid grid-cols-4 gap-x-4 my-[6vh]">
					<div className="col-span-1 text-lg text-white bg-[#192331] rounded-lg px-2 py-6 flex flex-col items-center">
						<h3 className="mb-2 text-center">
							<span className="text-2xl font-medium"> {users.length} </span>
							Teams
						</h3>
						<AddTeamButton />
					</div>
					<div className="col-span-1 text-lg text-white bg-[#192331] rounded-lg px-2 py-6 flex flex-col items-center">
						<h2 className="mb-2">Export as CSV</h2>
						<ExportCSV data={users} fileName={`${title}.csv`} />
					</div>
					<div className="col-span-2 bg-[#192331] flex flex-col items-center p-4 rounded-lg">
						<Search />
					</div>
				</div>
				<Teams users={users} />
			</main> */}
			<Teams title={title} teams={teams}/>
		</>
	);
}

export default EventTeams;
