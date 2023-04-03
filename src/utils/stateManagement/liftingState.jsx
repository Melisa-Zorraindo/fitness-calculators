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
    const scrollTop =
      resultsLiftingCard.offsetTop -
      2 * parseFloat(getComputedStyle(resultsLiftingCard).fontSize);
    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
  },
  updateWeightToLift: (value) => set(() => ({ weightToLift: value })),
}));
