"use client";

import { useStore } from "@/hooks";
import { DashboardThemeSlice, useDashboardThemeSlice } from "@/store/store";

import React from "react";

type QuoteProps = {
   theme: string;
   dashboardThemeStore: DashboardThemeSlice | undefined;
};

export default function Quote({ theme, dashboardThemeStore }: QuoteProps) {
   return (
      <section style={{ borderColor: dashboardThemeStore?.secondaryColor }} className="flex flex-col gap-y-6 p-6 border rounded-[32px]">
         <div className="flex flex-col gap-y-1">
            <h2 className=" text-display-sm font-Lora font-[500]">Ucapan</h2>
            <p>Data acara masih dapat diubah setelah undangan selesai dibuat. </p>
         </div>
         <div className="flex flex-col gap-y-2">
            <hr className=" text-primary-100" />
         </div>
      </section>
   );
}
