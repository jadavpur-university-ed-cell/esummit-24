"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    imgsrc:string;
    title: string;
    // description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-8 w-[100%] py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item.link}
          target="_blank"
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-700/[.9] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <Cardimage>{item.imgsrc}</Cardimage>
            <CardTitle>{item.title}</CardTitle>
            {/* <CardDescription>{item.description}</CardDescription> */}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-3xl h-full w-full p-4 overflow-hidden bg-gradient-to-b from-[#1017204d] to-[#eae2b71a] border border-white/[0.2] group-hover:border-slate-700 relative z-20  sm:p-6 flex flex-col items-center justify-center  shadow-2xl ",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};
export const Cardimage = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  return (
    <div className={cn(
      "flex justify-center",
      className
    )}>
        <Image
        width={200}
        height={200}
					className="object-cover max-h-[100px]"
					src={children}
					alt="logo"
				/>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2 text-center", className)}>
      {children}
    </h4>
  );
};
// export const CardDescription = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <p
//       className={cn(
//         "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
//         className
//       )}
//     >
//       {children}
//     </p>
//   );
// };