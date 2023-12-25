"use client";

import React, { FC, useEffect } from "react";
import { useUserSlice } from "@/store/store";
import { useCookies, useStore } from "@/hooks";
import { useRouter } from "next/navigation";
import { useValidateToken } from "@/api/auth";
import { Loader } from "@/components/ui/Loader";
import Cookies from "universal-cookie";

const Dashboard: FC = () => {
   const router = useRouter();
   const { status: useValidaTokenStatus } = useValidateToken();
   const user = useStore(useUserSlice, (state) => state.user);
   const { removeCookie } = useCookies(["userToken"]);

   useEffect(() => {
      if (useValidaTokenStatus === "error") {
         router.push("/login");
      }
   }, [useValidaTokenStatus]);

   if (useValidaTokenStatus === "pending") {
      return <Loader />;
   }

   // logout
   const logoutHandler = () => {
      removeCookie("userToken", { path: "/" });
      router.push("/login");
   };

   if (useValidaTokenStatus === "success") {
      return (
         <div>
            <h1>{user?.username}</h1>
            <button onClick={logoutHandler}>Logout</button>
         </div>
      );
   }
};

export default Dashboard;
