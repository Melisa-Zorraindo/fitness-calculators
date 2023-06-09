import { create } from "zustand";

interface LiftingState {
  oneRm: number;
  weightToLift: number;
  system: null;
  resetValues: () => void;
  updateOneRm: (value: number) => void;
  updateWeightToLift: (value: number) => void;
  updateSystem: (system: null) => void;
}

export const useLiftingStore = create<LiftingState>((set) => ({
  oneRm: 0,
  weightToLift: 0,
  system: null,
  resetValues: () => {
    set(() => ({
      oneRm: 0,
      weightToLift: 0,
    }));
  },
  updateOneRm: (value) => {
    set(() => ({ oneRm: value }));
    const resultsLiftingCard = document.querySelector(
      "#resultsLiftingCard"
    ) as HTMLElement;
    if (resultsLiftingCard !== null) {
      const scrollTop =
        resultsLiftingCard.offsetTop -
        2 * parseFloat(getComputedStyle(resultsLiftingCard).fontSize);
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }
  },
  updateWeightToLift: (value) => set(() => ({ weightToLift: value })),
  updateSystem: (system) => {
    set(() => ({ system: system }));
  },
}));
