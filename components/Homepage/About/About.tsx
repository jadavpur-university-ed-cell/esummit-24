import { FunctionComponent } from "react";


const About: FunctionComponent = () => {
  return (
    <section id="about" className=" bg-[#101720] min-h-screen flex flex-col justify-center font-[Poppins] text-white">

    <div className="flex flex-col items-center min-h-[90vh] justify-center p-7 mx-5 rounded-3xl border-white  border-2">
      <h1 className="text-5xl sm:text-7xl text-[#fcbf49] mb-12 sm:pt-8 sm:mt-4 ">About us</h1>
      <div className="sm:grid flex flex-col sm:grid-cols-2 justify-center items-center md:items-start gap-12 my-auto">
        <img
					className="object-cover w-[70vw] sm:w-[480px] rounded-3xl md:h-[272px] md:w-[528px] md:rounded-[40px] border-[0.5px]"
					src="/svg_pers/E-Summit_Logo_Glow.png"
					alt="logo"
				/>
        <div className="flex flex-col md:w-[40vw] items-center justify-center gap-8 mb-auto sm:text-4xl text-3xl sm:p-4 p-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rem aliquam id cum vero, distinctio laboriosam dolorem neque reiciendis laudantium! Delectus corporis, vel laboriosam veritatis eos id? Odit, dolorem exercitationem!
          </p>
          
          <div className="bg-[#fcbf49] h-[6rem] w-[6rem] flex justify-center items-center rounded-full ml-auto">
            <img
            className="object-contain z-2"
            loading="lazy"
            alt=""
            src="/arrow-1.svg"
            />
          </div>
         </div> 
      </div>
    </div>
    
  </section>

    // <div className="main-layout">
    //   <footer className="main-layout-child" />
    //   <div className="about-us-wrapper">
    //     <h1 className="about-us">About us</h1>
    //   </div>
    //   <FrameComponent />
    // </div>
  );
};

export default About;