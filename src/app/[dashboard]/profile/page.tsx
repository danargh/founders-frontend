"use client";

import React, { useEffect } from "react";
import { useDashboardThemeSlice, DashboardThemeSlice, useUserSlice } from "@/store/store";
import { useStore } from "@/hooks";
import { useRouter } from "next/navigation";
import Form from "@/components/form/Form";
import { Input } from "@/components/form/Input";
import { SubmitButton } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { button } from "@/app/variants";
import { CenterLoader } from "@/components/ui/Loader";
import { Groom } from "@/interfaces";
import AuthHOC from "@/components/hoc/AuthHOC";
import { useGetBridesByInvitationId, useGetGroomsByInvitationId, useUpdateBride, useUpdateGroom } from "@/api/invitation";

// validation
const GroomSchema = yup.object().shape({
   fullName: yup.string().required("Nama is required"),
   nickName: yup.string().required("Nama panggilan is required"),
   childOrder: yup.number().required("Anak ke is required"),
   fatherName: yup.string().required("Nama ayah is required"),
   motherName: yup.string().required("Nama ibu is required"),
   address: yup.string().required("Alamat is required"),
});
const BrideSchema = yup.object().shape({
   fullName: yup.string().required("Nama is required"),
   nickName: yup.string().required("Nama panggilan is required"),
   childOrder: yup.number().required("Anak ke is required"),
   fatherName: yup.string().required("Nama ayah is required"),
   motherName: yup.string().required("Nama ibu is required"),
   address: yup.string().required("Alamat is required"),
});

const Profile = ({ params }: { params: { dashboard: string } }) => {
   const { data: getGroomData, status: getGroomStatus, isPending: getGroomPending } = useGetGroomsByInvitationId(params.dashboard);
   const { data: updateGroomData, status: updateGroomStatus, isPending: updateGroomPending, mutate: mutateUpdateGroom } = useUpdateGroom(params.dashboard);
   const { data: getBrideData, status: getBrideStatus, isPending: getBridePending } = useGetBridesByInvitationId(params.dashboard);
   const { data: updateBrideData, status: updateBrideStatus, isPending: updateBridePending, mutate: mutateUpdateBride } = useUpdateBride(params.dashboard);
   const dashboardThemeStore = useStore<DashboardThemeSlice, DashboardThemeSlice>(useDashboardThemeSlice, (state) => state);

   const {
      register: groomRegisterForm,
      handleSubmit: groomHandleSubmitForm,
      formState: { errors: groomErrors },
      reset: groomResetForm,
   } = useForm({
      resolver: yupResolver(GroomSchema),
   });

   const {
      register: brideRegisterForm,
      handleSubmit: brideHandleSubmitForm,
      formState: { errors: brideErrors },
      reset: brideResetForm,
   } = useForm({
      resolver: yupResolver(BrideSchema),
   });

   useEffect(() => {
      // groom
      if (getGroomStatus === "success") {
         groomResetForm({
            fullName: getGroomData?.fullName || "",
            nickName: getGroomData?.nickName || "",
            childOrder: getGroomData?.childOrder || 0,
            fatherName: getGroomData?.fatherName || "",
            motherName: getGroomData?.motherName || "",
            address: getGroomData?.address || "",
         });
      } else if (getGroomStatus === "error") {
         groomResetForm({
            fullName: "",
            nickName: "",
            childOrder: 0,
            fatherName: "",
            motherName: "",
            address: "",
         });
      }

      // bride
      if (getBrideStatus === "success") {
         brideResetForm({
            fullName: getBrideData?.fullName || "",
            nickName: getBrideData?.nickName || "",
            childOrder: getBrideData?.childOrder || 0,
            fatherName: getBrideData?.fatherName || "",
            motherName: getBrideData?.motherName || "",
            address: getBrideData?.address || "",
         });
      } else if (getBrideStatus === "error") {
         brideResetForm({
            fullName: "",
            nickName: "",
            childOrder: 0,
            fatherName: "",
            motherName: "",
            address: "",
         });
      }
   }, [getGroomData, getGroomStatus, groomResetForm, getBrideData, getBrideStatus, brideResetForm]);

   const groomOnSubmit = (data: Groom, event: React.FormEvent) => {
      event.preventDefault();
      const newData = {
         ...data,
         invitationId: params.dashboard,
      };
      mutateUpdateGroom(newData);
   };
   const brideOnSubmit = (data: Groom, event: React.FormEvent) => {
      event.preventDefault();
      console.log(data);
      const newData = {
         ...data,
         invitationId: params.dashboard,
      };
      mutateUpdateBride(newData);
   };

   if (getGroomStatus === "pending" && getBrideStatus === "pending") {
      return <CenterLoader />;
   }

   if (getGroomStatus === "error" || getGroomStatus === "success" || getBrideStatus === "error" || getBrideStatus === "success") {
      return (
         <div className="flex flex-col gap-y-6">
            <section style={{ borderColor: dashboardThemeStore?.secondaryColor }} className="flex flex-col gap-y-6 p-6 border rounded-[32px]">
               <div className="flex flex-col gap-y-1">
                  <h2 className=" text-display-sm font-Lora font-[500]">Profil Pengantin Pria</h2>
                  <p>Data acara masih dapat diubah setelah undangan selesai dibuat. </p>
               </div>
               <div className="flex flex-col gap-y-2">
                  <hr className=" text-primary-100" />
                  <Form register={groomRegisterForm} handleSubmit={groomHandleSubmitForm} onSubmit={groomOnSubmit} className="grid grid-cols-2 gap-y-4 gap-x-4 w-full">
                     <h3 className="text-heading-sm font-medium mt-1">Informasi Pribadi</h3>
                     <SubmitButton isLoading={updateGroomPending} className={`${button({ tertiary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-fit ml-auto`}>
                        Simpan
                     </SubmitButton>
                     <Input name="fullName" type="text" label="Nama Lengkap" placeholder="" error={groomErrors.fullName?.message} />
                     <Input name="nickName" type="text" label="Nama Panggilan" placeholder="" error={groomErrors.nickName?.message} />
                     <Input name="childOrder" className="col-span-2" type="number" label="Anak ke" placeholder="" error={groomErrors.childOrder?.message} />
                     <Input name="fatherName" type="text" label="Nama Bapak" placeholder="" error={groomErrors.fatherName?.message} />
                     <Input name="motherName" type="text" label="Nama Ibu" placeholder="" error={groomErrors.motherName?.message} />
                     <Input className="col-span-2" name="address" type="text" label="Alamat" placeholder="" error={groomErrors.address?.message} />
                  </Form>
               </div>
            </section>
            <section style={{ borderColor: dashboardThemeStore?.secondaryColor }} className="flex flex-col gap-y-6 p-6 border rounded-[32px]">
               <div className="flex flex-col gap-y-1">
                  <h2 className=" text-display-sm font-Lora font-[500]">Profil Pengantin Wanita</h2>
                  <p>Data acara masih dapat diubah setelah undangan selesai dibuat. </p>
               </div>
               <div className=" flex flex-col gap-y-2">
                  <hr className=" text-primary-100" />
                  <Form register={brideRegisterForm} handleSubmit={brideHandleSubmitForm} onSubmit={brideOnSubmit} className="grid grid-cols-2 gap-y-4 gap-x-4 w-full">
                     <h3 className="text-heading-sm font-medium mt-1">Informasi Pribadi</h3>
                     <SubmitButton isLoading={updateBridePending} className={`${button({ tertiary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-fit ml-auto`}>
                        Simpan
                     </SubmitButton>
                     <Input name="fullName" type="text" label="Nama Lengkap" placeholder="" error={brideErrors.fullName?.message} />
                     <Input name="nickName" type="text" label="Nama Panggilan" placeholder="" error={brideErrors.nickName?.message} />
                     <Input name="childOrder" className="col-span-2" type="number" label="Anak ke" placeholder="" error={brideErrors.childOrder?.message} />
                     <Input name="fatherName" type="text" label="Nama Bapak" placeholder="" error={brideErrors.fatherName?.message} />
                     <Input name="motherName" type="text" label="Nama Ibu" placeholder="" error={brideErrors.motherName?.message} />
                     <Input className="col-span-2" name="address" type="text" label="Alamat" placeholder="" error={brideErrors.address?.message} />
                  </Form>
               </div>
            </section>
         </div>
      );
   }
};

export default AuthHOC(Profile);
