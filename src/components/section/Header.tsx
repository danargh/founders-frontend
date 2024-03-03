// Header section for user dashboard

import { StarterPackageDashboard } from "../ui/Package";
import { button } from "@/app/variants";
import { LinkButton } from "../ui/Button";
import { testimoniData } from "@/store/staticStore";
import Image from "next/image";
import LogoNavbar from "../ui/LogoNavbar";

const Header: React.FC = () => {
   return (
      <header className="flex justify-between items-center px-6 py-4 border-b border-mossGreenSecondary-100 h-[80px]">
         <div className="basis-2/12">
            <LogoNavbar />
         </div>

         <div className="flex justify-between items-center basis-10/12">
            <StarterPackageDashboard />
            <div className="flex gap-x-4">
               <LinkButton urlLocation="#" className={`${button({ tertiary: "gray", size: { initial: "xs", md: "xs", xl: "sm" } })}`}>
                  Preview Undangan
               </LinkButton>
               <LinkButton urlLocation="#" className={`${button({ tertiary: "gray", size: { initial: "xs", md: "xs", xl: "sm" } })}`}>
                  {/* <Image width={32} height={32} className="border border-[#DBD8EB] rounded-full object-cover w-8 h-8" src={testimoniData[0].imgMale} alt="avatar img" /> */}
                  Zahnanami
               </LinkButton>
            </div>
         </div>
      </header>
   );
};

export default Header;
