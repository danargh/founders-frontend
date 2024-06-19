"use client";

import React, { useEffect, useState } from "react";
import { useDashboardThemeSlice, DashboardThemeSlice, useUserSlice, useInvitationStateSlice } from "@/store/store";
import { useStore } from "@/hooks";
import { useParams, useRouter } from "next/navigation";
import Form from "@/components/form/Form";
import { Input } from "@/components/form/Input";
import { Button, SubmitButton } from "@/components/ui/Button";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { button } from "@/app/variants";
import { CenterLoader } from "@/components/ui/Loader";
import AuthHOC from "@/components/hoc/AuthHOC";
import { Event, Response } from "@/interfaces";
import { useCreateEventByInvitationId, useDeleteEvent, useGetEventsByInvitationId, useUpdateEvent } from "@/api/invitation";
import { Edit, Location, Map, Trash } from "iconsax-react";
import moment from "moment";

const EventSchema = yup.object().shape({
   category: yup.string().required("Kategori is required"),
   title: yup.string().required("Judul is required"),
   date: yup.date().required("Tanggal is required"),
   startTime: yup.string().required("Waktu mulai is required"),
   endTime: yup.string().required("Waktu selesai is required"),
   timezone: yup.string().required("Zona waktu is required"),
   place: yup.string().required("Tempat is required"),
   address: yup.string().required("Alamat is required"),
   googleMapsUrl: yup.string().required("Google maps url is required"),
});

const Events = () => {
   const params = useParams();
   const dashboardThemeStore = useStore<DashboardThemeSlice, DashboardThemeSlice>(useDashboardThemeSlice, (state) => state);
   const { data: createEventData, status: createEventStatus, isPending: createEventPending, mutateAsync: mutateAsyncCreateEvent } = useCreateEventByInvitationId(params.dashboard as string);
   const { data: getEventData, status: getEventStatus, isPending: getEventPending } = useGetEventsByInvitationId(params.dashboard as string);
   const { data: deleteEventData, status: deleteEventStatus, isPending: deleteEventPending, mutate: mutateDeleteEvent } = useDeleteEvent();
   const { data: updateEventData, status: updateEventStatus, isPending: updateEventPending, mutate: mutateUpdateEvent } = useUpdateEvent();
   const invitation = useStore(useInvitationStateSlice, (state) => state.invitation);
   const [theme, setTheme] = useState<string>("");
   const [events, setEvents] = useState<Event[]>([]);
   const [updateMode, setUpdateMode] = useState<boolean>(false);
   const [selectedId, setSelectedId] = useState<string>("");

   const {
      register: eventRegisterForm,
      handleSubmit: eventHandleSubmitForm,
      formState: { errors: eventErrors },
      reset: eventResetForm,
   } = useForm({
      resolver: yupResolver(EventSchema),
   });

   useEffect(() => {
      if (getEventStatus === "success") {
         setEvents(getEventData);
      }
      if (invitation?.pricingCategory === "premium") {
         setTheme("orange");
      } else if (invitation?.pricingCategory === "eksklusif") {
         setTheme("violet");
      } else {
         setTheme("green");
      }
   }, [getEventStatus, getEventData, invitation?.pricingCategory]);

   const handleEventSubmit = async (newData: Event, event: React.FormEvent) => {
      event.preventDefault();
      if (updateMode === false) {
         await mutateAsyncCreateEvent(newData, {
            onSuccess: (data) => {
               newData.id = data.data.id;
               newData.invitationId = data.data.invitationId;
               setEvents((prev) => [...prev, newData]);
            },
         });
      } else {
         mutateUpdateEvent(
            { selectedId, newData },
            {
               onSuccess: (data) => {
                  setEvents((prev) => prev.map((event) => (event.id === data.data.id ? newData : event)));
               },
            },
         );
         setUpdateMode(false);
      }
      eventResetForm({
         category: "",
         title: "",
         date: new Date(),
         startTime: "",
         endTime: "",
         timezone: "",
         place: "",
         address: "",
         googleMapsUrl: "",
      });
   };

   const deleteEventHandler = (id: string) => {
      mutateDeleteEvent(id, {
         onSuccess: () => {
            setEvents((prev) => prev.filter((event) => event.id !== id));
         },
      });
   };

   const updateEventHandler = (id: string) => {
      const event = events.find((event) => event.id === id);
      setSelectedId(id);
      eventResetForm(event);
      setUpdateMode(true);
   };

   if (getEventPending) return <CenterLoader />;

   return (
      <div className="flex flex-col gap-y-6">
         <section style={{ borderColor: dashboardThemeStore?.secondaryColor }} className="flex flex-col gap-y-6 p-6 border rounded-[32px]">
            <div className="flex flex-col gap-y-1">
               <h2 className=" text-display-sm font-Lora font-[500]">Acara</h2>
               <p>Silahkan tambahkan acara. Data acara masih dapat diubah setelah undangan selesai dibuat. </p>
            </div>
            <div>
               <ul className="flex flex-col gap-y-4">
                  {events.length > 0 ? (
                     events.map((event, index) => (
                        <li
                           key={index}
                           className="flex flex-col gap-y-2 border p-6 rounded-3xl"
                           style={{ backgroundColor: dashboardThemeStore?.tertiaryColor, borderColor: dashboardThemeStore?.secondaryColor }}
                        >
                           <p
                              className="py-2 px-3 rounded-full text-label-md w-fit font-bold"
                              style={{ backgroundColor: dashboardThemeStore?.secondaryColor, color: dashboardThemeStore?.primaryColor }}
                           >
                              {event.category}
                           </p>
                           <h3 className="text-display-sm font-Lora font-[500]">{event.title}</h3>
                           <p>
                              {event.startTime} - {event.endTime}
                           </p>
                           <p>{moment(event.date).format("DD MMM YYYY")}</p>
                           <p>{event.place}</p>
                           <p className="flex items-center gap-x-2">
                              <Location /> {event.address}
                           </p>
                           <div className="flex justify-between items-center">
                              <p className="flex items-center gap-x-2">
                                 <Map /> {event.googleMapsUrl}
                              </p>
                              <div className="flex items-center gap-x-4">
                                 <button
                                    onClick={() => {
                                       deleteEventHandler(event.id || "");
                                    }}
                                    className={`${button({ tertiary: theme as any, size: { initial: "sm", md: "sm", xl: "sm" } })} w-fit h-fit !p-3`}
                                 >
                                    <Trash size={16} />
                                 </button>
                                 <button
                                    onClick={() => {
                                       updateEventHandler(event.id || "");
                                    }}
                                    className={`${button({ tertiary: theme as any, size: { initial: "sm", md: "sm", xl: "sm" } })} w-fit h-fit !p-3`}
                                 >
                                    <Edit size={16} />
                                 </button>
                              </div>
                           </div>
                        </li>
                     ))
                  ) : (
                     <div>Event Kosong</div>
                  )}
               </ul>
            </div>
            <div className="flex flex-col gap-y-2">
               <Form onSubmit={handleEventSubmit} handleSubmit={eventHandleSubmitForm} register={eventRegisterForm} className="grid grid-cols-2 gap-y-4 gap-x-4 w-full">
                  <hr className=" text-primary-100" />

                  {updateMode === false ? (
                     <SubmitButton isLoading={false} className={`${button({ tertiary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-fit ml-auto`}>
                        Simpan
                     </SubmitButton>
                  ) : (
                     <SubmitButton isLoading={false} className={`${button({ tertiary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-fit ml-auto`}>
                        Perbarui
                     </SubmitButton>
                  )}

                  <Input className="col-span-2" name="title" type="text" label="Judul" error={eventErrors.title?.message} />
                  <Input name="category" type="text" label="Kategori" error={eventErrors.category?.message} />
                  <Input name="date" type="date" label="Tanggal" error={eventErrors.date?.message} />
                  <Input name="startTime" type="time" label="Waktu mulai" error={eventErrors.startTime?.message} />
                  <Input name="endTime" type="time" label="Waktu selesai" error={eventErrors.endTime?.message} />
                  <Input className="col-span-2" name="timezone" type="text" label="Zona waktu" error={eventErrors.timezone?.message} />
                  <Input className="col-span-2" name="place" type="text" label="Tempat" error={eventErrors.place?.message} />
                  <Input className="col-span-2" name="address" type="text" label="Alamat" error={eventErrors.address?.message} />
                  <Input className="col-span-2" name="googleMapsUrl" type="text" label="Google maps url" error={eventErrors.googleMapsUrl?.message} />
               </Form>
            </div>
         </section>
      </div>
   );
};

export default AuthHOC(Events);
