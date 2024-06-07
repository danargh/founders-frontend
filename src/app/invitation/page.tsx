"use client";

import Footer from "@/components/section/Footer";
import Navbar from "@/components/section/Navbar";
import React, { useEffect } from "react";
import { DocumentText } from "iconsax-react";
import { button } from "@/app/variants";
import AuthHOC from "@/components/hoc/AuthHOC";
import { useState } from "react";
import { SearchNormal, ArrowDown2, Link1, Calendar2 } from "iconsax-react";
import { InputFilter, OptionFilter } from "@/components/form/InputFilter";
import { StarterPackage, StarterPackageDashboard } from "@/components/ui/Package";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/ui/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Invitation, Invitations, UserSetting } from "@/interfaces";
import Form from "@/components/form/Form";
import { Input } from "@/components/form/Input";
import { SubmitButton } from "@/components/ui/Button";
import { usePostInvitation, useGetInvitation } from "@/api/invitation";
import moment from "moment";

type Props = {
   user: UserSetting;
};

const InvitationSchema = yup.object().shape({
   websiteUrl: yup.string().required("Website URL is required"),
   pricingCategory: yup.string().required("Pricing category is required"),
   dueDateActive: yup.date().required("Due date is required"),
});

function InvitationPage({ user }: Props) {
   const [search, setSearch] = useState<string>("");
   const [filter, setFilter] = useState<string>("");
   const [isModal, setIsModal] = useState<boolean>(false);
   const [invitations, setInvitation] = useState<Invitation[]>([]);
   const { data: invitationAdded, status: invitationAddedStatus, mutate: addInvitation, isPending } = usePostInvitation();
   const { data: invitationData, status: invitationStatus, error: invitationError } = useGetInvitation();

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      resolver: yupResolver(InvitationSchema),
      defaultValues: {
         dueDateActive: new Date(),
      },
   });

   useEffect(() => {
      console.log(invitationData);
      if (invitationStatus === "success") {
         setInvitation((prev) => [...prev, ...invitationData]);
      }
   }, [invitationStatus, invitationData]);

   const onSubmit = (data: Invitation, event: React.FormEvent) => {
      event.preventDefault();
      addInvitation(data);
      setInvitation((prev) => [...prev, data]);
      reset();
   };

   const formatDate = (date: Date) => {
      return moment(date).format("DD MMM YYYY");
   };

   const searchHandler = (input: string) => {
      setSearch(input);
      console.log(search);
   };

   return (
      <>
         <Navbar />
         <main className="responsive__container mt-8 flex flex-col gap-y-8">
            <header className="flex flex-col gap-y-6">
               <DocumentText />
               <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-y-2">
                     <h2 className="font-Lora text-display-md">List Undangan </h2>
                     <p>Buat berbagai undangan dalam satu platform di Polokrami</p>
                  </div>
                  <button
                     onClick={() => {
                        setIsModal(true);
                     }}
                     className={`${button({ primary: "gray", size: { initial: "sm", md: "sm", xl: "sm" } })} w-fit col-span-2`}
                  >
                     Buat undangan
                  </button>
                  <Modal isModal={isModal} onClose={setIsModal}>
                     <Form buttonLabel="Change Email" register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} className="flex flex-col gap-y-4 w-full">
                        <Input name="websiteUrl" type="text" label="Website URL" placeholder="polokrami.com/danardandia" error={errors.websiteUrl?.message} autoFocus />
                        <Input name="pricingCategory" type="text" label="Paket Harga" placeholder="free" error={errors.pricingCategory?.message} />
                        <p>Website aktif sampai : 17 Juli 2024</p>

                        <SubmitButton isLoading={isPending} className={`${button({ primary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-full`}>
                           Buat undangan
                        </SubmitButton>
                     </Form>
                  </Modal>
               </div>
            </header>
            <hr style={{ borderColor: "#F0EEEB" }} />
            <section className="flex justify-between items-center">
               <div className="flex gap-x-4">
                  <div className="flex justify-center items-center px-5 bg-primary-100 rounded-full font-bold">200 undangan</div>
                  <InputFilter placeholder="Cari undangan" onSetInput={searchHandler}>
                     <SearchNormal />
                  </InputFilter>
                  <OptionFilter
                     options={[
                        { value: "all", label: "Semua" },
                        { value: "wedding", label: "Pernikahan" },
                        { value: "birthday", label: "Ulang Tahun" },
                     ]}
                     onSetInput={setFilter}
                  >
                     <ArrowDown2 />
                  </OptionFilter>
               </div>
            </section>
            <section className="flex w-full gap-y-4 flex-col">
               {invitations.length === 0 ? (
                  <h3 className="flex justify-center items-center">Belum ada undangan</h3>
               ) : (
                  invitations.map((data, index) => (
                     <div key={index} className="flex flex-col border rounded-2xl p-5 gap-y-4">
                        <div className="flex justify-between items-center">
                           <StarterPackageDashboard />
                           <button className={`${button({ secondary: "gray", size: { initial: "xs", md: "xs", xl: "xs" } })} w-fit col-span-2`}>Upgrade</button>
                        </div>
                        <div className="flex items-end gap-x-2 justify-between">
                           <div className="flex gap-x-4 items-end">
                              <Image src="/images/undangan-preview4.jpg" alt="" width={64} height={64} />
                              <div className="flex flex-col gap-y-2">
                                 <h4>{user.username}</h4>
                                 <Link href="/invitation/1" className="flex gap-x-2">
                                    <Link1 /> {data.websiteUrl}
                                 </Link>
                                 <div className="flex items-center gap-x-2">
                                    <Calendar2 />
                                    <p>Aktif hingga {formatDate(data.dueDateActive)}</p>
                                 </div>
                              </div>
                           </div>
                           <div className="flex items-center gap-x-2">
                              <button className={`${button({ tertiary: "gray", size: { initial: "sm", md: "sm", xl: "sm" } })} w-fit col-span-2`}>Ubah alamat website</button>
                              <Link href="/dashboard" className={`${button({ secondary: "gray", size: { initial: "sm", md: "sm", xl: "sm" } })} w-fit col-span-2`}>
                                 Dashboard
                              </Link>
                           </div>
                        </div>
                     </div>
                  ))
               )}
            </section>
         </main>
      </>
   );
}

export default AuthHOC(InvitationPage);
