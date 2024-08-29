import Image from "next/image";
import { FunctionComponent } from "react";

const Hero: FunctionComponent = () => {
  return (
    <>
    <section id="hero">
      <div className="h-[80vh] lg:h-screen bg-[#101720] relative">
        <Image alt="hero" src="/hero-vector.svg" fill/>
      </div>
    </section>
    </>
  );
};

export default Hero;