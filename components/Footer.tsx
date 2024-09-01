"use client";
import { FaInstagram, FaFacebook, FaLinkedin, FaHeart } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
   
   
   
   export default function Footer() {
    return (
      <section id="footer" className="flex flex-col  justify-start w-screen items-center bg-inherit">
        
        <img
					className="object-cover w-[200px] h-[100px] sm:w-[350px] sm:h-[125px] mt-3 sm:mt-0"
					src="/svg_pers/ecell.png"
					alt="logo"
				/>
   
        <div className="flex sm:flex-row flex-col gap-1 sm:gap-0 sm:justify-between rounded-lg shadow mb-4 bg-gray-800 min-w-[95vw] p-1 max-w-[90vw] sm:max-w-[100vw]">

          <div className="w-full mx-auto max-w-screen-xl  flex items-center justify-center sm:justify-between">
            <span className="sm:text-sm text-xs text-center text-gray-400">© 2024
              <a href="https://juecell.in/" className="hover:underline"> Jadavpur University Entrepreneurship Cell</a>
            . All Rights Reserved.
            </span>
          </div>
        
          <div className="text-gray-400 grid grid-cols-4 gap-3 mx-auto sm:mr-3">

            <Link href="https://www.linkedin.com/school/juecell" target="blank">
              <FaLinkedin className="footer-icons text-xs sm:text-lg transition-colors duration-150 ease-in-out hover:text-black"/>
            </Link>


            <Link href="https://www.facebook.com/juecell" target="blank">
              <FaFacebook className="footer-icons text-xs sm:text-lg transition-colors duration-150 ease-in-out hover:text-black" />
            </Link>

            <Link href="https://www.instagram.com/ju/" target="blank">
              <FaInstagram className="footer-icons text-xs sm:text-lg absolute transition-colors duration-150 ease-in-out hover:text-black"/>
            </Link>

            <Link href="https://twitter.com/ju_ecell" target="blank">
              <BsTwitterX className="footer-icons text-xs sm:text-lg  transition-colors duration-150 ease-in-out hover:text-black" />
            </Link>
          </div>
        </div>
    </section>
    )
  }