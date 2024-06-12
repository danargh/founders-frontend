import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Groom, LoginUser, Response, ResponseOnly, User, Invitation } from "@/interfaces";
import config from "@/config";
import { useUserSlice } from "@/store/store";
import Cookies from "universal-cookie";
import { getIn } from "yup";

const cookies = new Cookies();

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
      onSuccess(data) {
         return data;
      },
   });
};
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
export const useGetInvitationById = (id: string) => {
   return useQuery<Invitation, ResponseOnly, Invitation>({
      queryKey: ["invitation"],
      queryFn: async (): Promise<Invitation> => {
         const data = await getInvitationById(id);
         return data.data;
      },
      enabled: !!id,
   });
};

// groom
export const postGroom = async (groom: Groom): Promise<Response<Groom>> => {
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
      onSuccess(data) {
         return data;
      },
   });
};
export const getGroomsByInvitationId = async (invitationId: string): Promise<Response<Groom>> => {
   return await axios
      .get(`${config.BASE_URL}/groom/${invitationId}`, {
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
export const useGetGroomsByInvitationId = (id: string) => {
   return useQuery<Groom, ResponseOnly, Groom>({
      queryKey: ["groom"],
      queryFn: async (): Promise<Groom> => {
         const data = await getGroomsByInvitationId(id);
         return data.data;
      },
      enabled: !!id,
   });
};
export const updateGroom = async (groom: Groom): Promise<Response<Groom>> => {
   return await axios
      .put(`${config.BASE_URL}/groom/${groom.id}`, groom, {
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
export const useUpdateGroom = () => {
   return useMutation<Response<Groom>, ResponseOnly, Groom, string[]>({
      mutationKey: ["groom"],
      mutationFn: async (groom: Groom): Promise<Response<Groom>> => {
         const data = await updateGroom(groom);
         return data;
      },
      onSuccess(data) {
         return data;
      },
   });
};
