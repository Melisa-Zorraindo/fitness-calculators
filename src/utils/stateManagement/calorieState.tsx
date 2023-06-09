import { create } from "zustand";

interface CalorieState {
  calories: number;
  protein: number;
  fats: number;
  carbs: number;
  weeklyBudget: number;
  resetValues: () => void;
  updateCalories: (value: number) => void;
  updateMacros: (values: {
    carbs: number;
    fat: number;
    protein: number;
  }) => void;
  updateWeeklyBudget: (value: number) => void;
}

export const useCalorieStore = create<CalorieState>((set) => ({
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
    const resultsCalorieCard = document.querySelector(
      "#resultsCalorieCard"
    ) as HTMLElement;
    const scrollTop =
      resultsCalorieCard.offsetTop -
      2 * parseFloat(getComputedStyle(resultsCalorieCard).fontSize);
    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
  },
  updateMacros: ({ carbs, fat, protein }) =>
    set(() => ({ carbs: carbs, fats: fat, protein: protein })),
  updateWeeklyBudget: (value) => set(() => ({ weeklyBudget: value })),
}));
