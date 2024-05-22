import { create } from "zustand";
import { User } from "@/interfaces";
import { persist } from "zustand/middleware";
import { Response } from "@/interfaces";

export interface UserSlice {
   user: Response<User> | null;
   setUser: (user: Response<User> | null) => void;
}

export interface UIStateSlice {
   activeSidebar: boolean;
   setActiveSidebar: (nav: boolean) => void;
}

export interface DashboardThemeSlice {
   primaryColor: string;
   setPrimaryColor: (color: string) => void;
   secondaryColor: string;
   setSecondaryColor: (color: string) => void;
   tertiaryColor: string;
   setTertiaryColor: (color: string) => void;
}

export const useUserSlice = create<UserSlice>()(
   persist(
      (set) => ({
         user: null,
         setUser: (user) => set(() => ({ user })),
      }),
      {
         name: "user",
      },
   ),
);

export const useUIStateSlice = create<UIStateSlice>()((set) => ({
   activeSidebar: false,
   setActiveSidebar: (nav) => set(() => ({ activeSidebar: nav })),
}));

export const useDashboardThemeSlice = create<DashboardThemeSlice>()(
   persist(
      (set) => ({
         primaryColor: "",
         setPrimaryColor: (color) => set(() => ({ primaryColor: color })),
         secondaryColor: "",
         setSecondaryColor: (color) => set(() => ({ secondaryColor: color })),
         tertiaryColor: "",
         setTertiaryColor: (color) => set(() => ({ tertiaryColor: color })),
      }),
      {
         name: "dashboardTheme",
      },
   ),
);
