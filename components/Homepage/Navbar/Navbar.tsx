"use client";
import React from "react";
import { FloatingNav } from "../../ui/floating-navbar";
import { IconCalendarEvent, IconHome, IconMessage, IconInfoCircle } from "@tabler/icons-react";
export default function Navbar({button,url}:{button:string,url:string}) {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-[24px] w-[24px] text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/#about",
      icon: <IconInfoCircle className="h-[24px] w-[24px] text-neutral-500 dark:text-white" />,
    },
    {
      name: "Events",
      link: "/#events",
      icon: <IconCalendarEvent className="h-[24px] w-[24px] text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/#footer",
      icon: (
        <IconMessage className="h-[24px] w-[24px] text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
      <FloatingNav navItems={navItems} button={button} url={url} />
  );
}

