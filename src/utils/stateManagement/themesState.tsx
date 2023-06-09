import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ThemeState {
  theme: boolean;
  updateTheme: () => void;
}

export const useThemesStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: true,
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
