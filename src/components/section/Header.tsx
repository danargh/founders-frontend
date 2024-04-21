// Header section for user dashboard
"use client";

import { EksklusifPackageDashboard, PremiumPackageDashboard, StarterPackageDashboard } from "../ui/Package";
import { button } from "@/app/variants";
import { LinkButton } from "../ui/Button";
import LogoNavbar from "../ui/LogoNavbar";
import Profile from "@/components/section/Profile";
import { MenuIcon } from "@/assets/icons/icons";
import { useUIStateSlice, useDashboardThemeSlice, useUserSlice } from "@/store/store";

const Header: React.FC = () => {
   const [activeSidebar, setActiveSidebar] = useUIStateSlice((state) => [state.activeSidebar, state.setActiveSidebar]);
   const [secondaryColor] = useDashboardThemeSlice((state) => [state.secondaryColor]);
   const user = useUserSlice((state) => state.user);

   return (
      <header style={{ borderColor: secondaryColor }} className="flex justify-between gap-x-4 sm:gap-x-6 items-center py-4 border-b h-[80px]">
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
            {user?.membership === "free" && <StarterPackageDashboard />}
            {user?.membership === "premium" && <PremiumPackageDashboard />}
            {user?.membership === "eksklusif" && <EksklusifPackageDashboard />}
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
