import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

const About: FunctionComponent = () => {
  return (
    <section
      id="about"
      className=" w-full min-h-screen flex flex-col  justify-center text-white z-10"
    >
      <div className="flex flex-col items-center min-h-[80vh] sm:min-h-screen justify-around px-8 z-10">
        <h1 className="text-5xl sm:text-7xl text-[#fcbf49] my-6 p-6 sm:my-0 sm:p-0 sm:pt-8 sm:mt-4 font-bold">
          About us
        </h1>
        <div className="sm:grid flex flex-col sm:grid-cols-2 justify-center items-center justify-items-center my-auto px-6 ">
          <Image
            className="w-full sm:w-[480px] md:h-[65vh] md:w-[45vw] object-cover rounded-2xl"
            src="/about-bg.png"
            alt="logo"
            width={528}
            height={272}
          />
          <div className="flex flex-col md:w-full h-full items-center mb-auto sm:text-3xl text-2xl text-center sm:text-start sm:p-4 p-8">
            <p className="flex flex-col gap-y-6 leading-10 text-[#eae2b7]">
              <span>
                Established in 1955, Jadavpur University, Kolkata has grown from
                a state university to be the pride of the East.
              </span>
              <span>
                Jadavpur University is at present an internationally recognized
                premier university of the country and it has been accorded the
                highest grading and rated as a &quot;Five Star University&quot;
                in India by the National Assessment and Accreditation Council
                (NAAC).
              </span>
              <span>
                The Faculty of Engineering and Technology (FET) is consistently
                ranked as one of the best by various agencies of National and
                International repute. This year Jadavpur University achieved a
                rank of 136 in Asia by the QS World Ranking and ranked 1 in
                State universities in and across India.
              </span>
            </p>

            <Link
              className="bg-[#fcbf49] h-12 w-12 sm:h-16 sm:w-16 flex justify-center items-center rounded-full sm:ml-auto mt-6"
              href="https://jadavpuruniversity.in/"
              target="_blank"
            >
              <Image
                className="object-contain z-2"
                loading="lazy"
                alt=""
                src="/arrow-1.svg"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
