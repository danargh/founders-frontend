"use client";

import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { LoginUser, Response, User } from "@/interfaces";
import config from "@/config";
import { useUserSlice } from "@/store/store";

const postLogin = async (user: LoginUser): Promise<Response<User>> => {
   return await axios
      .post(`${config.BASE_URL}/auth/login`, user)
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};

export const useLogin = () => {
   const [setUser] = useUserSlice((state) => [state.setUser, state.user]);
   return useMutation<Response<User>, Error, LoginUser>({
      mutationFn: async (user: LoginUser): Promise<Response<User>> => {
         const data = await postLogin(user);
         return data;
      },
      onSuccess: (data) => {
         // console.log(data);
         setUser(data.data as User);
      },
      onError: (error) => {
         console.log(error);
      },
   });
};
