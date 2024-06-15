"use client";

import AuthHOC from "@/components/hoc/AuthHOC";
import { useStore } from "@/hooks";
import { useState } from "react";
import { DashboardThemeSlice, useDashboardThemeSlice } from "@/store/store";
import { CSSTransition } from "react-transition-group";

interface Tab {
   id: number;
   title: string;
   content: JSX.Element;
}

const Gallery = () => {
   const [activeTab, setActiveTab] = useState<number>(0);
   const dashboardThemeStore = useStore<DashboardThemeSlice, DashboardThemeSlice>(useDashboardThemeSlice, (state) => state);

   const tabs: Tab[] = [
      {
         id: 0,
         title: "Foto",
         content: (
            <section style={{ borderColor: dashboardThemeStore?.secondaryColor }} className="flex flex-col gap-y-6 p-6 border rounded-[32px]">
               <div className="flex flex-col gap-y-1">
                  <h2 className=" text-display-sm font-Lora font-[500]">Daftar Tamu</h2>
                  <p>Data acara masih dapat diubah setelah undangan selesai dibuat. </p>
               </div>
               <div className="flex flex-col gap-y-2">
                  <hr className=" text-primary-100" />
               </div>
            </section>
         ),
      },
      {
         id: 1,
         title: "Musik",
         content: (
            <section style={{ borderColor: dashboardThemeStore?.secondaryColor }} className="flex flex-col gap-y-6 p-6 border rounded-[32px]">
               <div className="flex flex-col gap-y-1">
                  <h2 className=" text-display-sm font-Lora font-[500]">RSVP</h2>
                  <p>Data acara masih dapat diubah setelah undangan selesai dibuat. </p>
               </div>
               <div className="flex flex-col gap-y-2">
                  <hr className=" text-primary-100" />
               </div>
            </section>
         ),
      },
      {
         id: 2,
         title: "Video",
         content: (
            <section style={{ borderColor: dashboardThemeStore?.secondaryColor }} className="flex flex-col gap-y-6 p-6 border rounded-[32px]">
               <div className="flex flex-col gap-y-1">
                  <h2 className=" text-display-sm font-Lora font-[500]">Ucapan</h2>
                  <p>Data acara masih dapat diubah setelah undangan selesai dibuat. </p>
               </div>
               <div className="flex flex-col gap-y-2">
                  <hr className=" text-primary-100" />
               </div>
            </section>
         ),
      },
      {
         id: 3,
         title: "Streaming",
         content: (
            <section style={{ borderColor: dashboardThemeStore?.secondaryColor }} className="flex flex-col gap-y-6 p-6 border rounded-[32px]">
               <div className="flex flex-col gap-y-1">
                  <h2 className=" text-display-sm font-Lora font-[500]">Ucapan</h2>
                  <p>Data acara masih dapat diubah setelah undangan selesai dibuat. </p>
               </div>
               <div className="flex flex-col gap-y-2">
                  <hr className=" text-primary-100" />
               </div>
            </section>
         ),
      },
   ];
   return (
      <section className="flex flex-col gap-y-6">
         <div className="grid grid-cols-4 gap-x-4 w-full p-2 rounded-full" style={{ backgroundColor: dashboardThemeStore?.tertiaryColor }}>
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

export default AuthHOC(Gallery);
