import Image from "next/image";
import Navbar from "@/components/section/Navbar";
import Carousel from "@/components/ui/Carousel";
import Marque from "@/components/ui/Marque";

export default function Home() {
   return (
      <>
         <Navbar />
         <main className="flex flex-col gap-y-8 md:gap-y-20">
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
                  <button className="btn__primary order-2 md:order-1">Buat undangan</button>
                  <button className="btn__secondary flex gap-x-2 items-center order-1 md:order-2">
                     <img src="icons/play-circle.svg" alt="play icon" />
                     Cara buat undangan
                  </button>
               </div>
            </section>
            <Marque />

            {/* Claim section */}
            <section className="responsive__container">
               <div className="bg-blueLightSecondary-50 flex flex-col lg:flex-row gap-y-[48px] gap-x-[48px] xl:gap-x-[96px] p-[16px] md:p-[32px] xl:p-[40px] rounded-[32px]">
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
                              <img className="w-[16px] md:w-[20px]" src="icons/3dcube.svg" alt="cube icon" />
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
                              <img className="w-[16px] md:w-[20px]" src="icons/3dcube.svg" alt="cube icon" />
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
                              <img className="w-[16px] md:w-[20px]" src="icons/3dcube.svg" alt="cube icon" />
                           </div>
                           <div className="flex flex-col gap-y-2">
                              <div className="h-[32px] md:h-[36px] w-fit flex flex-none px-3 justify-start items-center bg-blueLightSecondary-200 rounded-lg ">
                                 <h3 className="text-blueLightSecondary-900 text-heading-2xs xl:text-heading-md">Banyak pilihan tema</h3>
                              </div>
                              <p className="text-body-md md:text-body-lg ml-3">Tersedia banyak pilihan tema siap pakai yang dapat di sesuaikan dengan selera Anda kapan saja tanpa batas.</p>
                           </div>
                        </li>
                     </ul>
                     <button className="btn__primary md:w-fit">Buat undangan</button>
                  </div>
                  <div className="p-3">
                     <img
                        className="img-section2__box-shadow  rounded-3xl flex-1 hidden md:flex lg:w-full md:h-[500px] lg:h-full w-full object-cover"
                        src="images/img-section2.jpg"
                        alt="section2 image"
                     />
                  </div>
               </div>
            </section>
         </main>
         <footer></footer>
      </>
   );
}
