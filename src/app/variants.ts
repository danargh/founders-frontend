import { tv } from "tailwind-variants";

export const button = tv(
   {
      base: "flex justify-center gap-x-2 items-center rounded-full transition-colors",
      variants: {
         primary: {
            gray: " !text-primary-25 bg-primary-950 hover:bg-primary-800 active:bg-primary-950 active:outline active:outline-1 active:outline-primary-400 active:btn__shadow--primary",
            green: "!text-mossGreenSecondary-25 bg-mossGreenSecondary-900 hover:bg-mossGreenSecondary-700 active:bg-mossGreenSecondary-900 active:outline active:outline-1 active:outline-mossGreenSecondary-400 active:btn__shadow--mossGreenSecondary",
            orange:
               "!text-orangeDarkSecondary-25 bg-orangeDarkSecondary-900 hover:bg-orangeDarkSecondary-700 active:bg-orangeDarkSecondary-900 active:outline active:outline-1 active:outline-orangeDarkSecondary-400 active:btn__shadow--orangeDarkSecondary",
            violet:
               "!text-violetSecondary-25 bg-violetSecondary-900 hover:bg-violetSecondary-700 active:bg-violetSecondary-900 active:outline active:outline-1 active:outline-violetSecondary-400 active:btn__shadow--violetSecondary",
         },
         secondary: {
            gray: "text-primary-950 bg-primary-200  hover:bg-primary-300 active:bg-primary-200 active:outline active:outline-1 active:outline-primary-400 active:btn__shadow",
            green: "text-mossGreenSecondary-900 bg-mossGreenSecondary-200 hover:bg-mossGreenSecondary-300 active:bg-mossGreenSecondary-200 active:outline active:outline-1 active:outline-mossGreenSecondary-400 active:btn__shadow",
            orange: "text-orangeDarkSecondary-900 bg-orangeDarkSecondary-200 hover:bg-orangeDarkSecondary-300 active:bg-orangeDarkSecondary-200 active:outline active:outline-1 active:outline-orangeDarkSecondary-400 active:btn__shadow",
            violet: "text-violetSecondary-900 bg-violetSecondary-200 hover:bg-violetSecondary-300 active:bg-violetSecondary-200 active:outline active:outline-1 active:outline-violetSecondary-400 active:btn__shadow",
         },
         tertiary: {
            gray: "text-primary-950 border border-primary-200 hover:border-primary-300 hover:bg-primary-100 active:bg-primary-25 active:outline active:outline-1 active:outline-primary-400 active:btn__shadow transition-all",
            green: "text-mossGreenSecondary-900 border border-mossGreenSecondary-200 hover:border-mossGreenSecondary-300 hover:bg-mossGreenSecondary-100 active:bg-mossGreenSecondary-25 active:outline active:outline-1 active:outline-mossGreenSecondary-400 active:btn__shadow transition-all",
            orange: "text-orangeDarkSecondary-900 border border-orangeDarkSecondary-200 hover:border-orangeDarkSecondary-300 hover:bg-orangeDarkSecondary-100 active:bg-orangeDarkSecondary-25 active:outline active:outline-1 active:outline-orangeDarkSecondary-400 active:btn__shadow transition-all",
            violet: "text-violetSecondary-900 border border-violetSecondary-200 hover:border-violetSecondary-300 hover:bg-violetSecondary-100 active:bg-violetSecondary-25 active:outline active:outline-1 active:outline-violetSecondary-400 active:btn__shadow transition-all",
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
