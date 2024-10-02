import Image from "next/image";
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
        <div className="h-full w-full flex justify-between items-center">
          <div className="flex-1 flex flex-col justify-center items-center sm:px-6 lg:px-20 xl:px-24">
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
         <div className="hidden lg:flex h-screen w-[50vw]">
         <Image
           className="h-full w-full object-cover rounded-sm"
           src="/login.png"
           alt=""
           width={512}
           height={512}
         />
       </div>
       </div>
    );
}
 
export default CardWrapper;