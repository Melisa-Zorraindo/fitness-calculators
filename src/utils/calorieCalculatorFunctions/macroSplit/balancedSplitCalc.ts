export default function balancedSplitCalc(tdee: number) {
  const protein = Math.floor((tdee * 0.15) / 4);
  const fat = Math.floor((tdee * 0.3) / 9);
  const carbs = Math.floor((tdee * 0.55) / 4);

  return {
    carbs: carbs,
    fat: fat,
    protein: protein,
  };
}
