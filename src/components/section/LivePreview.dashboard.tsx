import React from "react";
import { useStore } from "@/hooks";
import { useInvitationStateSlice, useDashboardThemeSlice } from "@/store/store";

type Props = {
   children: React.ReactNode;
};

export default function LivePreview({ children }: Props) {
   const invitationSetting = useStore(useInvitationStateSlice, (state) => state.invitationSetting);
   const dashboardThemeSlice = useStore(useDashboardThemeSlice, (state) => state);

   return (
      <section className="flex flex-col border w-full rounded-[32px] p-6" style={{ borderColor: dashboardThemeSlice?.secondaryColor }}>
         <div className="flex justify-between">
            <div className="flex flex-col">
               <h2 className="text-display-sm font-Lora font-[500]">Live Preview</h2>
               <p>Preview tersedia dalam bentuk mobile, tablet dan desktop.</p>
            </div>
            {children}
         </div>
         <div>
            <iframe
               className="w-full mt-4 rounded-[32px] h-[400px]"
               src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
            ></iframe>
         </div>
      </section>
   );
}
