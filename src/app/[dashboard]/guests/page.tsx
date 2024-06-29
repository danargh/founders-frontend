"use client";

import { useEffect, useState } from "react";
import AuthHOC from "@/components/hoc/AuthHOC";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useStore } from "@/hooks";
import { DashboardThemeSlice, useDashboardThemeSlice, useInvitationStateSlice } from "@/store/store";
import { Add } from "iconsax-react";
import { button } from "@/app/variants";
import GuestBook from "@/components/section/GuestBook.dashboard";
import Rsvp from "@/components/section/Rsvp.dashboard";
import Quote from "@/components/section/Quote.dashboard";

interface Tab {
   id: number;
   title: string;
   content: JSX.Element;
}

const Guest = () => {
   const [activeTab, setActiveTab] = useState<number>(0);
   const dashboardThemeStore = useStore<DashboardThemeSlice, DashboardThemeSlice>(useDashboardThemeSlice, (state) => state);
   const invitation = useStore(useInvitationStateSlice, (state) => state.invitationSetting);
   const [theme, setTheme] = useState<string>("");

   useEffect(() => {
      if (invitation?.pricingCategory === "premium") {
         setTheme("orange");
      } else if (invitation?.pricingCategory === "eksklusif") {
         setTheme("violet");
      } else {
         setTheme("green");
      }
   }, [invitation?.pricingCategory]);

   const tabs: Tab[] = [
      {
         id: 0,
         title: "Buku Tamu",
         content: <GuestBook theme={theme} dashboardThemeStore={dashboardThemeStore} />,
      },
      {
         id: 1,
         title: "RSVP",
         content: <Rsvp theme={theme} dashboardThemeStore={dashboardThemeStore} />,
      },
      {
         id: 2,
         title: "Ucapan",
         content: <Quote theme={theme} dashboardThemeStore={dashboardThemeStore} />,
      },
   ];
   return (
      <section className="flex flex-col gap-y-6">
         <div className="grid grid-cols-3 gap-x-4 w-full p-2 rounded-full" style={{ backgroundColor: dashboardThemeStore?.tertiaryColor }}>
            {tabs.map((tab) => (
               <button
                  className="py-4 rounded-full font-bold"
                  style={{ backgroundColor: activeTab === tab.id ? dashboardThemeStore?.secondaryColor : dashboardThemeStore?.tertiaryColor, color: dashboardThemeStore?.primaryColor }}
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
               >
                  {tab.title}
               </button>
            ))}
         </div>
         <div>
            {tabs.map(
               (tab) =>
                  activeTab === tab.id && (
                     <CSSTransition key={tab.id} in={activeTab === tab.id} timeout={100} classNames="fade" unmountOnExit>
                        {tab.content}
                     </CSSTransition>
                  ),
            )}
         </div>
      </section>
   );
};

export default AuthHOC(Guest);
