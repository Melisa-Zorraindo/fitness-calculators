import { create } from "zustand";

export const useLiftingStore = create((set) => ({
  oneRm: 0,
  weightToLift: 0,
  updateOneRm: (value) => set(() => ({ oneRm: value })),
  updateWeightToLift: (value) => set(() => ({ weightToLift: value })),
}));
