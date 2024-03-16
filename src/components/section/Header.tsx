// Header section for user dashboard

import { StarterPackageDashboard } from "../ui/Package";
import { button } from "@/app/variants";
import { LinkButton } from "../ui/Button";
import LogoNavbar from "../ui/LogoNavbar";
import Profile from "@/components/section/Profile";

const Header: React.FC = () => {
   return (
      <header className="flex justify-between items-center px-6 py-4 border-b border-mossGreenSecondary-100 h-[80px]">
         <div className="basis-2/12">
            <LogoNavbar />
         </div>

         <div className="flex justify-between items-center pl-6 basis-10/12">
            <StarterPackageDashboard />
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
