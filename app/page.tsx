import Navbar from "@/components/Homepage/Navbar/Navbar";
import Hero from "@/components/Homepage/Hero/Root";
import About from "@/components/Homepage/About/About";
import Events from "@/components/Homepage/Events/Events";
import EventTimeline from "@/components/Homepage/Timeline/Timeline";
import Speakers from "@/components/Homepage/Speakers/Speakers";
import Gallery from "@/components/Homepage/Gallery/Gallery";
import Partners from "@/components/Homepage/Partners/Partners";
import Footer from "@/components/Homepage/Footer/Footer";
import PreFooter from "@/components/PreFooter";
import { currentUser } from "@/lib/auth";
import Background from "@/components/Homepage/Background/Background";

export default async function Home() {
  const user = await currentUser();
  return (
    <div>
      {user ? (
        <Navbar button="Profile" url="/profile" />
      ) : (
        <Navbar button="Login" url="/sign-in" />
      )}
      <Background />
      <Hero />
      <About />
      <Events />
      <EventTimeline />
      <Speakers />
      <Gallery />
      <Partners />
      <PreFooter />
      <Footer />
    </div>
  );
}
