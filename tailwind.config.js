/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      fontFamily: {
         Lora: ["Lora", "serif"],
         JakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
         "label-sm": ["0.75rem", "1rem"],
         "label-md": ["0.875rem", "1.25rem"],
         "label-lg": ["1rem", "1.5rem"],
         "body-sm": [
            "0.75rem",
            {
               lineHeight: "1rem",
               fontWeight: "400",
            },
         ],
         "body-md": [
            "0.875rem",
            {
               lineHeight: "1.25rem",
               fontWeight: "400",
            },
         ],
         "body-lg": [
            "1rem",
            {
               lineHeight: "1.5rem",
               fontWeight: "400",
            },
         ],
         "body-xl": [
            "1.125rem",
            {
               lineHeight: "1.625rem",
               fontWeight: "400",
            },
         ],
         "heading-2xs": [
            "0.875rem",
            {
               lineHeight: "1.25rem",
               fontWeight: "500",
            },
         ],
         "heading-xs": [
            "1rem",
            {
               lineHeight: "1.5rem",
               fontWeight: "500",
            },
         ],
         "heading-sm": [
            "1.125rem",
            {
               lineHeight: "1.625rem",
               fontWeight: "500",
            },
         ],
         "heading-md": [
            "1.25rem",
            {
               lineHeight: "1.75rem",
               fontWeight: "500",
            },
         ],
         "heading-lg": [
            "1.5rem",
            {
               lineHeight: "2rem",
               fontWeight: "500",
            },
         ],
         "heading-xl": [
            "1.75rem",
            {
               lineHeight: "2.25rem",
               fontWeight: "500",
            },
         ],
         "display-sm": [
            "1.5rem",
            {
               lineHeight: "2rem",
               fontWeight: "500",
            },
         ],
         "display-md": [
            "2rem",
            {
               lineHeight: "2.5rem",
               fontWeight: "500",
            },
         ],
         "display-lg": [
            "2.25rem",
            {
               lineHeight: "2.5rem",
               fontWeight: "500",
            },
         ],
         "display-xl": [
            "3.5rem",
            {
               lineHeight: "4.25rem",
               fontWeight: "400",
            },
         ],
      },
      colors: {
         primary: {
            25: "#FAF9F7",
            50: "#F5F3F0",
            100: "#F0EEEB",
            200: "#E5E2E1",
            300: "#D7D3D0",
            400: "#A8A29D",
            500: "#79716B",
            600: "#57534E",
            700: "#44403C",
            800: "#292524",
            950: "#141210",
         },
         tealSecondary: {
            50: "#EBF5F1",
            200: "#D3E5E0",
            900: "#06332D",
         },
         blueLightSecondary: {
            50: "#EBF1F5",
            200: "#D3E5F0",
            900: "#0C3D66",
         },
         mossGreenSecondary: {
            50: "#F0F5E8",
            200: "#E0EBD3",
            300: "#BDCCAB",
            900: "#2E4210",
         },
         orangeDarkSecondary: {
            50: "#F5EDEB",
            200: "#F0D9D3",
            300: "#CCA59B",
            900: "#7A1809",
         },
         violetSecondary: {
            50: "#EDEBF5",
            200: "#DBD8EB",
            300: "#B1ABCC",
            900: "#2B0C66",
         },
         success: {
            600: "#039855",
            700: "#027948",
         },
         warning: {
            500: "#F79009",
         },
      },
      extend: {},
   },
   plugins: [],
};
