import type { Metadata } from "next";
import "@/app/globals.css";
import Sidebar from "@/components/section/Sidebar.dashboard";
import Header from "@/components/section/Header.dashboard";
import { useDashboardThemeSlice, useUserSlice } from "@/store/store";

export const metadata: Metadata = {
   title: "The Founders Wedding Invitation",
   description: "Platform Undangan Nomor 1 di Indonesia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className="flex flex-col bg-primary-25">
         <Header />
         <main className="w-full sm:flex">
            <Sidebar>{children}</Sidebar>
         </main>
      </div>
   );
}
