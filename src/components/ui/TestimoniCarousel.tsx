"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay } from "swiper/modules";
import TestimoniCard from "./TestimoniCard";
import { testimoniData } from "@/store/staticStore";

const TestimoniCarousel: React.FC = () => {
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
            {testimoniData.map((testimoniItem, i) => (
               <SwiperSlide key={i}>
                  <TestimoniCard testimoniItem={testimoniItem} />
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
};

export default TestimoniCarousel;
