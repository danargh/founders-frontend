"use client";

import React, { useEffect } from "react";
import { useDashboardThemeSlice, DashboardThemeSlice, useUserSlice } from "@/store/store";
import { useStore } from "@/hooks";
import { useRouter } from "next/navigation";
import Form from "@/components/form/Form";
import { Input } from "@/components/form/Input";
import { Button, SubmitButton } from "@/components/ui/Button";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { button } from "@/app/variants";
import { CenterLoader } from "@/components/ui/Loader";
import AuthHOC from "@/components/hoc/AuthHOC";
import { Event as EventInterface } from "@/interfaces";

const EventSchema = yup.object().shape({
   invitationId: yup.string().required("Invitation id is required"),
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

const Event = () => {
   const dashboardThemeStore = useStore<DashboardThemeSlice, DashboardThemeSlice>(useDashboardThemeSlice, (state) => state);

   const {
      register: eventRegisterForm,
      handleSubmit: eventHandleSubmitForm,
      formState: { errors: eventErrors },
      reset: eventResetForm,
   } = useForm({
      resolver: yupResolver(EventSchema),
      defaultValues: {
         invitationId: "",
         category: "",
         title: "",
         date: new Date(),
         startTime: "",
         endTime: "",
         timezone: "",
         place: "",
         address: "",
         googleMapsUrl: "",
      },
   });

   useEffect(() => {}, []);

   const handleEventSubmit = (data: EventInterface) => {
      console.log(data);
   };

   return (
      <div className="flex flex-col gap-y-6">
         <section style={{ borderColor: dashboardThemeStore?.secondaryColor }} className="flex flex-col gap-y-6 p-6 border rounded-[32px]">
            <div className="flex flex-col gap-y-1">
               <h2 className=" text-display-sm font-Lora font-[500]">Acara</h2>
               <p>Silahkan tambahkan acara. Data acara masih dapat diubah setelah undangan selesai dibuat. </p>
            </div>
            <div>
               <ul className="flex flex-col gap-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                     <li className="w-full p-5 border border-mossGreenSecondary-100 rounded-xl" key={index}>
                        Event yang ditambahkan
                     </li>
                  ))}
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

export default AuthHOC(Event);
