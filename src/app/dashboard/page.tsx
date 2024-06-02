"use client";

import React, { FC, useEffect } from "react";
import { useDashboardThemeSlice, DashboardThemeSlice, useUserSlice } from "@/store/store";
import { useStore } from "@/hooks";
import { SmsTracking, Calendar1, People, UserTag, ProfileTick, ProfileDelete } from "iconsax-react";
import AuthHOC, { AuthHOCProps } from "@/components/hoc/AuthHOC";

interface Statistik {
   // icon: React.ReactNode;
   title: string;
   value: number;
   icon?: React.ReactNode;
}

const statistik: Statistik[] = [
   {
      title: "Total tamu",
      value: 1034,
      icon: <People width="20" height="20" color="#2E4210" />,
   },
   {
      title: "Ucapan",
      value: 1034,
      icon: <Calendar1 width="20" height="20" color="#2E4210" />,
   },
   {
      title: "Undangan",
      value: 1034,
      icon: <SmsTracking width="20" height="20" color="#2E4210" />,
   },
   {
      title: "Informasi",
      value: 1034,
      icon: <UserTag width="20" height="20" color="#2E4210" />,
   },
   {
      title: "Tamu hadir",
      value: 1034,
      icon: <ProfileTick width="20" height="20" color="#2E4210" />,
   },
   {
      title: "Tamu tidak hadir",
      value: 1034,
      icon: <ProfileDelete width="20" height="20" color="#2E4210" />,
   },
];

const Dashboard = () => {
   const dashboardThemeStore = useStore<DashboardThemeSlice, DashboardThemeSlice>(useDashboardThemeSlice, (state) => state);

   return (
      <section style={{ borderColor: dashboardThemeStore?.secondaryColor }} className="flex flex-col gap-y-6 p-6 border rounded-[32px]">
         <div className="flex flex-col gap-y-1">
            <h2 className=" text-display-sm font-Lora font-[500]">Statistik Undangan</h2>
            <p>Data acara masih dapat diubah setelah undangan selesai dibuat</p>
         </div>
         <hr className=" text-primary-100" />
         <div className=" grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
            {statistik.map((item, index) => (
               <div
                  style={{ backgroundColor: dashboardThemeStore?.tertiaryColor, borderColor: dashboardThemeStore?.secondaryColor }}
                  className="flex flex-col gap-y-6 p-5 border rounded-[16px]"
                  key={index}
               >
                  {item.icon}
                  <div className="flex flex-col gap-y-1">
                     <h3 className=" text-heading-xs">{item.title}</h3>
                     <p className=" text-display-xs font-Lora font-[500]">{item.value}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default AuthHOC(Dashboard);
