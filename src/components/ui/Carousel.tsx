"use client";

import React from "react";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay } from "swiper/modules";
type Props = {};

const Carousel: React.FC = ({}: Props) => {
   return (
      <>
         <Swiper
            slidesPerView={8}
            loop={true}
            speed={5000}
            autoplay={{
               delay: 0,
               disableOnInteraction: false,
            }}
            freeMode={false}
            spaceBetween={0}
            breakpoints={{
               0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
               },
               460: {
                  slidesPerView: 3,
                  spaceBetween: 10,
               },
               640: {
                  slidesPerView: 4,
                  spaceBetween: 10,
               },
               780: {
                  slidesPerView: 5,
                  spaceBetween: 10,
               },
               1024: {
                  slidesPerView: 6,
                  spaceBetween: 10,
               },
            }}
            modules={[Autoplay]}
            className="image-slider"
         >
            <SwiperSlide>
               <img src="/images/undangan-preview1.jpg" alt="image-preview-1" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="/images/undangan-preview2.jpg" alt="image-preview-2" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="/images/undangan-preview3.jpg" alt="image-preview-3" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="/images/undangan-preview4.jpg" alt="image-preview-4" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="/images/undangan-preview5.jpg" alt="image-preview-5" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="/images/undangan-preview6.jpg" alt="image-preview-6" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="/images/undangan-preview7.jpg" alt="image-preview-7" />
            </SwiperSlide>
         </Swiper>
      </>
   );
};

export default Carousel;
