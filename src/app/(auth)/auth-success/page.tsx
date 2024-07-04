"use client";

import React from "react";
import { useEffect } from "react";

type Props = {};
import Cookies from "universal-cookie";
import { CenterLoader } from "@/components/ui/Loader";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function AuthSuccess({}: Props) {
   const searchParams = useSearchParams();
   const userToken = searchParams.get("userToken");
   const refreshToken = searchParams.get("refreshToken");
   const router = useRouter();

   useEffect(() => {
      const cookies = new Cookies();
      if (userToken && refreshToken) {
         cookies.set("userToken", userToken, { path: "/" });
         cookies.set("refreshToken", refreshToken, { path: "/" });
         router.push("/invitation");
      }
   }, [userToken, refreshToken, router]);

   return (
      <div>
         <CenterLoader />
      </div>
   );
}
