import { TestimoniObject } from "@/store/staticStore";
import Image from "next/image";

const TestimoniCard: React.FC<{ testimoniItem: TestimoniObject }> = ({ testimoniItem }) => {
   const { imgFemale, imgMale, nameFemale, nameMale, date, quote, star, background } = testimoniItem;
   const bgVariable: React.CSSProperties = { ["--image-url" as any]: `url(${background})` };
   return (
      <div id="testimoni-card-bg" style={bgVariable} className="relative img__shadow--violet bg-[image:var(--image-url)] bg-no-repeat">
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
   );
};

export default TestimoniCard;
