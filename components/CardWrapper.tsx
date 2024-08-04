import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";

interface CardWrapperProps {
    children: React.ReactNode,
    title: string,
    displaySocials?: boolean,
    footerLabel?: string,
    footerLink?: string
}

const CardWrapper: React.FC<CardWrapperProps> = ({
    children,
    title,
    displaySocials,
    footerLabel,
    footerLink
}) => {
    return (
        <div className="bg-white rounded-lg shadow">
            <div>
                <h1 className="text-3xl font-bold">{title}</h1>
            </div>
            {children}
            <div>
                {displaySocials &&
                    <div className="text-2xl font-bold">
                        <button>
                            <FaGoogle />
                            Login with Google
                        </button>
                    </div>
                }
            </div>
            <div>
                {footerLabel &&
                    <p className="text-gray-500 mt-3">
                        {footerLabel}
                    </p>
                }
                {footerLink &&
                    <Link href={footerLink}>
                        <p className="text-gray-500 mt-3">
                            {footerLink}
                        </p>
                    </Link>
                }
            </div>
        </div>
    );
}
 
export default CardWrapper;