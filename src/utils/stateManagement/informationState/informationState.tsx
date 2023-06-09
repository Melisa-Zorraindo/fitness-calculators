import { create } from "zustand";
import { infoButtonsData } from "./infoButtonsData";

export const useInformationStore = create((set) => ({
  infoButtons: infoButtonsData,
  displayButton: (id) =>
    set((state) => ({
      infoButtons: state.infoButtons.map((item) =>
        item.id === id ? { ...item, active: true } : item
      ),
    })),
  hideButton: (id) =>
    set((state) => ({
      infoButtons: state.infoButtons.map((item) =>
        item.id === id ? { ...item, active: false } : item
      ),
    })),
}));
