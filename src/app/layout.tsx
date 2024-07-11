import type { Metadata } from "next";
import "@/app/globals.css";
import Providers from "./provider";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";

export const metadata: Metadata = {
   title: "The Founders Wedding Invitation",
   description: "Platform Undangan Nomor 1 di Indonesia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="id">
         <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
         </head>
         <body>
            <Providers>{children}</Providers>
         </body>
      </html>
   );
}
