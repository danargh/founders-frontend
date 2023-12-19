"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { LoginUser, User } from "@/interfaces";
import config from "@/config";

const postLogin = async (user: LoginUser) => {
   console.log(config.BASE_URL);
   const { data } = await axios.post(`${config.BASE_URL}/auth/login`, user);
   return data;
};

export const useLogin = () => {
   return useMutation<User, Error, LoginUser>({
      mutationFn: postLogin,
      onSuccess: (data) => {
         console.log(data);
      },
      onError: (error) => {
         console.log(error);
      },
   });
};
