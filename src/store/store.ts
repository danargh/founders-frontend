import { create } from "zustand";
import { User } from "@/interfaces";

interface UserSlice {
   user: User | null;
   setUser: (user: User) => void;
   getUser: () => void;
}
export const useUserSlice = create<UserSlice>((set) => ({
   user: null,
   setUser: (user) => set(() => ({ user })),
   getUser: () => set(() => ({ user: null })),
}));
