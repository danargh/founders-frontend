"use client";
import Marquee from "react-fast-marquee";

const imageData = [
   {
      id: 1,
      src: "/images/undangan-preview1.jpg",
      alt: "image-preview-1",
   },
   {
      id: 2,
      src: "/images/undangan-preview2.jpg",
      alt: "image-preview-2",
   },
   {
      id: 3,
      src: "/images/undangan-preview3.jpg",
      alt: "image-preview-3",
   },
   {
      id: 4,
      src: "/images/undangan-preview4.jpg",
      alt: "image-preview-4",
   },
   {
      id: 5,
      src: "/images/undangan-preview5.jpg",
      alt: "image-preview-5",
   },
   {
      id: 6,
      src: "/images/undangan-preview6.jpg",
      alt: "image-preview-6",
   },
   {
      id: 7,
      src: "/images/undangan-preview7.jpg",
      alt: "image-preview-7",
   },
];
const Marque: React.FC = () => {
   return (
      <Marquee autoFill={true}>
         {imageData.map((image) => (
            <div key={image.id} className="mx-2 md:mx-4 xl:mx-4">
               <img className="w-[176px] h-[240px] xl:w-[240px] xl:h-[350px] rounded-[16px]" src={image.src} alt={image.alt} />
            </div>
         ))}
      </Marquee>
   );
};

export default Marque;
