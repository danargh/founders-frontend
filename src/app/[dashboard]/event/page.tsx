"use client";

import React, { useEffect, useState } from "react";
import { useDashboardThemeSlice, DashboardThemeSlice, useUserSlice } from "@/store/store";
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
import { useCreateEventByInvitationId, useGetEventsByInvitationId } from "@/api/invitation";

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
   const [events, setEvents] = useState<Event[]>([]);

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
   }, [getEventStatus, getEventData]);

   const handleEventSubmit = async (newData: Event, event: React.FormEvent) => {
      event.preventDefault();
      console.log(newData);

      await mutateAsyncCreateEvent(newData, {
         onSuccess: (data) => {
            newData.id = data.data.id;
            newData.invitationId = data.data.invitationId;
            setEvents((prev) => [...prev, newData]);
         },
      });
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
                        <li key={index} className="flex flex-col gap-y-2">
                           <h3 className="text-display-sm font-Lora font-[500]">{event.title}</h3>
                           <p>{event.category}</p>
                           <p>
                              {event.startTime} - {event.endTime}
                           </p>
                           <p>{event.place}</p>
                           <p>{event.address}</p>
                           <p>{event.googleMapsUrl}</p>
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

                  <SubmitButton isLoading={false} className={`${button({ tertiary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-fit ml-auto`}>
                     Simpan
                  </SubmitButton>
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
