import { create } from "zustand";
import { User } from "@/interfaces";
import { persist } from "zustand/middleware";

interface UserSlice {
   user: User | null;
   setUser: (user: User | null) => void;
}

interface UIStateSlice {
   activeNav: string;
   setActiveNav: (nav: string) => void;
}

export const useUserSlice = create<UserSlice>()(
   persist(
      (set) => ({
         user: null,
         setUser: (user) => set(() => ({ user })),
      }),
      { name: "userSlice" },
   ),
);

export const useUIStateSlice = create<UIStateSlice>()(
   persist(
      (set) => ({
         activeNav: "Dashboard",
         setActiveNav: (nav) => set(() => ({ activeNav: nav })),
      }),
      { name: "UIStateSlice" },
   ),
);

// import { create, StateCreator } from "zustand";

// interface BearSlice {
//    bears: number;
//    addBear: () => void;
//    eatFish: () => void;
// }

// interface FishSlice {
//    fishes: number;
//    addFish: () => void;
// }

// interface SharedSlice {
//    addBoth: () => void;
//    getBoth: () => void;
// }

// const createBearSlice: StateCreator<BearSlice & FishSlice, [], [], BearSlice> = (set) => ({
//    bears: 0,
//    addBear: () => set((state) => ({ bears: state.bears + 1 })),
//    eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
// });

// const createFishSlice: StateCreator<BearSlice & FishSlice, [], [], FishSlice> = (set) => ({
//    fishes: 0,
//    addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
// });

// const createSharedSlice: StateCreator<BearSlice & FishSlice, [], [], SharedSlice> = (set, get) => ({
//    addBoth: () => {
//       // you can reuse previous methods
//       get().addBear();
//       get().addFish();
//       // or do them from scratch
//       // set((state) => ({ bears: state.bears + 1, fishes: state.fishes + 1 })
//    },
//    getBoth: () => get().bears + get().fishes,
// });

// const useBoundStore = create<BearSlice & FishSlice & SharedSlice>()((...a) => ({
//    ...createBearSlice(...a),
//    ...createFishSlice(...a),
//    ...createSharedSlice(...a),
// }));
