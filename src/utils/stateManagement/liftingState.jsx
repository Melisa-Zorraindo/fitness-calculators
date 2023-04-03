import { create } from "zustand";

export const useLiftingStore = create((set) => ({
  oneRm: 0,
  weightToLift: 0,
  resetValues: () => {
    set(() => ({
      oneRm: 0,
      weightToLift: 0,
    }));
  },
  updateOneRm: (value) => {
    set(() => ({ oneRm: value }));
    const resultsLiftingCard = document.querySelector("#resultsLiftingCard");
    resultsLiftingCard.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "end",
    });
  },
  updateWeightToLift: (value) => set(() => ({ weightToLift: value })),
}));
