import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Groom, LoginUser, Response, ResponseOnly, User, Invitation, Guest } from "@/interfaces";
import config from "@/config";
import { useUserSlice } from "@/store/store";
import Cookies from "universal-cookie";
import { getIn } from "yup";
import { Event } from "@/interfaces";

const cookies = new Cookies();

// invitation
export const postInvitation = async (invitation: Invitation): Promise<Response<Invitation>> => {
   return await axios
      .post(`${config.BASE_URL}/invitation`, invitation, {
         headers: {
            Authorization: `Bearer ${cookies.get("userToken")}`,
         },
         withCredentials: true,
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
         withCredentials: true,
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
         withCredentials: true,
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
export const getGroomsByInvitationId = async (invitationId: string): Promise<Response<Groom>> => {
   return await axios
      .get(`${config.BASE_URL}/groom/${invitationId}`, {
         headers: {
            Authorization: `Bearer ${cookies.get("userToken")}`,
         },
         withCredentials: true,
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
export const updateGroom = async (invitationId: string, groom: Groom): Promise<Response<Groom>> => {
   return await axios
      .put(`${config.BASE_URL}/groom/${invitationId}`, groom, {
         headers: {
            Authorization: `Bearer ${cookies.get("userToken")}`,
         },
         withCredentials: true,
      })
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};
export const useUpdateGroom = (invitationId: string) => {
   return useMutation<Response<Groom>, ResponseOnly, Groom, string[]>({
      mutationKey: ["groom"],
      mutationFn: async (groom: Groom): Promise<Response<Groom>> => {
         const data = await updateGroom(invitationId, groom);
         return data;
      },
      onSuccess(data) {
         return data;
      },
   });
};

// Bride
export const getBridesByInvitationId = async (invitationId: string): Promise<Response<Groom>> => {
   return await axios
      .get(`${config.BASE_URL}/bride/${invitationId}`, {
         headers: {
            Authorization: `Bearer ${cookies.get("userToken")}`,
         },
         withCredentials: true,
      })
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};
export const useGetBridesByInvitationId = (id: string) => {
   return useQuery<Groom, ResponseOnly, Groom>({
      queryKey: ["bride"],
      queryFn: async (): Promise<Groom> => {
         const data = await getBridesByInvitationId(id);
         return data.data;
      },
      enabled: !!id,
   });
};
export const updateBride = async (invitationId: string, bride: Groom): Promise<Response<Groom>> => {
   return await axios
      .put(`${config.BASE_URL}/bride/${invitationId}`, bride, {
         headers: {
            Authorization: `Bearer ${cookies.get("userToken")}`,
         },
         withCredentials: true,
      })
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};
export const useUpdateBride = (invitationId: string) => {
   return useMutation<Response<Groom>, ResponseOnly, Groom, string[]>({
      mutationKey: ["bride"],
      mutationFn: async (bride: Groom): Promise<Response<Groom>> => {
         const data = await updateBride(invitationId, bride);
         return data;
      },
      onSuccess(data) {
         return data;
      },
   });
};

// event
export const updateEvent = async (id: string, event: Event): Promise<Response<Event>> => {
   return await axios
      .put(`${config.BASE_URL}/event/${id}`, event, {
         headers: {
            Authorization: `Bearer ${cookies.get("userToken")}`,
         },
         withCredentials: true,
      })
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};
export const useUpdateEvent = () => {
   return useMutation<Response<Event>, ResponseOnly, { selectedId: string; newData: Event }, string[]>({
      mutationKey: ["event"],
      mutationFn: async ({ newData, selectedId }): Promise<Response<Event>> => {
         const data = await updateEvent(selectedId, newData);
         return data;
      },
      onSuccess(data) {
         return data;
      },
   });
};
export const createEventByInvitationId = async (invitationId: string, event: Event): Promise<Response<Event>> => {
   return await axios
      .post(`${config.BASE_URL}/event/${invitationId}`, event, {
         headers: {
            Authorization: `Bearer ${cookies.get("userToken")}`,
         },
         withCredentials: true,
      })
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};
export const useCreateEventByInvitationId = (id: string) => {
   return useMutation<Response<Event>, ResponseOnly, Event, string>({
      mutationKey: ["event"],
      mutationFn: async (event: Event): Promise<Response<Event>> => {
         const data = await createEventByInvitationId(id, event);
         return data;
      },
      onSuccess(data) {
         return data;
      },
   });
};
export const deleteEvent = async (id: string): Promise<ResponseOnly> => {
   return await axios
      .delete(`${config.BASE_URL}/event/${id}`, {
         headers: {
            Authorization: `Bearer ${cookies.get("userToken")}`,
         },
         withCredentials: true,
      })
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};
export const useDeleteEvent = () => {
   return useMutation<ResponseOnly, ResponseOnly, string, string[]>({
      mutationKey: ["event"],
      mutationFn: async (id: string): Promise<ResponseOnly> => {
         const data = await deleteEvent(id);
         return data;
      },
      onSuccess(data) {
         return data;
      },
   });
};
export const getEventsByInvitationId = async (invitationId: string): Promise<Response<Event[]>> => {
   return await axios
      .get(`${config.BASE_URL}/event/${invitationId}`, {
         headers: {
            Authorization: `Bearer ${cookies.get("userToken")}`,
         },
         withCredentials: true,
      })
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};
export const useGetEventsByInvitationId = (id: string) => {
   return useQuery<Event[], ResponseOnly, Event[]>({
      queryKey: ["event"],
      queryFn: async (): Promise<Event[]> => {
         const data = await getEventsByInvitationId(id);
         return data.data;
      },
      enabled: !!id,
   });
};

// guest
export const getGuestsByInvitationId = async (invitationId: string): Promise<Response<Guest[]>> => {
   return await axios
      .get(`${config.BASE_URL}/guest/${invitationId}`, {
         headers: {
            Authorization: `Bearer ${cookies.get("userToken")}`,
         },
         withCredentials: true,
      })
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};
export const useGetGuestsByInvitationId = (id: string) => {
   return useQuery<Guest[], ResponseOnly, Guest[]>({
      queryKey: ["guest"],
      queryFn: async (): Promise<Guest[]> => {
         const data = await getGuestsByInvitationId(id);
         return data.data;
      },
      enabled: !!id,
   });
};
export const updateGuest = async (id: string, guest: Guest): Promise<Response<Guest>> => {
   return await axios
      .put(`${config.BASE_URL}/guest/${id}`, guest, {
         headers: {
            Authorization: `Bearer ${cookies.get("userToken")}`,
         },
         withCredentials: true,
      })
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};
export const useUpdateGuest = () => {
   return useMutation<Response<Guest>, ResponseOnly, { selectedId: string; newData: Guest }, string[]>({
      mutationKey: ["guest"],
      mutationFn: async ({ newData, selectedId }): Promise<Response<Guest>> => {
         const data = await updateGuest(selectedId, newData);
         return data;
      },
      onSuccess(data) {
         return data;
      },
   });
};
export const createGuestByInvitationId = async (invitationId: string, guest: Guest): Promise<Response<Guest>> => {
   return await axios
      .post(`${config.BASE_URL}/guest/${invitationId}`, guest, {
         headers: {
            Authorization: `Bearer ${cookies.get("userToken")}`,
         },
         withCredentials: true,
      })
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};
export const useCreateGuestByInvitationId = (id: string) => {
   return useMutation<Response<Guest>, ResponseOnly, Guest, string>({
      mutationKey: ["guest"],
      mutationFn: async (guest: Guest): Promise<Response<Guest>> => {
         const data = await createGuestByInvitationId(id, guest);
         return data;
      },
      onSuccess(data) {
         return data;
      },
   });
};
export const deleteGuest = async (id: string): Promise<ResponseOnly> => {
   return await axios
      .delete(`${config.BASE_URL}/guest/${id}`, {
         headers: {
            Authorization: `Bearer ${cookies.get("userToken")}`,
         },
         withCredentials: true,
      })
      .then((res) => {
         return res.data;
      })
      .catch((err: AxiosError) => {
         throw err.response?.data;
      });
};
export const useDeleteGuest = () => {
   return useMutation<ResponseOnly, ResponseOnly, string, string[]>({
      mutationKey: ["guest"],
      mutationFn: async (id: string): Promise<ResponseOnly> => {
         const data = await deleteGuest(id);
         return data;
      },
      onSuccess(data) {
         return data;
      },
   });
};
