"use client";

import { button } from "@/app/variants";
import { Add, ElementEqual } from "iconsax-react";
import { useStore } from "@/hooks";
import { DashboardThemeSlice, useDashboardThemeSlice } from "@/store/store";

import React from "react";

type RsvpProps = {
   theme: string;
   dashboardThemeStore: DashboardThemeSlice | undefined;
};

export default function Rsvp({ theme, dashboardThemeStore }: RsvpProps) {
   return (
      <section style={{ borderColor: dashboardThemeStore?.secondaryColor }} className="flex flex-col gap-y-6 p-6 border rounded-[32px]">
         <div className="flex gap-y-1 justify-between items-end">
            <div className="flex flex-col gap-y-1">
               <h2 className=" text-display-sm font-Lora font-[500]">RSVP</h2>
               <p>Data acara masih dapat diubah setelah undangan selesai dibuat. </p>
            </div>
            <div className="flex gap-x-4">
               <button className={`${button({ tertiary: theme as any, size: { initial: "sm", md: "sm", xl: "sm" } })} w-fit h-fit`}>
                  <ElementEqual />
                  Import Data
               </button>
               <button className={`${button({ primary: theme as any, size: { initial: "sm", md: "sm", xl: "sm" } })} w-fit h-fit`}>
                  <Add />
                  Tambah
               </button>
            </div>
         </div>
         <div className="flex flex-col gap-y-2">
            <hr className=" text-primary-100" />
         </div>
      </section>
   );
}
