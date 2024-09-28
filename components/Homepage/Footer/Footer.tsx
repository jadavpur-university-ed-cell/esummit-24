import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
	return (
		<section className="bg-[#040411] flex flex-col">
			<div
				id="contact"
				className="p-16 flex flex-col gap-y-20 items-center w-full min-h-[70vh]">
				<div className="w-full flex justify-center">
					<h1 className="animated-title text-[#fcbf49] font-bold text-5xl md:text-7xl">
						Contact Us
					</h1>
				</div>
				<div className="flex flex-col md:flex-row md:justify-around md:items-center w-4/5 h-full">
					<div>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1411398944997!2d88.36883737468527!3d22.498887135669126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271237f28abe9%3A0xd047bab0c8bfb11c!2sJadavpur%20University!5e0!3m2!1sen!2sin!4v1723960607696!5m2!1sen!2sin"
							// width="450"
							// height="250"
							referrerPolicy="no-referrer-when-downgrade"
							className="rounded-md w-full lg:w-[450px] lg:h-[250px]"></iframe>
					</div>
					<div className="flex justify-center w-full h-full">
						<div className="flex flex-col justify-center h-full w-full sm:w-2/3 gap-y-12">
							<div className="text-[#eae2b7] flex flex-col gap-y-4 pt-8">
								<h4 className="text-3xl font-semibold text-[#fcbf49]">
									Address
								</h4>
								<p>
									<span className="underline underline-offset-2">
										Jadavpur Campus:
									</span>
									<span>
										{" "}
										188, Raja Subodh Chandra Mallick Rd, Jadavpur, Kolkata, West
										Bengal 700032
									</span>
								</p>
								<p>
									<span className="underline underline-offset-2">
										Saltlake Campus:
									</span>
									<span>
										{" "}
										Plot No.8, B-73-80, Salt Lake Bypass, LB Block, Sector 3,
										Bidhannagar, Kolkata, West Bengal 700098
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <footer className="flex flex-col">
				<div className="min-h-[40vh] flex flex-col md:flex-row md:items-center px-12 pt-12 w-full">
					<div className="flex flex-col items-center w-full">
						<Image
							src="esummit-2024-printable.svg"
							alt="E-Summit 2024"
							width={250}
							height={145}
							className="object-cover h-[150px] w-[70vw] sm:h-[145px] sm:w-[250px]"
						/>
					</div>
					<div className="h-full w-full justify-center items-end hidden sm:flex">
						<nav className="flex flex-col h-3/4 gap-y-4 text-[#eae2b7] text-3xl text-center">
							<Link href="#home" className="hover:text-[#fcbf49]">
								Home
							</Link>
							<Link href="#about" className="hover:text-[#fcbf49]">
								About Us
							</Link>
							<Link href="#events" className="hover:text-[#fcbf49]">
								Events
							</Link>
							<Link href="#contacts" className="hover:text-[#fcbf49]">
								Contact Us
							</Link>
						</nav>
					</div>
					<div className="w-full flex flex-col items-center">
						<Image
							src="/svg_pers/ecell.png"
							alt="E-Cell JU"
							width={200}
							height={200}
						/>
						<nav className="flex justify-around w-2/5 text-[#eae2b7] text-4xl mb-4">
							<Link href="" className="hover:text-[#fcbf49]">
								<FaInstagram />
							</Link>
							<Link href="" className="hover:text-[#fcbf49]">
								<FaFacebook />
							</Link>
							<Link href="" className="hover:text-[#fcbf49]">
								<FaLinkedinIn />
							</Link>
						</nav>
					</div>
				</div>
				<div className="flex justify-center w-full mt-1 mb-6">
					<p className="text-[#eae2b7] border-t text-center w-3/4 sm:w-2/5 py-2 text-xl sm:text-3xl">
						&copy; Jadavpur University Entrepreneurship Cell. All rights
						reserved.
					</p>
				</div>
			</footer> */}

			<footer className="p-8 grid grid-cols-2 md:grid-cols-5 items-center justify-items-center">
				<Image
					src="esummit-2024-printable.svg"
					alt="E-Summit'24 Logo"
					height={100}
					width={175}
					className="object-cover aspect-video w-[140px] h-[80px] md:w-[175px] md:h-[100px]"
				/>
				<Image
					src="/svg_pers/ecell.png"
					alt="E-Cell JU Logo"
					height={100}
					width={175}
				/>
				<h2 className="text-3xl text-[#fcbf49]">Our Address</h2>
				<h2 className="text-3xl text-[#fcbf49]">Email</h2>
				<p className="hidden md:block col-span-2 text-2xl text-[#eae2b7] text-center ml-16 justify-self-start">
					The flagship event of E-Cell, Jadavpur University
				</p>
				<p className="text-[#eae2b7] text-2xl">
					188, Raja Subodh Chandra Mallick Rd,
					Jadavpur, Kolkata,
					West Bengal 700032

				</p>
				<p className="text-[#eae2b7] md:self-start text-2xl">ecell@jadavpuruniversity.in</p>
				<p className="col-span-2 md:col-span-4 text-[#eae2b7] text-center md:justify-self-start md:ml-16 text-xl md:text-2xl my-8 md:my-16">
					&copy; 2024 Jadavpur University Entrepreneurship Cell. All Rights
					Reserved.
				</p>
				<div className="w-full md:w-1/2 col-span-2 md:col-span-1 flex justify-center gap-x-4 md:justify-around text-2xl md:text-3xl text-[#eae2b7] md:my-16">
					<Link href="" className="hover:text-[#fcbf49]">
						<FaInstagram />
					</Link>
					<Link href="" className="hover:text-[#fcbf49]">
						<FaFacebook />
					</Link>
					<Link href="" className="hover:text-[#fcbf49]">
						<FaLinkedinIn />
					</Link>
				</div>
			</footer>
		</section>
	);
}

export default Footer;
