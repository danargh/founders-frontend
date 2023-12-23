"use client";

import React, { FC, useEffect } from "react";
import { useUserSlice } from "@/store/store";
import { useStore, useToken } from "@/hooks";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { useValidateToken } from "@/api/auth";
import { Loader } from "@/components/ui/Loader";

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
         <div>
            <h1>{user?.username}</h1>
         </div>
      );
   }
};

export default Dashboard;
