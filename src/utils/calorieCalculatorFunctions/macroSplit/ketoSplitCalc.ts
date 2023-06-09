export default function ketoSplitCalc(tdee: number) {
  const protein = Math.floor((tdee * 0.15) / 4);
  const fat = Math.floor((tdee * 0.75) / 9);
  const carbs = Math.floor((tdee * 0.1) / 4);

  return {
    carbs: carbs,
    fat: fat,
    protein: protein,
  };
}
