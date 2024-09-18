"use client";
import React from "react";
import { FloatingNav } from "../../ui/floating-navbar";
import { IconCalendarEvent, IconHome, IconMessage, IconUsersGroup } from "@tabler/icons-react";
export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/#about",
      icon: <IconUsersGroup className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Events",
      link: "/#events",
      icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
      <FloatingNav navItems={navItems} />
  );
}

