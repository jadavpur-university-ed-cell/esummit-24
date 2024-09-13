import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../MagicButton";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerate } from "../TextGenerate";
import Image from "next/image";
import Footer from "../Footer";
import AlertText from "../AlertText";
// import { Logo_Glow } from "@/public/svg_pers";

const ComingSoon = () => {
  return (
    <>
    <div className="h-screen bg-[#101720] bg-grid-white/[0.05]  md:bg-grid-large-white/[0.05] text-white">
      <Spotlight
        className="-top-0 left-0 sm:left-20 md:left-40 lg:left-60 lg:-top-20"
        fill="white"
      />
      <Spotlight
        className="-top-8 left-0 sm:left-40 md:left-60 lg:left-80 lg:-top-40"
        fill="white"
      />
      <div className="flex flex-col items-center gap-0">

        <AlertText/>
        <p className="text-center md:tracking-wider mb-0 sm:mb-4 text-xs sm:text-sm md:text-lg lg:text-2xl">
            JU E-Cell Presents the Fourth Edition of Our Flagship Event
        </p>
        <Image src="/svg_pers/E-Summit_Logo_Glow.png" alt='' height={500} width={300} className="hidden sm:flex"/>
        <img
					className="object-cover w-[250px] h-[125px] sm:w-[300px] lg:h-[165px] my-3 sm:my-0 sm:hidden"
					src="/svg_pers/E-Summit_Logo_Glow.png"
					alt="logo"
				/>
        <TextGenerate words="Coming Soon" className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
        <a href="mailto:ecell@jadavpuruniversity.in">
            <MagicButton
              title="Sponsor Us"
              icon={<FaLocationArrow />}
              position="right"
            />
        </a>
        <Footer/>
      </div>  
    </div>
    </>
  );
};

export default ComingSoon;
