import Link from "next/link";
import { FaBars, FaX } from "react-icons/fa6";
import React, {useRef} from "react";

function EventsNavbar() {

    const sidebarRef = useRef<HTMLDivElement>(null);

    const closeSidebar = () => {
        if(sidebarRef.current){
        sidebarRef.current.style.width = "0px";
        sidebarRef.current.style.padding = "0px";
    }
}

const openSidebar = () => {
    if(sidebarRef.current){
        sidebarRef.current.style.width = "250px";
        sidebarRef.current.style.padding = "1.5rem";
    }
    }

	return (
		<>
			<div className="hidden lg:flex px-6 py-2 rounded-full bg-[#fcbf49] font-semibold text-[#101720] mt-8">
				<nav className="flex gap-x-8">
					<Link href="/events/launchx" className="hover:font-bold">
						LaunchX
					</Link>
					<Link href="/events/corporateclash" className="hover:font-bold">
						Corporate Clash
					</Link>
					<Link href="/events/mockstock" className="hover:font-bold">
						Mock Stock
					</Link>
					<Link href="/events/mockipl" className="hover:font-bold">
						Mock IPL Auction
					</Link>
					<Link href="/events/dizmart" className="hover:font-bold">
						Dizmart
					</Link>
					<Link href="/events/hacknpitch" className="hover:font-bold">
						Hack n Pitch
					</Link>
					<Link href="/events/inspiratalks" className="hover:font-bold">
						Inspira Talks
					</Link>
				</nav>
			</div>
			<div className="w-full flex lg:hidden justify-end">
				<button onClick={openSidebar} className="m-6 mb-0">
					<FaBars />
				</button>
				<div className="fixed z-50 bg-[#fcbf49] h-screen w-0 p-0 transition-all duration-300" ref={sidebarRef}>
					<div className="w-full flex justify-end text-2xl text-[#101720]" onClick={closeSidebar}>
						<FaX />
					</div>
					<div className="flex flex-col gap-y-6 mt-4 text-[#101720] font-medium">
						<Link href="/events/launchx">LaunchX</Link>
						<Link href="/events/corporateclash">Corporate Clash</Link>
						<Link href="/events/mockstock">Mock Stock</Link>
						<Link href="/events/mockipl">Mock IPL Auction</Link>
						<Link href="/events/dizmart">Diz Mart</Link>
						<Link href="/events/hacknpitch">Hack n Pitch</Link>
						<Link href="/events/inspiratalks">Inspira Talks</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default EventsNavbar;
