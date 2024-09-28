"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
    //const { data: session, status } = useSession();
    //const router = useRouter();

    return (
        <div>
            <div className="w-full h-16 gap-x-6 flex items-center justify-center text-gray-100">
                <Link href="/" className="text-md font-semibold hover:text-gray-300">Home</Link>
                <Link href="/profile" className="text-md font-semibold hover:text-gray-300">Profile</Link>
                <Link href="/role" className="text-md font-semibold hover:text-gray-300">Role</Link>
                <Link href="/sign-in" className="text-md font-semibold hover:text-gray-300">Sign In</Link>
                <Link href="/sign-up" className="text-md font-semibold hover:text-gray-300">Sign Up</Link>
            </div>
        </div>
    );
}
 
export default Header;