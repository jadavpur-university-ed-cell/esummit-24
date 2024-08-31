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
    <div className="h-screen">
      <div className="flex flex-col items-center gap-0">
        <AlertText/>
        <p className="text-center md:tracking-wider mb-0 sm:mb-4 text-sm md:text-lg lg:text-2xl">
            JU E-Cell Presents the Fourth Edition of Our Flagship Event
        </p>
        <Image src="/svg_pers/E-Summit_Logo_Glow.png" alt='' height={500} width={300}/>
        <TextGenerate words="Coming Soon" className="text-center text-3xl md:text-4xl lg:text-5xl" />
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
