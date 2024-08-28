import Navbar from "@/components/Homepage/Navbar/Navbar";
import Hero from "@/components/Homepage/Hero/Hero";
import About from "@/components/Homepage/About/About";
import Events from "@/components/Homepage/Events/Events";
import Speakers from "@/components/Homepage/Speakers/Speakers";
import Gallery from "@/components/Homepage/Gallery/Gallery";
import Partners from "@/components/Homepage/Partners/Partners";
import Footer from "@/components/Homepage/Footer/Footer";


export default function Home() {
  return (
    
    <div>

    <Navbar/>  
    {/* <Hero/> */}
    <About/>
    <Events/>
    <Speakers/>
    <Gallery/>
    <Partners/>
    <Footer/>

    </div>
    
  );
}
