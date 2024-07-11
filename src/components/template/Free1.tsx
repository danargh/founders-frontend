"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

type Props = {};

export default function Free1() {
   const [isCoverOpen, setIsCoverOpen] = useState<boolean>(false);

   return (
      <section className="border border-primary-500 bg-pattern__template1 bg-[#e0ded7]">
         <header className="relative flex flex-col justify-center h-screen items-center gap-y-[40px] py-[60px]">
            <Image
               className="absolute left-[-140px] top-[-100px] dancing-leaf__animation"
               style={{ rotate: "180deg" }}
               width={400}
               height={400}
               src="/template1/header-flower.png"
               alt="header flower"
            />
            <Image className="absolute right-[-140px] bottom-[-100px] dancing-leaf__animation bottom-left__transform" width={400} height={400} src="/template1/header-flower.png" alt="header flower" />
            <div className="flex flex-col justify-center items-center gap-y-4">
               <p className="font-EBGaramond font-normal text-[24px]">THE WEDDING OF</p>
               <h1 className="font-PlayfairDisplay font-normal text-[56px] text-[#52320A]">Roberto & Jennifer</h1>
               <div>
                  <p className="border border-[#C5AD80] text-[#7D511E] rounded-full py-2 px-5 w-fit font-EBGaramond font-normal text-[24px]">12 . 12 . 2022</p>
               </div>
            </div>
            <div>
               <Image className="rounded-[32px] border border-[#C8B38B]" width={800} height={400} src="/template1/header.jpg" alt="header image" />
            </div>
         </header>

         <>
            <main>
               <section className="bg-pattern__template1 bg-[#E1D8C8]">
                  <h1>Hai</h1>
               </section>
            </main>
            <footer></footer>
         </>
      </section>
   );
}
