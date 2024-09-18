import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../MagicButton";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerate } from "../TextGenerate";
import Image from "next/image";
import Footer from "../Footer";
import AlertText from "../AlertText";
import Locations from "../locations";
// import { Logo_Glow } from "@/public/svg_pers";

const ComingSoon = () => {
  return (
    <>
    <div className="bg-[#101720] bg-grid-white/[0.03]  md:bg-grid-large-white/[0.03] text-white h-screen w-screen py-4 overflow-hidden sm:overflow-auto relative">
      <Spotlight
        className="top-14 left-0 sm:left-20 md:left-40 lg:left-60 lg:-top-20 hidden md:block"
        fill="white"
      />
      <Spotlight
        className="top-8 left-0 sm:left-40 md:left-60 lg:left-80 lg:-top-40 hidden md:block"
        fill="white"
      />
      <div className="flex flex-col items-center justify-around gap-0 h-full overflow-hidden">

        <AlertText/>
        <p className="text-center md:tracking-wider mb-0 sm:mb-4 lg:mb-0 sm:text-sm md:text-lg lg:text-xl w-4/5 lg:w-full">
            Jadavpur University Entrepreneurship Cell Presents the Fourth Edition of Our Flagship Event
        </p>
        <Image src="/svg_pers/E-Summit_Logo_Glow.png" alt='e-summit-logo' height={275} width={350} className="hidden sm:flex"/>
        <Image
					className="object-cover w-[250px] h-[125px] sm:w-[300px] lg:h-[165px] my-2 sm:my-0 sm:hidden"
					src="/svg_pers/E-Summit_Logo_Glow.png"
					alt="logo"
          width={250}
          height={125}
				/>
        <TextGenerate words="Coming Soon" className="text-center text-2xl sm:text-3xl my-2 md:text-4xl" />
        <a href="mailto:ecell@jadavpuruniversity.in">
            <MagicButton
              title="Sponsor Us"
              icon={<FaLocationArrow />}
              position="right"
            />
        </a>
        {/* <Locations/> */}
        <Footer/>
      </div>  
    </div>
    </>
  );
};

export default ComingSoon;
