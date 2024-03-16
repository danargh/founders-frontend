// Sidebar section for user dashboard
"use client";

import LogoNavbar from "../ui/LogoNavbar";
import { CalendarIcon, ClipboardIcon, FrameIcon, GalleryIcon, GiftIcon, HeartEditIcon, HomeIcon, MessageTextIcon, MessagesIcon, SettingIcon, StarOutlineIcon, UserIcon } from "@/assets/icons/icons";
import { useUIStateSlice } from "@/store/store";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface NavItem {
   icon: JSX.Element;
   label: string;
   link: string;
}

interface SidebarProps {
   children: React.ReactNode;
}

const navItems: NavItem[] = [
   {
      icon: <HomeIcon width="20" height="20" color="#2E4210" />,
      label: "Dashboard",
      link: "/dashboard",
   },
   {
      icon: <UserIcon width="20" height="20" color="#2E4210" />,
      label: "Profile",
      link: "/dashboard/profile",
   },
   {
      icon: <CalendarIcon width="20" height="20" color="#2E4210" />,
      label: "Acara",
      link: "/dashboard/event",
   },
   {
      icon: <ClipboardIcon width="20" height="20" color="#2E4210" />,
      label: "Tamu",
      link: "/dashboard/guests",
   },
   {
      icon: <MessagesIcon width="20" height="20" color="#2E4210" />,
      label: "Ucapan",
      link: "/dashboard/message",
   },
   {
      icon: <GalleryIcon width="20" height="20" color="#2E4210" />,
      label: "Galeri",
      link: "/dashboard/gallery",
   },
   {
      icon: <HeartEditIcon width="20" height="20" color="#2E4210" />,
      label: "Story",
      link: "/dashboard/story",
   },
   {
      icon: <MessageTextIcon width="20" height="20" color="#2E4210" />,
      label: "Quote",
      link: "/dashboard/quote",
   },
   {
      icon: <FrameIcon width="20" height="20" color="#2E4210" />,
      label: "Tema",
      link: "/dashboard/template",
   },
   {
      icon: <GiftIcon width="20" height="20" color="#2E4210" />,
      label: "Hadiah",
      link: "/dashboard/gift",
   },
   {
      icon: <StarOutlineIcon width="20" height="20" color="#2E4210" />,
      label: "Upgrade",
      link: "/dashboard/upgrade",
   },
   {
      icon: <SettingIcon width="20" height="20" color="#2E4210" />,
      label: "Pengaturan",
      link: "/dashboard/setting",
   },
];

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
   const pathname = usePathname();

   return (
      <>
         <nav className="basis-2/12 h-screen flex flex-col gap-y-2 border-r border-mossGreenSecondary-100 ">
            {navItems.map((item, index) => (
               <Link
                  key={index}
                  href={item.link}
                  className={`${
                     item.link === pathname ? "bg-mossGreenSecondary-50 active__sidebar" : null
                  } relative items-center justify-start flex gap-x-2 py-3 pl-5 outline-offset-4 hover:outline-4 hover:bg-mossGreenSecondary-50`}
               >
                  {item.icon}
                  <p className=" text-label-md">{item.label}</p>
               </Link>
            ))}
         </nav>
         <div className="basis-10/12 py-5 px-6">{children}</div>
      </>
   );
};

export default Sidebar;
