import { tv } from "tailwind-variants";

export const button = tv(
   {
      base: "flex justify-center gap-x-2 items-center rounded-full transition-colors",
      variants: {
         primary: {
            gray: " !text-primary-25 bg-primary-950 hover:bg-primary-800 active:bg-primary-950 active:outline active:outline-1 active:outline-primary-400 active:btn__shadow--primary",
            green: "bg-green-500 text-white",
            orange: "bg-orange-500 text-white",
            violet: "bg-violet-500 text-white",
         },
         secondary: {
            gray: "text-primary-950 bg-primary-200  hover:bg-primary-300 active:bg-primary-200 active:outline active:outline-1 active:outline-primary-400 active:btn__shadow",
            green: "bg-green-500 text-white",
            orange: "bg-orange-500 text-white",
            violet: "bg-violet-500 text-white",
         },
         tertiary: {
            gray: "text-primary-950 border border-primary-200 hover:border-primary-300 hover:bg-primary-100 active:bg-primary-25 active:outline active:outline-1 active:outline-primary-400 active:btn__shadow transition-all",
            green: "bg-green-500 text-white",
            orange: "bg-orange-500 text-white",
            violet: "bg-violet-500 text-white",
         },
         size: {
            lg: "py-4 px-8 text-label-lg font-semibold",
            md: "py-4 px-8 text-label-md font-semibold",
            sm: "py-[14px] px-7 text-label-md font-semibold",
            xs: "py-3 px-5 text-label-sm font-semibold",
            mb_lg: "py-4 px-8 text-label-sm font-semibold",
            mb_md: "py-[14px] px-[28px] text-label-sm font-semibold",
         },
      },
   },
   { responsiveVariants: ["sm", "md", "lg", "xl"] },
);
