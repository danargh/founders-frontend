import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { LoginUser, Response, ResponseOnly, User, UserSetting } from "@/interfaces";
import config from "@/config";
import { useUserSlice } from "@/store/store";
import Cookies from "universal-cookie";

const cookies = new Cookies();

// login google
export const getLoginGoogle = async (): Promise<Response<User>> => {
   return await axios
      .get(`${config.BASE_URL}/auth/google`, {
         withCredentials: true,
         headers: {
            "Content-Type": "application/json",
         },
      })
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};

export const useLoginGoogle = () => {
   return useMutation<Response<User>, AxiosError>({
      mutationKey: ["googleLogin"],
      mutationFn: getLoginGoogle,
   });
};

// Login
export const postLogin = async (user: LoginUser): Promise<Response<User>> => {
   return await axios
      .post(`${config.BASE_URL}/auth/login`, user, { withCredentials: true })
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};
export const useLogin = () => {
   const [setUser] = useUserSlice((state) => [state.setUser, state.user]);
   return useMutation<Response<User>, ResponseOnly, LoginUser, string[]>({
      mutationKey: ["login"],
      mutationFn: async (user: LoginUser): Promise<Response<User>> => {
         const data = await postLogin(user);
         return data;
      },
      onSuccess: (data) => {
         const userData = data.data as User;
         setUser(userData);

         // set cookie
         cookies.set("userToken", userData.auth.token, { path: "/", expires: new Date(userData.auth.expiresIn) });
         return data;
      },
      onError: (error) => {
         return error;
      },
   });
};

// logout
export const logout = async (): Promise<ResponseOnly> => {
   return await axios
      .get(`${config.BASE_URL}/auth/logout`, { withCredentials: true })
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};

export const postRegister = async (user: User): Promise<Response<User>> => {
   cookies.remove("userToken");
   return await axios
      .post(`${config.BASE_URL}/auth/register`, user)
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};

export const useRegister = () => {
   const [setUser] = useUserSlice((state) => [state.setUser, state.user]);
   return useMutation<Response<User>, ResponseOnly, User, string[]>({
      mutationKey: ["register"],
      mutationFn: async (user: User): Promise<Response<User>> => {
         const data = await postRegister(user);
         return data;
      },
      onSuccess: (data) => {
         const userData = data.data as User;
         setUser(userData);
         // set cookie
         cookies.set("userToken", userData.auth.token, { path: "/", expires: new Date(userData.auth.expiresIn) });
         return data;
      },
      onError: (error) => {
         return error;
      },
   });
};

// validate token
export const postValidateToken = async (): Promise<Response<UserSetting>> => {
   let userToken: string = cookies.get("userToken");
   if (!userToken) {
      throw new Error("Token not found");
   }

   return await axios
      .get(`${config.BASE_URL}/auth/validate`, { headers: { Authorization: `Bearer ${userToken}`, "Content-Type": "application/json" }, withCredentials: true })
      .then((res) => {
         return res.data as Response<UserSetting>;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data as ResponseOnly;
      });
};

export const useValidateToken = () => {
   return useQuery<Response<UserSetting>, AxiosError, Response<UserSetting>>({
      queryKey: ["validateToken"],
      queryFn: async () => {
         const data = await postValidateToken();
         return data;
      },
   });
};
