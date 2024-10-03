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
    { name: "For Sponsors", href: "/E-SUMMIT_2024_Brochure.pdf" },
    { name: "Privacy", href: "/E-Cell_Privacy_Policy.pdf" },
  ],
  Contact: [
    { name: "Debamita", href: "https://api.whatsapp.com/send/?phone=919163918118&text&type=phone_number&app_absent=0" },
    { name: "Sparsh", href: "https://api.whatsapp.com/send/?phone=918100555567&text&type=phone_number&app_absent=0" },
  ],
  Contact2: [
    { name: "Piyush", href: "https://api.whatsapp.com/send/?phone=917439484942&text&type=phone_number&app_absent=0" },
    { name: "Jotiraditya", href: "https://api.whatsapp.com/send/?phone=916289867756&text&type=phone_number&app_absent=0" },
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
        <div className="max-w-full mx-auto py-12 px-2 sm:px-6 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="xl:col-span-1 w-full flex justify-center">
              <Link href="/">
                <Image
                  src="/esummit-2024-printable.svg"
                  alt="E-Summit 2024"
                  width={40}
                  height={20}
                  className="object-cover sm:h-[145px] w-[250px]"
                />
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2 justify-items-center sm:justify-items-stretch">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-[14px] font-semibold text-[#f77f00] tracking-wider uppercase">
                    Explore
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.Explore.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-[16px] text-[#eae2b7] hover:text-[#fcbf49]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-[14px] font-semibold text-[#f77f00] tracking-wider uppercase">
                    Help
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.Help.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-[16px] text-[#eae2b7] hover:text-[#fcbf49]"
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
                  <h3 className="text-[14px] font-semibold text-[#f77f00] tracking-wider uppercase">
                    Contact
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.Contact.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-[16px] text-[#eae2b7] hover:text-[#fcbf49]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-[14px] font-semibold text-gray-400 tracking-wider uppercase">
                    &nbsp;
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.Contact2.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-[16px] text-[#eae2b7] hover:text-[#fcbf49]"
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
          <div className="max-w-15xl mx-auto py-[4vh] px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <nav className="flex justify-center text-[#eae2b7] space-x-6 md:order-2 mb-4 sm:mb-0">
              <Link
                href="https://www.linkedin.com/school/juecell"
                target="blank"
                className="flex items-center"
              >
                <FaLinkedin className="footer-icons text-[16px] sm:text-[16px] transition-colors duration-150 ease-in-out hover:text-blue-700" />
              </Link>

              <Link
                href="https://www.facebook.com/juecell"
                target="blank"
                className="flex items-center"
              >
                <FaFacebook className="footer-icons text-[16px] sm:text-[16px] transition-colors duration-150 ease-in-out hover:text-blue-400" />
              </Link>

              <Link
                href="https://www.instagram.com/juecell/"
                target="blank"
                className="flex items-center"
              >
                <FaInstagram className="footer-icons text-[16px] sm:text-[16px] transition-colors duration-150 ease-in-out hover:text-rose-500" />
              </Link>

              <Link
                href="https://twitter.com/ju_ecell"
                target="blank"
                className="flex items-center"
              >
                <BsTwitterX className="footer-icons text-[16px] sm:text-[16px]  transition-colors duration-150 ease-in-out hover:text-white" />
              </Link>
            </nav>
            <div className="mt-1 md:mt-0 md:order-1">
              <p className="text-center text-[16px] text-[#eae2b7]">
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
