"use client";

import React, { FC, useEffect } from "react";
import { useUserSlice } from "@/store/store";
import { useCookies, useStore } from "@/hooks";
import { useRouter } from "next/navigation";
import { useValidateToken } from "@/api/auth";
import { Loader } from "@/components/ui/Loader";

const HomeDashboard: FC = () => {
   const router = useRouter();
   const { status: useValidaTokenStatus } = useValidateToken();
   const user = useStore(useUserSlice, (state) => state.user);

   useEffect(() => {
      if (useValidaTokenStatus === "error") {
         router.push("/login");
      }
   }, [useValidaTokenStatus]);

   if (useValidaTokenStatus === "pending") {
      return <Loader />;
   }

   if (useValidaTokenStatus === "success") {
      return <h1>Home dashboard {user?.username}</h1>;
   }
};

export default HomeDashboard;
