import Link from "next/link";
// import { FaGoogle } from "react-icons/fa6";

interface CardWrapperProps {
    children: React.ReactNode,
    title: string,
    displaySocials?: boolean,
    footerLabel?: string,
    footerLink?: string,
    footerLinkText?: string
}

const CardWrapper: React.FC<CardWrapperProps> = ({
    children,
    title,
    displaySocials,
    footerLabel,
    footerLink,
    footerLinkText
}) => {
    return (
        <div className="min-h-full flex">
          <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
                {/* esummit logo here */}
                <h2 className="mt-6 text-3xl font-bold text-[#EAE2B7]">{title}</h2>
              </div>
            {children}
            <div>
                {footerLabel &&
                    <p className="text-gray-200 mt-3">
                        {footerLabel}
                    </p>
                }
                {footerLink &&
                    <Link href={footerLink}>
                        <p className="text-gray-200 mt-3 hover:text-[#F77F00]">
                            {footerLinkText}
                        </p>
                    </Link>
                }
            </div>
        </div>
        </div>
         <div className="hidden lg:block relative w-0 flex-1">
         {/*adding image later <img
           className="absolute inset-0 h-full w-full object-cover"
           src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
           alt=""
         /> */}
       </div>
       </div>
    );
}
 
export default CardWrapper;