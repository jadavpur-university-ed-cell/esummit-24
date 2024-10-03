import React from 'react'
import Link from 'next/link';
import Footer from '@/components/Homepage/Footer/Footer';
import Image from 'next/image';

const events: EventDetails[] = [
  {
    category: "Pitching",
    title: "LaunchX",
    image: "/event-logos/LaunchX.png",
    link: "/events/launchx" 
  },
  {
    category: "Product Marketing & Labelling",
    title: "Dizmart",
    image: "/event-logos/Dizmart.png",
    link: "/events/dizmart" 
  },
  {
    category: "Hackathon",
    title: "Hack<N>Pitch",
    image: "/event-logos/HackNPitch.png",
    link: "/events/hacknpitch" 
  },
  {
    category: "Case Study",
    title: "Corporate Clash",
    image: "/event-logos/CorporateClash.png",
    link: "/events/corporateclash" 
  },
  {
    category: "Mock Trading",
    title: "Mock Stock 3.0",
    image: "/event-logos/MockStock.png",
    link: "/events/mockstock" 
  },
  {
    category: "Fantasy Gaming",
    title: "Mock IPL Auction",
    image: "/event-logos/MockIPL.png",
    link: "/events/mockipl" 
  }
];

interface EventDetails {
  category: string;
  title: string;
  image: string;
  link: string;
}
const EventItems: React.FC<EventDetails> = ({ category, title, image, link }) => (
  <div className="p-4 lg:w-1/3">
    <div className="h-full bg-gray-700 bg-opacity-50 px-8 py-10 rounded-xl overflow-hidden text-center relative transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
      <Image src={image} alt={title} width={300} height={300} className='w-full aspect-video object-contain'/>
      <h2 className="tracking-widest text-base title-font font-extralight text-[#f77f00] mb-1">{category}</h2>
      <h1 className="title-font sm:text-2xl text-xl font-extrabold text-gray-100 mb-3">{title}</h1>
      <Link href={link} passHref className='text-yellow-400 inline-flex items-center'>
        <h3>View</h3>
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
      </Link>
    </div>
  </div>
);

const Events:React.FC = () => { 
  return (
    <>
    <div className="bg-[#101720] flex justify-center p-8 items-center">
    <h1 className="text-4xl text-[#fcbf49] font-bold">Events</h1>
    </div>
    <section className="text-gray-400 bg-[#101720]">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {events.map((event, index) => (
            <EventItems key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}
export default Events