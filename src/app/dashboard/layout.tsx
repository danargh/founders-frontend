import type { Metadata } from "next";
import "@/app/globals.css";
import Providers from "@/app/provider";
import Sidebar from "@/components/section/Sidebar";
import Header from "@/components/section/Header";

export const metadata: Metadata = {
   title: "The Founders Wedding Invitation",
   description: "Platform Undangan Nomor 1 di Indonesia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <main className="flex flex-col bg-primary-25">
         <Header />
         <div className="w-full sm:flex">
            <Sidebar>{children}</Sidebar>
         </div>
      </main>
   );
}
