"use client";

import React, { FC, use, useEffect, useMemo } from "react";
import { useDashboardThemeSlice, DashboardThemeSlice, useUserSlice } from "@/store/store";
import { useCookies, useStore } from "@/hooks";
import { useRouter } from "next/navigation";
import { useValidateToken } from "@/api/auth";
import { Loader } from "@/components/ui/Loader";
import Form from "@/components/form/Form";
import { Input } from "@/components/form/Input";
import Link from "next/link";
import { SubmitButton } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { button } from "@/app/variants";
import { CenterLoader } from "@/components/ui/Loader";
import { Groom } from "@/interfaces";
import AuthHOC from "@/components/hoc/AuthHOC";
import { useGetGroomsByInvitationId, usePostGroom } from "@/api/invitation";

// validation
const GroomSchema = yup.object().shape({
   fullName: yup.string().required("Nama is required"),
   nickName: yup.string().required("Nama panggilan is required"),
   childOrder: yup.number().required("Anak ke is required"),
   fatherName: yup.string().required("Nama ayah is required"),
   motherName: yup.string().required("Nama ibu is required"),
   address: yup.string().required("Alamat is required"),
});

const Profile = ({ params }: { params: { dashboard: string } }) => {
   const router = useRouter();
   const { data: getGroomData, status: getGroomStatus, isPending: getGroomPending } = useGetGroomsByInvitationId(params.dashboard);
   const { data: postGroomData, status: postGroomStatus, isPending: postGroomPending, mutate: mutatePostGroom } = usePostGroom();
   const dashboardThemeStore = useStore<DashboardThemeSlice, DashboardThemeSlice>(useDashboardThemeSlice, (state) => state);

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      resolver: yupResolver(GroomSchema),
   });

   useEffect(() => {
      if (getGroomStatus === "success") {
         console.log(getGroomData);
         reset({
            fullName: getGroomData?.fullName || "",
            nickName: getGroomData?.nickName || "",
            childOrder: getGroomData?.childOrder || 0,
            fatherName: getGroomData?.fatherName || "",
            motherName: getGroomData?.motherName || "",
            address: getGroomData?.address || "",
         });
      }
   }, [getGroomData, getGroomStatus, reset]);

   const onSubmit = (data: Groom, event: React.FormEvent) => {
      event.preventDefault();
      const newData = {
         ...data,
         invitationId: params.dashboard,
      };
      mutatePostGroom(newData);
   };

   if (getGroomStatus === "pending") {
      return <CenterLoader />;
   }

   if (getGroomStatus === "error" || getGroomStatus === "success") {
      return (
         <div className="flex flex-col gap-y-6">
            <section style={{ borderColor: dashboardThemeStore?.secondaryColor }} className="flex flex-col gap-y-6 p-6 border rounded-[32px]">
               <div className="flex flex-col gap-y-1">
                  <h2 className=" text-display-sm font-Lora font-[500]">Profil Pengantin Pria</h2>
                  <p>Data acara masih dapat diubah setelah undangan selesai dibuat. </p>
               </div>
               <div className="flex flex-col gap-y-2">
                  <hr className=" text-primary-100" />
                  <Form register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} className="grid grid-cols-2 gap-y-4 gap-x-4 w-full">
                     <h3 className="text-heading-sm font-medium mt-1">Informasi Pribadi</h3>
                     <SubmitButton isLoading={postGroomPending} className={`${button({ tertiary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-fit ml-auto`}>
                        Simpan
                     </SubmitButton>
                     <Input name="fullName" type="text" label="Nama Lengkap" placeholder="" error={errors.fullName?.message} />
                     <Input name="nickName" type="text" label="Nama Panggilan" placeholder="" error={errors.nickName?.message} />
                     <Input name="childOrder" className="col-span-2" type="number" label="Anak ke" placeholder="" error={errors.childOrder?.message} />
                     <Input name="fatherName" type="text" label="Nama Bapak" placeholder="" error={errors.fatherName?.message} />
                     <Input name="motherName" type="text" label="Nama Ibu" placeholder="" error={errors.motherName?.message} />
                     <Input className="col-span-2" name="address" type="text" label="Alamat" placeholder="" error={errors.address?.message} />
                  </Form>
               </div>
            </section>
            <section style={{ borderColor: dashboardThemeStore?.secondaryColor }} className="flex flex-col gap-y-6 p-6 border rounded-[32px]">
               <div className="flex flex-col gap-y-1">
                  <h2 className=" text-display-sm font-Lora font-[500]">Profil Pengantin Wanita</h2>
                  <p>Data acara masih dapat diubah setelah undangan selesai dibuat. </p>
               </div>
               <hr className=" text-primary-100" />
               <div className=" grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6"></div>
            </section>
         </div>
      );
   }
};

export default AuthHOC(Profile);
