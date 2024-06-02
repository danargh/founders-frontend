// Header section for user dashboard
"use client";

import { EksklusifPackageDashboard, PremiumPackageDashboard, StarterPackageDashboard } from "../ui/Package";
import { button } from "@/app/variants";
import { LinkButton } from "../ui/Button";
import LogoNavbar from "../ui/LogoNavbar";
import Profile from "@/components/section/Profile.dashboard";
import { MenuIcon } from "@/assets/icons/icons";
import { useUIStateSlice, useDashboardThemeSlice, useUserSlice, DashboardThemeSlice } from "@/store/store";
import { useEffect, useState } from "react";
import { Loader } from "../ui/Loader";
import { useStore } from "@/hooks";

const Header: React.FC = () => {
   const [activeSidebar, setActiveSidebar] = useUIStateSlice((state) => [state.activeSidebar, state.setActiveSidebar]);
   const dashboardThemeStore = useStore<DashboardThemeSlice, DashboardThemeSlice>(useDashboardThemeSlice, (state) => state);
   const user = useStore(useUserSlice, (state) => state.user);
   const [packageType, setPackageType] = useState<React.ReactNode>(null);
   const [setPrimaryColor, setSecondaryColor, setTertiaryColor] = useDashboardThemeSlice((state) => [state.setPrimaryColor, state.setSecondaryColor, state.setTertiaryColor]);

   useEffect(() => {
      console.log("user", user);
      if (user?.membership === "premium") {
         setPackageType(<PremiumPackageDashboard />);
      } else if (user?.membership === "eksklusif") {
         setPackageType(<EksklusifPackageDashboard />);
      } else {
         setPackageType(<StarterPackageDashboard />);
      }

      if (user?.membership === "premium") {
         setPrimaryColor("#701608");
         setSecondaryColor("#EBC5BC");
         setTertiaryColor("#F7EFED");
      } else if (user?.membership === "eksklusif") {
         setPrimaryColor("#2B0C66");
         setSecondaryColor("#CFCAEB");
         setTertiaryColor("#F3F2F7");
      } else {
         setPrimaryColor("#2E4210");
         setSecondaryColor("#D3E5BC");
         setTertiaryColor("#EFF5E6");
      }
   }, [user, setPrimaryColor, setSecondaryColor, setTertiaryColor]);

   return (
      <header style={{ borderColor: dashboardThemeStore?.secondaryColor }} className="flex justify-between gap-x-4 sm:gap-x-6 items-center py-4 border-b h-[80px]">
         <div className="hidden sm:flex basis-2/12 pl-6 pr-6 md:pr-0">
            <LogoNavbar />
         </div>
         <button
            onClick={() => {
               setActiveSidebar(!activeSidebar);
            }}
            className="flex h-full items-center sm:hidden basis-1/12 sm:basis-2/12 pl-4"
         >
            <MenuIcon width="24" height="24" />
         </button>

         <div className="flex justify-between items-center basis-11/12 sm:basis-10/12 sm:pl-0 pr-4 sm:pr-6">
            {packageType || <div>loading...</div>}
            <div className="flex justify-center">
               <LinkButton urlLocation="#" className={`${button({ tertiary: "gray", size: { initial: "xs", md: "xs", xl: "sm" } })}`}>
                  Preview Undangan
               </LinkButton>
               <Profile />
            </div>
         </div>
      </header>
   );
};

export default Header;
