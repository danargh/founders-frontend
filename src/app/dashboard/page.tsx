"use client";

import React, { FC } from "react";
import { useUserSlice } from "@/store/store";

const Dashboard: FC = () => {
   const [user] = useUserSlice((state) => [state.user]);

   console.log(user);

   return <h1>{user?.username}</h1>;
};

export default Dashboard;
