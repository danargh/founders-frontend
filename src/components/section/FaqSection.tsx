"use client";

import { useState, useRef } from "react";
import { SimpleRightArrowIcon } from "@/assets/icons/icons";
import { faqData } from "@/store/staticStore";
import { LinkButton } from "@/components/ui/Button";
import { button } from "@/app/variants";

const FaqSection: React.FC = () => {
   const [openIndex, setOpenIndex] = useState<number | null>(null);
   const [openIndex2, setOpenIndex2] = useState<number | null>(null);
   const faqList2 = useRef<HTMLUListElement>(null);

   const toggleAccordion = (index: number) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
      setOpenIndex2(null);
   };
   const toggleAccordion2 = (index: number) => {
      setOpenIndex2((prevIndex) => (prevIndex === index ? null : index));
      setOpenIndex(null);
   };
   const Faq2Toggle = () => {
      faqList2.current?.classList.toggle("hidden");
   };

   // spliting array of faqData into 2
   const faqData1 = faqData.slice(0, 5);
   const faqData2 = faqData.slice(5, 10);
   return (
      <section className=" bg-tealSecondary-50">
         <div className="responsive__container py-5 md:py-8 xl:py-12 flex flex-col gap-y-4 md:gap-y-8 xl:gap-y-12">
            <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-28 xl:gap-x-80 items-start md:items-end">
               <div className="flex flex-col gap-y-2 flex-1">
                  <h2 className="text-display-xs md:text-display-sm xl:text-display-lg font-[500] font-Lora text-mossGreenSecondary-900">Pertanyaan yang Sering Ditanyakan </h2>
                  <p className="text-body-md md:text-body-lg text-primary-800">Temukan jawaban untuk pertanyaanmu di sini. Jika masih memiliki pertanyaan, silakan hubungi tim kami.</p>
               </div>
               <LinkButton urlLocation="#" className={`${button({ primary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} hidden md:flex flex-none w-full md:w-fit`}>
                  Pusat bantuan
               </LinkButton>
            </div>
            <div className=" flex flex-col md:flex-row md:gap-x-12 xl:gap-x-16">
               <ul className="flex flex-col flex-1">
                  {faqData1.map(({ question, answer }, index) => (
                     <li key={index} onClick={() => toggleAccordion(index)} className="flex gap-x-2 cursor-pointer items-start border-b border-tealSecondary-200 py-6">
                        <i className="md:mt-[2px]" style={{ rotate: openIndex === index ? "90deg" : "none" }}>
                           <SimpleRightArrowIcon width="24" height="24" />
                        </i>
                        <div className="flex flex-col gap-y-2 cursor-pointer">
                           <h4 className=" text-heading-2xs md:text-heading-xs xl:text-heading-sm font-[500]">{question}</h4>
                           {index === openIndex && <p className="transition-all text-body-sm md:text-body-md xl:text-body-lg">{answer}</p>}
                        </div>
                     </li>
                  ))}
               </ul>
               <ul ref={faqList2} className="hidden md:flex flex-col flex-1 faq__list2">
                  {faqData2.map(({ question, answer }, index) => (
                     <li key={index} onClick={() => toggleAccordion2(index)} className="flex gap-x-2 cursor-pointer items-start border-b border-tealSecondary-200 py-6">
                        <i className="md:mt-[2px]" style={{ rotate: openIndex2 === index ? "90deg" : "none" }}>
                           <SimpleRightArrowIcon width="24" height="24" />
                        </i>
                        <div className="flex flex-col gap-y-2">
                           <h4 className=" text-heading-2xs md:text-heading-xs xl:text-heading-sm font-[600]">{question}</h4>
                           {index === openIndex2 && <p className="transition-all text-body-sm md:text-body-md xl:text-body-lg">{answer}</p>}
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
            <div onClick={() => Faq2Toggle()} className="flex gap-x-3">
               <LinkButton urlLocation="#" className={`${button({ secondary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} md:hidden w-full btn__showAll`}>
                  Lihat semua FAQ
               </LinkButton>
               <LinkButton urlLocation="#" className={`${button({ primary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} md:hidden w-full btn__showAll`}>
                  Pusat bantuan
               </LinkButton>
            </div>
         </div>
      </section>
   );
};

export default FaqSection;
