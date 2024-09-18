"use client";
import { FaInstagram, FaFacebook, FaLinkedin, FaHeart } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
   
   
   
   export default function Footer() {
    return (
      <section id="footer" className="flex flex-col  justify-start w-screen items-center bg-inherit">

        <Image
					className="object-cover w-[200px] h-[100px] sm:w-[250px] sm:h-[85px] mt-3 sm:mt-0"
					src="/svg_pers/ecell.png"
					alt="logo"
          width={150}
          height={75}
				/>
   
        <div className="flex sm:flex-row flex-col gap-3 sm:gap-0 sm:justify-between rounded-2xl shadow bg-gray-800 min-w-[95vw] p-2 max-w-[90vw] sm:max-w-[100vw]">

          <div className="w-full mx-auto max-w-screen-xl  flex items-center justify-center sm:justify-between">
            <span className="text-sm lg:text-base text-center text-gray-400">&copy; 2024
              <a href="https://juecell.com/" target="blank" className="hover:underline"> Jadavpur University Entrepreneurship Cell</a>
            . All Rights Reserved.
            </span>
          </div>
        
          <div className="text-gray-400 grid grid-cols-4 gap-6 mx-auto sm:mr-3 items-center">

            <Link href="https://www.linkedin.com/school/juecell" target="blank" className="flex items-center">
              <FaLinkedin className="footer-icons text-xs sm:text-xl transition-colors duration-150 ease-in-out hover:text-blue-700"/>
            </Link>

            <Link href="https://www.facebook.com/juecell" target="blank" className="flex items-center">
              <FaFacebook className="footer-icons text-xs sm:text-xl transition-colors duration-150 ease-in-out hover:text-blue-400" />
            </Link>

            <Link href="https://www.instagram.com/juecell/" target="blank" className="flex items-center">
              <FaInstagram className="footer-icons text-xs sm:text-xl transition-colors duration-150 ease-in-out hover:text-rose-500"/>
            </Link>

            <Link href="https://twitter.com/ju_ecell" target="blank" className="flex items-center">
              <BsTwitterX className="footer-icons text-xs sm:text-xl  transition-colors duration-150 ease-in-out hover:text-white" />
            </Link>
          </div>
        </div>
    </section>
    )
  }