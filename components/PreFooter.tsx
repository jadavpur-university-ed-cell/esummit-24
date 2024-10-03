import Link from "next/link";
import Image from "next/image"; 
   export default function PreFooter() {
    return (
      <main className="mt-1 mx-auto max-w-7xl px-4 sm:mt-8 min-h-[55vh]">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-bold text-[#eae2b7] sm:text-5xl md:text-6xl">
              <span className="block xl:inline">6 Events.</span>{' '}
              <span className="block text-[#f77f00] xl:inline">3 Days.</span>{' '}
              <span className="block text-[#fcbf49] xl:inline">2 Venues</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-[#eae2b7] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              A 3-day entrepreneurial event awaits at the centre of Kolkata!
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-xl shadow">
                <Link
                  href="https://maps.app.goo.gl/QNHBBPYsk6dDgycz6" target="blank"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-gray-100 bg-[#f77f00] hover:bg-[#fcbf49] hover:text-[#101720] md:py-4 md:text-lg md:px-10"
                >
                  Venue
                </Link>
              </div>
              <div className="mt-3 rounded-xl shadow sm:mt-0 sm:ml-3">
                <Link
                  href="https://maps.app.goo.gl/JqL6uRJngAFemuha9" target="blank"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-[#101720] bg-[#fcbf49] hover:bg-[#f77f00] hover:text-gray-100 md:py-4 md:text-lg md:px-10"
                >
                  Hackathon Venue
                </Link>
              </div>
            </div>
            <span className="flex flex-col sm:flex-row justify-center min-h-2 text-white md:text-lg gap-x-16">
            <div className="w-full sm:w-fit flex justify-center">
            <Image
                src="/svg_pers/ecell.png"
                alt="E-Cell JU Logo"
                height={500}
                width={500}
                className="object-cover aspect-video w-[125px] h-[70px] md:w-[175px] md:h-[100px]"
                />
                </div>
             <h1 className="text-4xl font-extralight"><br/>IDEATE | INNOVATE | BUILD</h1>
           </span>
          </div>
        </main>
    )
  }