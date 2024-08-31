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
    <div className="px-0 h-screen">
      <div className="flex flex-col items-center gap-0">
        <AlertText/>
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            JU E-Cell Presents the Fourth Edition of Our Flagship Event
        </p>
        <Image src="/svg_pers/E-Summit_Logo_Glow.png" alt='' height={500} width={300}/>
        <TextGenerate words="Coming Soon" className="text-center text-[60px] md:text-5xl lg:text-5xl" />
        <a href="mailto:ecell@jadavpuruniversity.in">
            <MagicButton
              title="Sponsor Us"
              icon={<FaLocationArrow />}
              position="right"
            />
        </a>
        <Image src='/svg_pers/ecell.png' alt='' height={150} width={200} className="object-cover"/>
      </div>  
      <Footer/> 
    </div>
    </>
  );
};

export default ComingSoon;
