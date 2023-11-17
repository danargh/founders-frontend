import Image from "next/image";
import Navbar from "@/components/section/Navbar";
import Marque from "@/components/ui/Marque";
import ThemeSection from "@/components/section/ThemeSection";
import TestimoniCarousel from "@/components/ui/TestimoniCarousel";
import { Box, Checklist, Cube, OneStar, PlayCircle, Square, ThreeStar, TwoStar } from "@/assets/icons/icons";
import FaqSection from "@/components/section/FaqSection";
import Footer from "@/components/section/Footer";
import { EksklusifPackage, PremiumPackage, StarterPackage } from "@/components/ui/Package";
import { LinkButton } from "@/components/ui/Button";
import { button } from "@/app/variants";

export default function Home() {
   return (
      <>
         <Navbar />
         <main className="flex font flex-col gap-y-8 md:gap-y-14 xl:gap-y-20">
            {/* hero */}
            <section className="responsive__container flex flex-col items-center gap-y-5 pt-8">
               <div className="text-[10px] leading-[16px] md:text-label-sm font-semibold rounded-full text-orangeDarkSecondary-900 bg-orangeDarkSecondary-200 py-1 px-[10px] md:py-2 md:px-4">
                  <p className="flex items-center gap-x-2">
                     COBA POLOKRAMI <Image className=" inline-block" width={16} height={16} src="icons/arrow-right.svg" alt="arrow icon" /> GRATIS
                  </p>
               </div>
               <div className="flex flex-col items-center gap-y-2">
                  <h1 className="text-center text-display-md md:text-display-lg xl:text-display-xl font-Lora max-w-[670px] xl:max-w-[1060px]">
                     Website Undangan Pernikahan Online yang Mudah dan Berkesan
                  </h1>
                  <p className="text-body-md md:text-body-lg xl:text-body-xl max-w-[520px] xl:max-w-[600px] text-center">
                     Undang orang-orang terdekat untuk merayakan hari pernikahanmu dengan undangan pernikahan online yang mudah dibuat dan terjangkau.
                  </p>
               </div>
               <div className="flex gap-x-4 mt-4">
                  <LinkButton urlLocation="#" className={`${button({ primary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} order-2 md:order-1`}>
                     Buat undangan
                  </LinkButton>
                  <LinkButton urlLocation="#" className={`${button({ secondary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} gap-x-2 order-1 md:order-2`}>
                     <PlayCircle width="24" height="24" color="#141210" />
                     Cara buat undangan
                  </LinkButton>
               </div>
            </section>
            <Marque />

            {/* Claim section */}
            <section className="responsive__container">
               <div className="bg-blueLightSecondary-50 flex flex-col lg:flex-row gap-y-[48px] gap-x-[48px] xl:gap-x-[96px] p-[16px] md:p-[32px] xl:p-[40px] rounded-2xl md:rounded-[32px]">
                  <div className="flex flex-auto w-full lg:w-[480px] xl:w-[666px] flex-col gap-y-8">
                     <div className="flex flex-col gap-y-2">
                        <h2 className="text-display-xs md:text-display-sm xl:text-display-lg font-[500] font-Lora text-blueLightSecondary-900">Platform Undangan Digital Terbaik di Indonesia </h2>
                        <p className="text-body-md md:text-body-lg text-primary-800">
                           Polokrami adalah platform pembuatan website undangan online yang mudah digunakan, personal, dan terjangkau. Alasan mengapa banyak orang memilih Polokrami:
                        </p>
                     </div>
                     <ul className="flex flex-col gap-y-5">
                        <li className="flex gap-x-2 items-start ">
                           <div className="w-[32px] h-[32px] md:w-[36px] md:h-[36px] flex flex-none items-center justify-center rounded-lg bg-blueLightSecondary-200 ">
                              <i className=" responsive__icon--sm">
                                 <Cube color="#0C3D66" />
                              </i>
                           </div>
                           <div className="flex flex-col gap-y-2">
                              <div className="h-[32px] md:h-[36px] w-fit flex flex-none px-3 justify-start items-center bg-blueLightSecondary-200 rounded-lg ">
                                 <h3 className="text-blueLightSecondary-900 text-heading-2xs xl:text-heading-md">Smart system</h3>
                              </div>
                              <p className="text-body-md md:text-body-lg ml-3">
                                 Polokrami memiliki sistem yang mudah digunakan dan mendukung kustomisasi yang sangat fleksibel. Anda bisa mengatur undangan sesuai keinginan dan keperluan.
                              </p>
                           </div>
                        </li>
                        <li className="flex gap-x-2 items-start ">
                           <div className="w-[32px] h-[32px] md:w-[36px] md:h-[36px] flex flex-none items-center justify-center rounded-lg bg-blueLightSecondary-200 ">
                              <i className=" responsive__icon--sm">
                                 <Square color="#0C3D66" />
                              </i>
                           </div>
                           <div className="flex flex-col gap-y-2">
                              <div className="h-[32px] md:h-[36px] w-fit flex flex-none px-3 justify-start items-center bg-blueLightSecondary-200 rounded-lg ">
                                 <h3 className="text-blueLightSecondary-900 text-heading-2xs xl:text-heading-md">Harga terjangkau</h3>
                              </div>
                              <p className="text-body-md md:text-body-lg ml-3">
                                 Anda tidak akan menemukan layanan undangan online lain yang lebih murah dari Datengdong dengan kualitas layanan yang setara.
                              </p>
                           </div>
                        </li>
                        <li className="flex gap-x-2 items-start ">
                           <div className="w-[32px] h-[32px] md:w-[36px] md:h-[36px] flex flex-none items-center justify-center rounded-lg bg-blueLightSecondary-200 ">
                              <i className=" responsive__icon--sm">
                                 <Box color="#0C3D66" />
                              </i>
                           </div>
                           <div className="flex flex-col gap-y-2">
                              <div className="h-[32px] md:h-[36px] w-fit flex flex-none px-3 justify-start items-center bg-blueLightSecondary-200 rounded-lg ">
                                 <h3 className="text-blueLightSecondary-900 text-heading-2xs xl:text-heading-md">Banyak pilihan tema</h3>
                              </div>
                              <p className="text-body-md md:text-body-lg ml-3">Tersedia banyak pilihan tema siap pakai yang dapat di sesuaikan dengan selera Anda kapan saja tanpa batas.</p>
                           </div>
                        </li>
                     </ul>
                     <LinkButton urlLocation="#" className={`${button({ primary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} md:w-fit`}>
                        Buat undangan
                     </LinkButton>
                  </div>
                  <div className="p-3 hidden md:block">
                     <img className="img__shadow--blue flex-1 hidden md:block lg:w-full md:h-[500px] lg:h-full w-full" src="images/img-section2.jpg" alt="section2 image" />
                  </div>
               </div>
            </section>

            {/* Feature section */}
            <section className="responsive__container flex flex-col gap-y-6 md:gap-y-8 xl:gap-y-12">
               <div className="flex flex-col gap-y-2 justify-center items-center">
                  <h2 className="text-display-xs md:text-display-sm xl:text-display-lg xl:max-w-[560px] text-center font-[500] font-Lora text-primary-950">
                     Fitur Undangan Digital yang Keren dan Lengkap
                  </h2>
                  <p className="text-body-md md:text-body-lg text-primary-800 xl:max-w-[420px] text-center">Undangan online kami menawarkan berbagai macam fitur terbaik yang dibutuhkan</p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 xl:gap-8">
                  {Array.from({ length: 12 }).map((_, i) => (
                     <div key={i} className="flex flex-col gap-y-8 p-5 border border-primary-300 rounded-2xl">
                        <Box width="24" height="24" color="#292524" />
                        <div className="flex flex-col gap-y-2">
                           <h4 className="text-primary-950 text-heading-2xs xl:text-heading-md">Domain eksklusif</h4>
                           <p className=" text-body-sm md:text-body-md">Menggunakan mekanisme subdomain dan tersedia paket custom domain</p>
                        </div>
                     </div>
                  ))}
               </div>
            </section>

            {/* Step section */}
            <section className=" bg-mossGreenSecondary-50 w-full">
               <div className="responsive__container py-5 md:py-8 xl:py-12 flex flex-col lg:flex-row gap-y-12 lg:gap-x-16">
                  <div className="flex flex-1 flex-col gap-y-6 md:gap-y-8">
                     <div className="flex flex-col gap-y-2">
                        <h2 className="text-display-xs md:text-display-sm xl:text-display-lg font-[500] font-Lora text-mossGreenSecondary-900">4 Langkah Mudah Buat Website Undangan Digital </h2>
                        <p className="text-body-md md:text-body-lg text-primary-800">
                           Buat website undangan digital sendiri hanya dalam 4 langkah. Ikuti petunjuk di bawah ini untuk mengetahui lebih lanjut, atau tonton video tutorial kami.
                        </p>
                     </div>
                     <div className="grid grid-cols-2 gap-3 md:gap-6 xl:gap-8">
                        {Array.from({ length: 4 }).map((_, i) => (
                           <div key={i} className=" flex flex-col gap-y-8 bg-mossGreenSecondary-100 border border-mossGreenSecondary-200 rounded-2xl p-5 ">
                              <div className=" flex items-center justify-center w-7 h-7 rounded-full border border-mossGreenSecondary-900 bg-mossGreenSecondary-50 ">1</div>
                              <div className="flex flex-col gap-y-2">
                                 <h4 className="text-primary-950 text-heading-2xs xl:text-heading-md">Domain eksklusif</h4>
                                 <p className=" text-body-sm md:text-body-md">Menggunakan mekanisme subdomain dan tersedia paket custom domain</p>
                              </div>
                           </div>
                        ))}
                     </div>
                     <LinkButton urlLocation="#" className={`${button({ primary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} md:w-fit`}>
                        Buat undangan
                     </LinkButton>
                  </div>
                  <img className="flex-1 lg:max-w-[450px] hidden md:block md:max-h-[500px] lg:max-h-fit w-full img__shadow--green " src="/images/img-section4.jpg" alt="img section" />
               </div>
            </section>

            {/* Theme section */}
            <ThemeSection />

            {/* Testimoni section */}
            <section className=" responsive__container">
               <div className="flex flex-col gap-y-6 md:gap-y-8 bg-violetSecondary-50  p-[16px] md:p-[32px] xl:p-[40px] rounded-2xl md:rounded-[32px]">
                  <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-10 xl:gap-x-36 items-start md:items-end">
                     <div className="flex flex-col gap-y-2 flex-1">
                        <h2 className="text-display-xs md:text-display-sm xl:text-display-lg font-[500] font-Lora text-mossGreenSecondary-900">Testimoni dari Pasangan yang Percaya pada Polokrami </h2>
                        <p className="text-body-md md:text-body-lg text-primary-800">Polokrami telah menjadi bagian dari kebahagiaan mereka di momen-momen terbaik.</p>
                     </div>
                     <button className="hidden md:flex flex-none w-full md:w-fit btn__primary">Lihat Portofolio</button>
                  </div>
                  <TestimoniCarousel />
                  <button className="flex md:hidden justify-center flex-none w-full md:w-fit btn__primary">Lihat Portofolio</button>
               </div>
            </section>

            {/* Pricing section */}
            <section className="responsive__container flex flex-col items-center gap-y-6 md:gap-y-8">
               <div>
                  <div className="flex flex-col gap-y-2 justify-center items-center">
                     <h2 className="text-display-xs md:text-display-sm xl:text-display-lg max-w-[720px] xl:max-w-[600px] text-center font-[500] font-Lora text-primary-950">
                        Pilih Paket untuk Undangan Digital Milikmu Sekarang
                     </h2>
                     <p className="text-body-md md:text-body-lg text-primary-800 max-w-[720px] xl:max-w-[540px] text-center">
                        Dapatkan paket undangan digital yang sesuai dengan kebutuhanmu dengan harga yang terjangkau dan fitur yang lengkap.
                     </p>
                  </div>
               </div>
               <a href="#" className=" btn__tertiary text-label-lg font-[600]">
                  Lihat Perbandingan Paket
               </a>
               <div className="flex overflow-auto flex-wrap min-[440px]:flex-nowrap items-center w-full gap-y-4 gap-x-6 md:gap-x-8">
                  <div className=" flex-1 h-fit flex flex-col items-center  gap-y-6 p-6 border border-mossGreenSecondary-300 rounded-3xl">
                     <StarterPackage />
                     <h4 className="text-display-md font-[600] text-primary-950 font-Lora">Gratis</h4>
                     <hr className="w-full text-primary-100" />
                     <ul className="flex flex-col gap-y-4 text-body-sm md:text-body-md xl:text-body-lg ">
                        <li className="flex gap-x-3 items-start justify-start text-left">
                           <i className="flex-none responsive__icon">
                              <Checklist color="#292524" />
                           </i>
                           Domain Polokrami (namapasangan.polokrami.com)
                        </li>
                        <li className="flex gap-x-3 items-start justify-start text-left">
                           <i className="flex-none responsive__icon">
                              <Checklist color="#292524" />
                           </i>
                           3 Foto & 1 Video
                        </li>
                        <li className="flex gap-x-3 items-start justify-start text-left">
                           <i className="flex-none responsive__icon">
                              <Checklist color="#292524" />
                           </i>
                           Countdown Timer
                        </li>
                        <li className="flex gap-x-3 items-start justify-start text-left">
                           <i className="flex-none responsive__icon">
                              <Checklist color="#292524" />
                           </i>
                           Informasi Acara
                        </li>
                     </ul>
                     <hr className="w-full text-primary-100" />
                     <LinkButton urlLocation="#" className={`${button({ tertiary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-full text-center`}>
                        Pilih Starter
                     </LinkButton>
                  </div>
                  <div className=" flex-1 flex flex-col items-center  gap-y-6 p-6 border border-orangeDarkSecondary-300 rounded-3xl">
                     <div className=" label__red--lg">Terpopuler</div>
                     <PremiumPackage />
                     <h4 className="text-display-md font-[600] text-orangeDarkSecondary-900 font-Lora">IDR 99.000</h4>
                     <hr className="w-full text-primary-100" />
                     <ul className="flex flex-col gap-y-4 text-body-sm md:text-body-md xl:text-body-lg ">
                        <li className="flex gap-x-3 items-start justify-start text-left">
                           <i className="flex-none responsive__icon">
                              <Checklist color="#292524" />
                           </i>
                           Domain Polokrami (namapasangan.polokrami.com)
                        </li>
                        <li className="flex gap-x-3 items-start justify-start text-left">
                           <i className="flex-none responsive__icon">
                              <Checklist color="#292524" />
                           </i>
                           3 Foto & 1 Video
                        </li>
                        <li className="flex gap-x-3 items-start justify-start text-left">
                           <i className="flex-none responsive__icon">
                              <Checklist color="#292524" />
                           </i>
                           Countdown Timer
                        </li>
                        <li className="flex gap-x-3 items-start justify-start text-left">
                           <i className="flex-none responsive__icon">
                              <Checklist color="#292524" />
                           </i>
                           Informasi Acara
                        </li>
                     </ul>
                     <hr className="w-full text-primary-100" />
                     <LinkButton urlLocation="#" className={`${button({ primary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-full text-center`}>
                        Pilih Premium
                     </LinkButton>
                  </div>
                  <div className=" flex-1 h-fit flex flex-col items-center  gap-y-6 p-6 border border-violetSecondary-300 rounded-3xl">
                     <EksklusifPackage />
                     <h4 className="text-display-md font-[600] text-violetSecondary-900 font-Lora">IDR 199.000</h4>
                     <hr className="w-full text-primary-100" />
                     <ul className="flex flex-col gap-y-4 text-body-sm md:text-body-md xl:text-body-lg ">
                        <li className="flex gap-x-3 items-start justify-start text-left">
                           <i className="flex-none responsive__icon">
                              <Checklist color="#292524" />
                           </i>
                           Domain Polokrami (namapasangan.polokrami.com)
                        </li>
                        <li className="flex gap-x-3 items-start justify-start text-left">
                           <i className="flex-none responsive__icon">
                              <Checklist color="#292524" />
                           </i>
                           3 Foto & 1 Video
                        </li>
                        <li className="flex gap-x-3 items-start justify-start text-left">
                           <i className="flex-none responsive__icon">
                              <Checklist color="#292524" />
                           </i>
                           Countdown Timer
                        </li>
                        <li className="flex gap-x-3 items-start justify-start text-left">
                           <i className="flex-none responsive__icon">
                              <Checklist color="#292524" />
                           </i>
                           Informasi Acara
                        </li>
                     </ul>
                     <hr className="w-full text-primary-100" />
                     <LinkButton urlLocation="#" className={`${button({ secondary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-full text-center`}>
                        Pilih Eksklusif
                     </LinkButton>
                  </div>
               </div>
            </section>

            {/* FAQ section */}
            <FaqSection />

            {/* Ending */}
            <section className="responsive__container flex flex-col items-center gap-y-5 pt-8">
               <div className="flex flex-col items-center md:max-w-[720px] gap-y-2">
                  <h1 className="text-center text-display-md md:text-display-lg xl:text-display-xl font-Lora max-w-[670px] xl:max-w-[1060px]">Buat Undangan Digitalmu Sekarang</h1>
                  <p className="text-body-md md:text-body-lg xl:text-body-xl max-w-[520px] xl:max-w-[600px] text-center">
                     Bergabunglah dengan kami yang telah menjadi dipercaya oleh para pasangan. Dapatkan penawaran khusus untuk pembelian pertama Anda.
                  </p>
               </div>
            </section>
            <Marque />
            <div className="p-4">
               <LinkButton urlLocation="#" className={`${button({ primary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-full mx-auto md:w-fit`}>
                  Buat undangan
               </LinkButton>
            </div>
         </main>
         <Footer />
      </>
   );
}
