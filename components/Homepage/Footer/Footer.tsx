import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const navigation = {
  Explore: [
    { name: "Events", href: "/events" },
    { name: "Merchandise", href: "/merchandise" },
    { name: "Team", href: "/team" },
  ],
  Help: [
    { name: "Brochure", href: "/E-SUMMIT_2024_Brochure.pdf" },
    { name: "Privacy", href: "/E-Cell_Privacy_Policy.pdf" },
  ],
  Contact: [
    { name: "Debamita", href: "wa.me/919163918118" },
    { name: "Sparsh", href: "wa.me/918100555567" },
  ],
  Contact2: [
    { name: "Piyush", href: "wa.me/917439484942" },
    { name: "Jotiraditya", href: "wa.me/916289867756" },
  ],
};

export default function Footer() {
  return (
    <>
      <footer
        className="bg-gray-800 z-50"
        id="footer"
        aria-labelledby="footer-heading"
      >
        <div className="max-w-full mx-auto py-12 px-2 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="xl:col-span-1">
              <Link href="/">
                <Image
                  src="/esummit-2024-printable.svg"
                  alt="E-Summit 2024"
                  width={40}
                  height={20}
                  className="object-cover sm:h-[145px] sm:w-[250px]"
                />
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-[#f77f00] tracking-wider uppercase">
                    Explore
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.Explore.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-lg text-[#eae2b7] hover:text-[#fcbf49]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-[#f77f00] tracking-wider uppercase">
                    Help
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.Help.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-lg text-[#eae2b7] hover:text-[#fcbf49]"
                          download
                          target="blank"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-[#f77f00] tracking-wider uppercase">
                    Contact
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.Contact.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-lg text-[#eae2b7] hover:text-[#fcbf49]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    &nbsp;
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.Contact2.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-lg text-[#eae2b7] hover:text-[#fcbf49]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-15xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <nav className="flex justify-center text-[#eae2b7] space-x-6 md:order-2">
              <Link
                href="https://www.linkedin.com/school/juecell"
                target="blank"
                className="flex items-center"
              >
                <FaLinkedin className="footer-icons text-xl sm:text-xl transition-colors duration-150 ease-in-out hover:text-blue-700" />
              </Link>

              <Link
                href="https://www.facebook.com/juecell"
                target="blank"
                className="flex items-center"
              >
                <FaFacebook className="footer-icons text-xl sm:text-xl transition-colors duration-150 ease-in-out hover:text-blue-400" />
              </Link>

              <Link
                href="https://www.instagram.com/juecell/"
                target="blank"
                className="flex items-center"
              >
                <FaInstagram className="footer-icons text-xl sm:text-xl transition-colors duration-150 ease-in-out hover:text-rose-500" />
              </Link>

              <Link
                href="https://twitter.com/ju_ecell"
                target="blank"
                className="flex items-center"
              >
                <BsTwitterX className="footer-icons text-xl sm:text-xl  transition-colors duration-150 ease-in-out hover:text-white" />
              </Link>
            </nav>
            <div className="mt-1 md:mt-0 md:order-1">
              <p className="text-center text-xl text-[#eae2b7]">
                &copy; 2024{" "}
                <Link href="www.juecell.com">
                  Jadavpur University Entrepreneurship Cell
                </Link>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
