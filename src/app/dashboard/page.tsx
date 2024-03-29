"use client";

import React, { FC, useEffect } from "react";
import { useUserSlice } from "@/store/store";
import { useCookies, useStore } from "@/hooks";
import { useRouter } from "next/navigation";
import { useValidateToken } from "@/api/auth";
import { Loader } from "@/components/ui/Loader";
import { UserIcon } from "@/assets/icons/icons";

interface Statistik {
   // icon: React.ReactNode;
   title: string;
   value: number;
}

const statistik: Statistik[] = [
   {
      title: "Total tamu",
      value: 1034,
   },
   {
      title: "Ucapan",
      value: 1034,
   },
   {
      title: "Undangan",
      value: 1034,
   },
   {
      title: "Informasi",
      value: 1034,
   },
   {
      title: "Tamu hadir",
      value: 1034,
   },
   {
      title: "Tamu tidak hadir",
      value: 1034,
   },
];

const Dashboard: FC = () => {
   const router = useRouter();
   const { status: useValidaTokenStatus } = useValidateToken();
   const user = useStore(useUserSlice, (state) => state.user);

   useEffect(() => {
      if (useValidaTokenStatus === "error") {
         router.push("/login");
      }
   }, [useValidaTokenStatus, router]);

   if (useValidaTokenStatus === "pending") {
      return <Loader />;
   }

   if (useValidaTokenStatus === "success") {
      return (
         <section className="flex flex-col gap-y-6 p-6 border border-mossGreenSecondary-100 rounded-[32px]">
            <div className="flex flex-col gap-y-1">
               <h2 className=" text-display-sm font-Lora font-[500]">Statistik Undangan</h2>
               <p>Data acara masih dapat diubah setelah undangan selesai dibuat</p>
            </div>
            <hr className=" text-primary-100" />
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
               {statistik.map((item, index) => (
                  <div className="flex flex-col gap-y-6 p-5 border border-mossGreenSecondary-100 bg-mossGreenSecondary-25 rounded-[16px]" key={index}>
                     <UserIcon width="20" height="20" color="#2E4210" />
                     <div className="flex flex-col gap-y-1">
                        <h3 className=" text-heading-xs">{item.title}</h3>
                        <p className=" text-display-xs font-Lora font-[500]">{item.value}</p>
                     </div>
                  </div>
               ))}
            </div>
         </section>
      );
   }
};

export default Dashboard;
