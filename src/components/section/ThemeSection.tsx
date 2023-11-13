"use client";
import { useEffect, useState } from "react";

const ThemeSection: React.FC = () => {
   const [cardLength, setCardLength] = useState(6);
   useEffect(() => {
      window.addEventListener("resize", controlCardLength);

      return () => {
         window.removeEventListener("resize", controlCardLength);
      };
   }, []);

   const controlCardLength = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth <= 640) {
         setCardLength(3);
      } else {
         setCardLength(6);
      }
   };

   return (
      <section className="responsive__container flex flex-col gap-y-6 md:gap-y-8 xl:gap-y-12">
         <div className="flex flex-col gap-y-2 justify-center items-center">
            <h2 className="text-display-xs md:text-display-sm xl:text-display-lg xl:max-w-[720px] text-center font-[500] font-Lora text-primary-950">
               Pilihan Tema yang Banyak, Sesuaikan dengan Keinginanmu
            </h2>
            <p className="text-body-md md:text-body-lg text-primary-800 xl:max-w-[420px] text-center">Polokrami memiliki berbagai macam tema undangan yang dapat disesuaikan dengan keinginanmu.</p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6 xl:gap-8">
            {Array.from({ length: cardLength }).map((_, i) => (
               <div key={i} className="flex flex-col border border-primary-200 rounded-2xl h-[400px]">
                  <div className="relative rounded-t-2xl bg-[url('/images/tema-undangan1.jpg')] h-full w-full bg-no-repeat bg-cover">
                     <span className="absolute label__green top-4 right-4">Starter</span>
                     <span className="absolute label__white bottom-4 left-4">Traditional minang</span>
                  </div>
                  <div className="flex gap-x-4 p-4">
                     <button className=" btn__tertiary flex-1">Detail</button>
                     <button className=" btn__secondary flex-1">Preview</button>
                  </div>
               </div>
            ))}
         </div>
         <button className="btn__primary w-full md:w-fit mx-auto">Lihat semua tema</button>
      </section>
   );
};

export default ThemeSection;
