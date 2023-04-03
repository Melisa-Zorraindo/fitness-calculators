import { create } from "zustand";

export const useCalorieStore = create((set) => ({
  calories: 0,
  protein: 0,
  fats: 0,
  carbs: 0,
  weeklyBudget: 0,
  resetValues: () => {
    set(() => ({
      calories: 0,
      protein: 0,
      fats: 0,
      carbs: 0,
      weeklyBudget: 0,
    }));
  },
  updateCalories: (value) => {
    set(() => ({ calories: value }));
    const resultsLiftingCard = document.querySelector("#resultsLiftingCard");
    resultsLiftingCard.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "end",
    });
  },
  updateMacros: ({ carbs, fat, protein }) =>
    set(() => ({ carbs: carbs, fats: fat, protein: protein })),
  updateWeeklyBudget: (value) => set(() => ({ weeklyBudget: value })),
}));
