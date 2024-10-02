import Event from "@/components/EventRegistration/main";
import { auth } from "@/auth";
import userVerify from "@/app/events/userVerify";
import { redirect } from "next/navigation";
import Image from "next/image";
export default async function EventRegistration({
	params,
}: {
	params: { eventName: string };
}) {
	const userVerified: boolean = await userVerify();
	if (userVerified) {
		let res = await auth();
		return (
			<div className="flex items-center justify-center bg-[#101720] min-w-full min-h-screen overflow-hidden">
              <div className="bg-gray-700 bg-opacity-40 px-1 pt-2 rounded-2xl overflow-hidden text-lg py-1 justify-items-center">
             {/* @ts-ignore */}
             <Event params={params} email={res?.user.email} />
			 <div className="flex items-center justify-center h-full">
              <Image
                src="/svg_pers/ecell.png"
                alt="E-Cell JU Logo"
                height={800}
                width={800}
                className="object-cover aspect-video w-[125px] h-[70px] md:w-[175px] md:h-[100px]"
              />
              </div>
			 </div>
           </div>
		);
	} else {
		redirect("/sign-in");
	}
}
