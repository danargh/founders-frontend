"use client";

import Footer from "@/components/section/Footer";
import Navbar from "@/components/section/Navbar";
import React from "react";
import { DocumentText } from "iconsax-react";
import { button } from "@/app/variants";
import AuthHOC from "@/components/hoc/AuthHOC";
import { useState } from "react";
import { SearchNormal, ArrowDown2, Link1, Calendar2 } from "iconsax-react";
import { InputFilter, OptionFilter } from "@/components/form/InputFilter";
import { StarterPackage, StarterPackageDashboard } from "@/components/ui/Package";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Invitation({}: Props) {
   const [search, setSearch] = useState<string>("");
   const [filter, setFilter] = useState<string>("");

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
                  <button className={`${button({ primary: "gray", size: { initial: "sm", md: "sm", xl: "sm" } })} w-fit col-span-2`}>Buat undangan</button>
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
               {Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} className="flex flex-col border rounded-2xl p-5 gap-y-4">
                     <div className="flex justify-between items-center">
                        <StarterPackageDashboard />
                        <button className={`${button({ secondary: "gray", size: { initial: "xs", md: "xs", xl: "xs" } })} w-fit col-span-2`}>Upgrade</button>
                     </div>
                     <div className="flex items-end gap-x-2 justify-between">
                        <div className="flex gap-x-4 items-end">
                           <Image src="/images/undangan-preview4.jpg" alt="" width={64} height={64} />
                           <div className="flex flex-col gap-y-2">
                              <h4>username</h4>
                              <Link href="/invitation/1" className="flex gap-x-2">
                                 <Link1 /> link website
                              </Link>
                              <div className="flex items-center gap-x-2">
                                 <Calendar2 />
                                 <p>Aktif hingga 31 Oktober 2025</p>
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
               ))}
            </section>
         </main>
      </>
   );
}

export default AuthHOC(Invitation);
