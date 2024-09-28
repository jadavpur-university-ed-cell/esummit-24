import Image from "next/image";

export default function Example() {
    return (
      <>
        <div className="h-screen w-full pt-16 pb-12 flex flex-col items-center bg-[#101720]">
          <main className="flex-grow flex flex-col justify-center max-w-7xl w-full px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 flex justify-center">
              <a href="/" className="inline-flex">
                <span className="sr-only">Workflow</span>
                <Image
                  className="w-[50vw] md:h-[30vh] md:w-[30vw] md:object-cover"
                  src="/esummit-2024-printable.svg"
                  alt="E-Summit'24 Logo"
                  width={400}
                  height={400}
                />
              </a>
            </div>
            <div className="py-16">
              <div className="text-center">
                <p className="text-sm font-semibold text-[#d62828] uppercase tracking-wide">404 error</p>
                <h1 className="mt-2 text-4xl font-extrabold text-[#d62828] tracking-tight sm:text-5xl">Page not found.</h1>
                <p className="mt-2 text-base text-[#eae2b7]">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
                <div className="mt-6">
                  <a href="/" className="text-base font-medium text-[#fcbf49] hover:text-[#fcbf49aa]">
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </main>
          <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-center space-x-4 text-[#eae2b7]">
              <a href="https://www.instagram.com/juecell/?hl=en" className="text-sm font-medium hover:text-[#fcbf49]">
                Instagram
              </a>
              <span className="inline-block border-l border-gray-300" aria-hidden="true" />
              <a href="https://www.facebook.com/juecell/" className="text-sm font-medium hover:text-[#fcbf49]">
                Facebook
              </a>
              <span className="inline-block border-l border-gray-300" aria-hidden="true" />
              <a href="https://www.linkedin.com/school/juecell/" className="text-sm font-medium hover:text-[#fcbf49]">
                LinkedIn
              </a>
            </nav>
          </footer>
        </div>
      </>
    )
  }
  