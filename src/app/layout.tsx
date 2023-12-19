import type { Metadata } from "next";
import "@/app/globals.css";
import Providers from "./provider";

export const metadata: Metadata = {
   title: "The Founders Wedding Invitation",
   description: "Platform Undangan Nomor 1 di Indonesia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="id">
         <body>
            <Providers>{children}</Providers>
         </body>
      </html>
   );
}
