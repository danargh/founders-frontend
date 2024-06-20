"use client";

import React from "react";
import { useStore } from "@/hooks";
import { DashboardThemeSlice, useDashboardThemeSlice } from "@/store/store";
import { button } from "@/app/variants";
import { Add, ArrowLeft, ArrowRight, Edit, ElementEqual, Share, Trash } from "iconsax-react";
import { InputFilter, OptionFilter } from "../form/InputFilter";
import { SearchNormal, ArrowDown2 } from "iconsax-react";
import Modal from "../ui/Modal";
import Form from "../form/Form";
import { Input } from "../form/Input";
import { SubmitButton } from "../ui/Button";
import * as yup from "yup";

export const GuestSchema = yup.object().shape({
   fullName: yup.string().required("Full name is required"),
   address: yup.string().required("Address is required"),
   category: yup.string().required("Category is required"),
   status: yup.string().required("Status is required"),
});

type GuestProps = {
   theme: string;
   dashboardThemeStore: DashboardThemeSlice | undefined;
};

export default function GuestBook({ theme, dashboardThemeStore }: GuestProps) {
   const [isModal, setIsModal] = React.useState<boolean>(false);

   const searchHandler = (input: string) => {
      console.log(input);
   };
   return (
      <section style={{ borderColor: dashboardThemeStore?.secondaryColor }} className="flex flex-col gap-y-6 p-6 border rounded-[32px]">
         <div className="flex gap-y-1 justify-between items-end">
            <div className="flex flex-col gap-y-1">
               <h2 className=" text-display-sm font-Lora font-[500]">Buku Tamu</h2>
               <p>Data tamu masih dapat diubah setelah undangan selesai dibuat. </p>
            </div>
            <div className="flex gap-x-4">
               <button className={`${button({ tertiary: theme as any, size: { initial: "sm", md: "sm", xl: "sm" } })} w-fit h-fit`}>
                  <ElementEqual />
                  Import Data
               </button>
               <button className={`${button({ primary: theme as any, size: { initial: "sm", md: "sm", xl: "sm" } })} w-fit h-fit`}>
                  <Add />
                  Tambah
               </button>
               {/* <Modal isModal={isModal} onClose={setIsModal}>
                  <Form buttonLabel="Change Email" register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} className="flex flex-col gap-y-4 w-full">
                     <Input name="websiteUrl" type="text" label="Website URL" placeholder="polokrami.com/danardandia" error={errors.websiteUrl?.message} autoFocus />
                     <Input name="pricingCategory" type="text" label="Paket Harga" placeholder="free" error={errors.pricingCategory?.message} />
                     <p>Website aktif sampai : 17 Juli 2024</p>

                     <SubmitButton isLoading={isPending} className={`${button({ primary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-full`}>
                        Buat undangan
                     </SubmitButton>
                  </Form>
               </Modal> */}
            </div>
         </div>
         <div className="flex flex-col gap-y-2">
            <hr className=" text-primary-100" />
            <div className="flex justify-between">
               <div className="flex gap-x-4">
                  <div className="flex justify-center items-center px-5 text-label-md bg-primary-100 rounded-full font-bold">100 Tamu</div>
                  <InputFilter placeholder="Cari undangan" onSetInput={searchHandler}>
                     <SearchNormal />
                  </InputFilter>
                  <OptionFilter
                     options={[
                        { value: "all", label: "Semua" },
                        { value: "personal", label: "Personal" },
                        { value: "umum", label: "Umum" },
                     ]}
                     onSetInput={() => {}}
                  >
                     <ArrowDown2 />
                  </OptionFilter>
                  <OptionFilter
                     options={[
                        { value: "all", label: "Semua" },
                        { value: "personal", label: "Personal" },
                        { value: "umum", label: "Umum" },
                     ]}
                     onSetInput={() => {}}
                  >
                     <ArrowDown2 />
                  </OptionFilter>
                  <OptionFilter
                     options={[
                        { value: "all", label: "Semua" },
                        { value: "personal", label: "Personal" },
                        { value: "umum", label: "Umum" },
                     ]}
                     onSetInput={() => {}}
                  >
                     <ArrowDown2 />
                  </OptionFilter>
               </div>
               <OptionFilter
                  options={[
                     { value: "all", label: "Semua" },
                     { value: "personal", label: "Personal" },
                     { value: "umum", label: "Umum" },
                  ]}
                  onSetInput={() => {}}
               >
                  <ArrowDown2 />
               </OptionFilter>
            </div>
         </div>
         <div className="grid grid-cols-1 gap-x-4 gap-y-3 w-full">
            {Array.from({ length: 3 }).map((_, index) => (
               <div key={index} className="flex gap-x-5 w-full">
                  <div className="flex justify-center items-center bg-primary-100 w-[48px] h-[48px] rounded-full text-[24px]">D</div>
                  <div className="flex flex-col gap-y-4 p-6 border border-primary-200 rounded-3xl w-full">
                     <div>
                        <h4 className="text-heading-xs">Boa Hancock</h4>
                        <p className="text-body-md">Jalan Ciseke Besar, Desa Cikeruh, Kecamatan Jatinangor, Kabupaten Sumedang</p>
                     </div>
                     <div className="flex justify-between items-end">
                        <div className="flex gap-x-4">
                           <div
                              className="px-4 py-2 rounded-full text-label-sm font-semibold"
                              style={{ backgroundColor: dashboardThemeStore?.secondaryColor, color: dashboardThemeStore?.primaryColor }}
                           >
                              Personal
                           </div>
                        </div>
                        <div className="flex gap-x-4">
                           <button className={`${button({ tertiary: theme as any, size: { initial: "sm", md: "sm", xl: "sm" } })} w-fit h-fit !p-3`}>
                              <Trash size={16} />
                           </button>
                           <button className={`${button({ tertiary: theme as any, size: { initial: "sm", md: "sm", xl: "sm" } })} w-fit h-fit !p-3`}>
                              <Edit size={16} />
                           </button>
                           <button className={`${button({ tertiary: theme as any, size: { initial: "sm", md: "sm", xl: "sm" } })} w-fit h-fit !p-3`}>
                              <Share size={16} />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
            <div className="flex justify-between">
               <button className={`${button({ tertiary: theme as any, size: { initial: "sm", md: "sm", xl: "sm" } })} w-[48px] h-[48px] !p-0`}>
                  <ArrowLeft size={16} />
               </button>
               <div className="flex gap-x-4">
                  <button className={`${button({ tertiary: theme as any, size: { initial: "sm", md: "sm", xl: "sm" } })} w-[48px] h-[48px] !p-0`}>1</button>
                  <button className={`${button({ tertiary: theme as any, size: { initial: "sm", md: "sm", xl: "sm" } })} w-[48px] h-[48px] !p-0`}>2</button>
                  <button className={`${button({ tertiary: theme as any, size: { initial: "sm", md: "sm", xl: "sm" } })} w-[48px] h-[48px] !p-0`}>3</button>
               </div>
               <button className={`${button({ tertiary: theme as any, size: { initial: "sm", md: "sm", xl: "sm" } })} w-[48px] h-[48px] !p-0`}>
                  <ArrowRight size={16} />
               </button>
            </div>
         </div>
      </section>
   );
}
