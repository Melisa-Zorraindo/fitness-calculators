export default function ketoSplitCalc(tdee) {
  const protein = Math.floor((tdee * 0.15) / 4);
  const fat = Math.floor((tdee * 0.7) / 9);
  const carbs = Math.floor((tdee * 0.1) / 4);

  return {
    carbs: carbs,
    fat: fat,
    protein: protein,
  };
}