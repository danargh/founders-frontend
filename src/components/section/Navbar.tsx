"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MenuIcon } from "@/assets/icons/icons";
import { button } from "@/app/variants";
import { LinkButton } from "@/components/ui/Button";

const Navbar: React.FC = () => {
   const [showNav, setShowNav] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);
   const [showMenu, setShowMenu] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      window.addEventListener("resize", hideMenuWhenResize);

      // cleanup function when unmount
      return () => {
         window.removeEventListener("scroll", controlNavbar);
         window.removeEventListener("resize", hideMenuWhenResize);
      };
   }, [lastScrollY]);

   const controlNavbar = () => {
      if (window.scrollY < lastScrollY) {
         // if scroll down hide the navbar
         setShowNav(false);
      } else {
         // if scroll up show the navbar
         setShowNav(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
   };

   const hideMenuWhenResize = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth >= 768) {
         setShowMenu(false);
      }
   };

   return (
      <>
         <nav className={`${showNav ? "top-[-82px]" : null} transition-all border-b border-primary-100 bg-primary-25 sticky top-0 z-10`}>
            <div className="relative responsive__container flex justify-between items-center w-full py-4">
               <h4 className="flex-auto logo__primary">POLOKRAMI</h4>
               <button id="nav-button__mobile" className={`${showMenu ? "hidden" : "flex items-center"} md:hidden`}>
                  <i
                     onClick={() => {
                        setShowMenu(true);
                     }}
                  >
                     <MenuIcon width="24" height="24" />
                  </i>
               </button>
               <button id="nav-button__mobile" className={`${showMenu ? "block" : "hidden"}`}>
                  <Image
                     onClick={() => {
                        setShowMenu(false);
                     }}
                     onResize={() => {
                        hideMenuWhenResize();
                     }}
                     width={24}
                     height={24}
                     src="/icons/Dismiss.svg"
                     alt="menu icon"
                  />
               </button>
               <div className={`${showMenu ? "navbar__mobile--show" : "hidden"} md:flex md:flex-auto items-center justify-between`}>
                  <ul className={`${showMenu ? "flex flex-col w-full justify-start text-left gap-y-4 border-b border-primary-50 pb-3 mb-3" : "flex"} text-body-md md:text-body-lg gap-x-6 text-center`}>
                     <li className=" flex items-center justify-start md:justify-center">
                        <a className="md:w-[68px] text__link" href="#">
                           Beranda
                        </a>
                     </li>
                     <li className=" flex items-center justify-start md:justify-center">
                        <a className="md:w-[68px] text__link" href="#">
                           Tema
                        </a>
                     </li>
                     <li className=" flex items-center justify-start md:justify-center">
                        <a className="md:w-[68px] text__link" href="#">
                           Harga
                        </a>
                     </li>
                     <li className=" flex items-center justify-start md:justify-center">
                        <a className="md:w-[68px] text__link" href="#">
                           Tutorial
                        </a>
                     </li>
                  </ul>

                  <div className="w-full md:w-fit flex items-center gap-x-4">
                     <LinkButton urlLocation="/register" className={`${button({ tertiary: "gray", size: { initial: "xs", md: "xs", xl: "sm" } })} w-full md:w-fit`}>
                        Daftar
                     </LinkButton>
                     <LinkButton urlLocation="/login" className={`${button({ secondary: "gray", size: { initial: "xs", md: "xs", xl: "sm" } })} w-full md:w-fit`}>
                        Masuk
                     </LinkButton>
                  </div>
               </div>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
