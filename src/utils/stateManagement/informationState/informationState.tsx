import { create } from "zustand";
import { InfoButtonsData } from "./infoButtonsData";
import { infoButtonsData } from "./infoButtonsData";

interface InformationState {
  infoButtons: InfoButtonsData[];
  displayButton: (id: string) => void;
  hideButton: (id: string) => void;
}

export const useInformationStore = create<InformationState>((set) => ({
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
