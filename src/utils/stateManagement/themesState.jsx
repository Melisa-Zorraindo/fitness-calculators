import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useThemesStore = create(
  persist(
    (set) => ({
      theme: false,
      updateTheme: () => {
        set((state) => ({ theme: !state.theme }));
      },
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
