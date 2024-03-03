"use client";

import React, { FC, useEffect } from "react";
import { useUserSlice } from "@/store/store";
import { useCookies, useStore } from "@/hooks";
import { useRouter } from "next/navigation";
import { useValidateToken } from "@/api/auth";
import { Loader } from "@/components/ui/Loader";
import Cookies from "universal-cookie";
import Sidebar from "@/components/section/Sidebar";
import Header from "@/components/section/Header";

const Dashboard: FC = () => {
   const router = useRouter();
   const { status: useValidaTokenStatus } = useValidateToken();

   useEffect(() => {
      if (useValidaTokenStatus === "error") {
         router.push("/login");
      }
   }, [useValidaTokenStatus]);

   if (useValidaTokenStatus === "pending") {
      return <Loader />;
   }

   if (useValidaTokenStatus === "success") {
      return (
         <main className="responsive__container--dashboard flex flex-col">
            <Header />
            <div className="flex px-6">
               <Sidebar />

               <div className="basis-10/12">
                  <p>INI KONTEN</p>
               </div>
            </div>
         </main>
      );
   }
};

export default Dashboard;
