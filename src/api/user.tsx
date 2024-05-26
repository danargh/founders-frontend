import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { LoginUser, Response, ResponseOnly, User } from "@/interfaces";
import config from "@/config";
import { useUserSlice } from "@/store/store";
import Cookies from "universal-cookie";

const cookies = new Cookies();

// get user
export const getUser = async (): Promise<Response<User>> => {
   return await axios
      .get(`${config.BASE_URL}/user`, {
         headers: {
            Authorization: `Bearer ${cookies.get("userToken")}`,
         },
      })
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};

export const useGetUser = () => {
   const [setUser] = useUserSlice((state) => [state.setUser, state.user]);
   return useQuery<User, AxiosError, User>({
      queryKey: ["user"],
      queryFn: async () => {
         const data = await getUser();
         const userData = data.data as User;
         // setUser(userData);
         return userData;
      },
   });
};
