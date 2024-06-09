import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Groom, LoginUser, Response, ResponseOnly, User, Invitation } from "@/interfaces";
import config from "@/config";
import { useUserSlice } from "@/store/store";
import Cookies from "universal-cookie";
import { getIn } from "yup";

const cookies = new Cookies();

const postGroom = async (groom: Groom): Promise<Response<Groom>> => {
   return await axios
      .post(`${config.BASE_URL}/groom`, groom, {
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
export const usePostGroom = () => {
   return useMutation<Response<Groom>, ResponseOnly, Groom, string[]>({
      mutationKey: ["groom"],
      mutationFn: async (groom: Groom): Promise<Response<Groom>> => {
         const data = await postGroom(groom);
         return data;
      },
   });
};

// invitation
export const postInvitation = async (invitation: Invitation): Promise<Response<Invitation>> => {
   return await axios
      .post(`${config.BASE_URL}/invitation`, invitation, {
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
export const usePostInvitation = () => {
   return useMutation<Response<Invitation>, ResponseOnly, Invitation, string[]>({
      mutationKey: ["invitation"],
      mutationFn: async (invitation: Invitation): Promise<Response<Invitation>> => {
         const data = await postInvitation(invitation);
         return data;
      },
   });
};

// get invitation
export const getInvitations = async (): Promise<Response<Invitation[]>> => {
   return await axios
      .get(`${config.BASE_URL}/invitation`, {
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
export const useGetInvitations = () => {
   return useQuery<Invitation[], ResponseOnly, Invitation[]>({
      queryKey: ["user"],
      queryFn: async (): Promise<Invitation[]> => {
         const data = await getInvitations();
         const invitationData = data.data;
         // setinvitation(userData);
         return invitationData;
      },
   });
};

// get invitation by id
export const getInvitationById = async (id: string): Promise<Response<Invitation>> => {
   return await axios
      .get(`${config.BASE_URL}/invitation/${id}`, {
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
export const useGetInvitationById = () => {
   return useMutation<Response<Invitation>, ResponseOnly, string, string[]>({
      mutationKey: ["invitation"],
      mutationFn: async (id: string): Promise<Response<Invitation>> => {
         const data = await getInvitationById(id);
         return data;
      },
   });
};

// export const postRegister = async (user: User): Promise<Response<User>> => {
//    return await axios
//       .post(`${config.BASE_URL}/auth/register`, user)
//       .then((res) => {
//          return res.data;
//       })
//       .catch((err: AxiosError) => {
//          throw err.response?.data;
//       });
// };

// export const useRegister = () => {
//    const [setUser] = useUserSlice((state) => [state.setUser, state.user]);
//    return useMutation<Response<User>, ResponseOnly, User, string[]>({
//       mutationKey: ["register"],
//       mutationFn: async (user: User): Promise<Response<User>> => {
//          const data = await postRegister(user);
//          return data;
//       },
//       onSuccess: (data) => {
//          const userData = data.data as User;
//          setUser(userData);
//          // set cookie
//          cookies.set("userToken", userData.auth.token, { path: "/", expires: new Date(userData.auth.expiresIn) });
//          return data;
//       },
//       onError: (error) => {
//          return error;
//       },
//    });
// };
