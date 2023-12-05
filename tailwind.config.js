/** @type {import('tailwindcss').Config} */
const { withTV } = require("tailwind-variants/transformer");

module.exports = withTV({
   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      fontFamily: {
         Lora: ["Lora", "serif"],
         JakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
         "link-md": [
            "0.875rem",
            {
               lineHeight: "1.25rem",
               fontWeight: "500",
            },
         ],
         "link-lg": [
            "1rem",
            {
               lineHeight: "1.5rem",
               fontWeight: "500",
            },
         ],
         "label-xs": ["0.688rem", "1rem"],
         "label-sm": ["0.75rem", "1rem"],
         "label-md": ["0.875rem", "1.25rem"],
         "label-lg": ["1rem", "1.5rem"],
         "body-xs": [
            "0.625rem",
            {
               lineHeight: "1rem",
               fontWeight: "400",
            },
         ],
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
         "display-xs": ["1.375rem", "1.875rem"],
         "display-sm": ["1.75rem", "2.25rem"],
         "display-md": ["2rem", "2.5rem"],
         "display-lg": ["2.25rem", "3rem"],
         "display-xl": ["3.5rem", "4.25rem"],
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
            25: "#F4F7ED",
            50: "#F0F5E8",
            100: "#E2EBD8",
            200: "#D3E5BC",
            300: "#BFD6A3",
            400: "#99B875",
            600: "#4F7A21",
            700: "#3F621A",
            900: "#2E4210",
         },
         orangeDarkSecondary: {
            25: "#F7EFED",
            50: "#F5EDEB",
            100: "#F0DEDA",
            200: "#EBC5BC",
            300: "#E0A799",
            400: "#D6856F",
            600: "#B82606",
            700: "#9E190D",
            900: "#701608",
         },
         violetSecondary: {
            25: "#F3F2F7",
            50: "#EDEBF5",
            100: "#E8E6F5",
            200: "#CFCAEB",
            300: "#B4ABE0",
            400: "#8A7DC4",
            600: "#5F2EB2",
            700: "#4B1F99",
            900: "#2B0C66",
         },
         success: {
            50: "#E1F0E7",
            600: "#039855",
            700: "#027948",
         },
         warning: {
            500: "#F79009",
         },
      },
      extend: {
         colors: {
            transparent: "transparent",
         },
      },
   },
   plugins: [],
});
