"use client";

import React, { FC, useEffect } from "react";
import { useDashboardThemeSlice, useUserSlice } from "@/store/store";
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
   const [tertiaryColor, secondaryColor] = useDashboardThemeSlice((state) => [state.tertiaryColor, state.secondaryColor]);
   const [setPrimaryColor, setSecondaryColor, setTertiaryColor] = useDashboardThemeSlice((state) => [state.setPrimaryColor, state.setSecondaryColor, state.setTertiaryColor]);

   useEffect(() => {
      if (useValidaTokenStatus === "error") {
         router.push("/login");
      }

      if (user?.membership === "premium") {
         setPrimaryColor("#701608");
         setSecondaryColor("#EBC5BC");
         setTertiaryColor("#F7EFED");
      } else if (user?.membership === "eksklusif") {
         setPrimaryColor("#2B0C66");
         setSecondaryColor("#CFCAEB");
         setTertiaryColor("#F3F2F7");
      }
   }, [useValidaTokenStatus, router, user, setPrimaryColor, setSecondaryColor, setTertiaryColor]);

   if (useValidaTokenStatus === "pending") {
      return <Loader />;
   }

   if (useValidaTokenStatus === "success") {
      return (
         <section style={{ borderColor: secondaryColor }} className="flex flex-col gap-y-6 p-6 border rounded-[32px]">
            <div className="flex flex-col gap-y-1">
               <h2 className=" text-display-sm font-Lora font-[500]">Statistik Undangan</h2>
               <p>Data acara masih dapat diubah setelah undangan selesai dibuat</p>
            </div>
            <hr className=" text-primary-100" />
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
               {statistik.map((item, index) => (
                  <div style={{ backgroundColor: tertiaryColor, borderColor: secondaryColor }} className="flex flex-col gap-y-6 p-5 border rounded-[16px]" key={index}>
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
