import { Instagram, Whatsapp, Youtube } from "@/assets/icons/icons";

const Footer: React.FC = () => {
   return (
      <footer className=" bg-primary-100 rounded-[40px] m-6 mt-8">
         <div className="responsive__container py-6 md:py-8 xl:py-10 flex flex-col gap-y-8">
            <div className="flex flex-col xl:flex-row justify-between gap-y-8 ">
               <div className="flex flex-col gap-y-5 max-w-[430px]">
                  <div className="flex flex-col gap-y-2">
                     <h4 className="flex-auto w-[160px] logo__secondary">POLOKRAMI</h4>
                     <p className="text-body-md xl:text-body-lg">Platform untuk membuat website undangan pernikahan online yang mudah dan berkesan.</p>
                  </div>
                  <div className="flex gap-x-4">
                     <a href="#" className="flex items-center justify-center rounded-full bg-primary-200 border border-primary-300 w-9 h-9">
                        <Instagram width="20" height="20" />
                     </a>
                     <a href="#" className="flex items-center justify-center rounded-full bg-primary-200 border border-primary-300 w-9 h-9">
                        <Whatsapp width="20" height="20" />
                     </a>
                     <a href="#" className="flex items-center justify-center rounded-full bg-primary-200 border border-primary-300 w-9 h-9">
                        <Youtube width="20" height="20" />
                     </a>
                  </div>
               </div>
               <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-5 gap-x-16 max-w-[600px]">
                  <ul className="flex flex-col gap-y-3 text-body-lg">
                     <li>
                        <a href="#" className="text-label-md xl:text-label-lg font-semibold">
                           Produk
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-body-md xl:text-body-lg text__link">
                           Tema
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-body-md xl:text-body-lg text__link">
                           Portofolio
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-body-md xl:text-body-lg text__link">
                           Harga
                        </a>
                     </li>
                  </ul>
                  <ul className="flex flex-col gap-y-3 text-body-lg">
                     <li>
                        <a href="#" className="text-label-md xl:text-label-lg font-semibold">
                           Bantuan
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-body-md xl:text-body-lg text__link">
                           Tutorial
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-body-md xl:text-body-lg text__link">
                           FAQ
                        </a>
                     </li>
                  </ul>
                  <ul className="flex flex-col col-span-3 sm:col-span-2 gap-y-3 text-body-lg">
                     <li>
                        <a href="#" className="text-label-md xl:text-label-lg font-semibold">
                           Tentang
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-body-md xl:text-body-lg text__link">
                           Tentang Polokrami
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-body-md xl:text-body-lg text__link">
                           Kontak
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-body-md xl:text-body-lg text__link">
                           Become Polokrami’s Partner
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="flex flex-col gap-y-2">
               <hr className="text-primary-300" />
               <div className="flex justify-between items-center">
                  <p className=" text-primary-600 text-body-sm xl:text-body-md">© 2023 Polokrami, Inc. All rights reserved.</p>
                  <button className=" help__btn--primary">Bantuan</button>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
