"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay } from "swiper/modules";
import { testimoniData } from "@/store/staticStore";
import Image from "next/image";

const TestimoniCarousel: React.FC = () => {
   const createBgVariable = (background: string) => {
      const bgVariable: React.CSSProperties = { ["--image-url" as any]: `url(${background})` };
      return bgVariable;
   };
   return (
      <>
         <Swiper
            slidesPerView={1.1}
            loop={true}
            autoplay={{
               delay: 1000,
               disableOnInteraction: true,
            }}
            freeMode={false}
            spaceBetween={24}
            breakpoints={{
               400: {
                  slidesPerView: 1,
                  spaceBetween: 24,
               },
               460: {
                  slidesPerView: 1.5,
                  spaceBetween: 24,
               },
               640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
               },
               768: {
                  slidesPerView: 2.5,
                  spaceBetween: 24,
               },
               1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
               },
               1280: {
                  slidesPerView: 3.3,
                  spaceBetween: 32,
               },
            }}
            modules={[Autoplay]}
            className="card__carousel"
         >
            {testimoniData.map(({ imgFemale, imgMale, nameFemale, nameMale, date, quote, star, background }, i) => (
               <SwiperSlide key={i}>
                  <div id="testimoni-card-bg" style={createBgVariable(background)} className="relative img__shadow--violet bg-[image:var(--image-url)] bg-no-repeat">
                     <div className="absolute flex flex-col text-start gap-y-6 p-3 rounded-2xl right-3 left-3 bottom-3 h-[45%] bg-color__testimoni border border-violetSecondary-200">
                        <div className="flex justify-between items-center">
                           <div className="flex items-center">
                              <Image width={32} height={32} className="border border-[#DBD8EB] rounded-full object-cover w-8 h-8" src={imgMale} alt="avatar img" />
                              <Image width={32} height={32} className="ml-[-8px] border border-[#DBD8EB] rounded-full object-cover w-8 h-8" src={imgFemale} alt="avatar img" />
                           </div>
                           <div className="flex justify-end">
                              {Array.from({ length: star }).map((_, i) => (
                                 <Image key={i} width={16} height={16} src="/icons/star.svg" alt="star icon" />
                              ))}
                           </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                           <div className=" flex flex-col gap-y-1">
                              <h4 className=" text-violetSecondary-900 text-label-md font-[700]">
                                 {nameMale} & {nameFemale}
                              </h4>
                              <p className=" text-primary-600 text-body-sm">{date}</p>
                           </div>
                           <q className=" text-primary-950 text-body-md">{quote}</q>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
};

export default TestimoniCarousel;
