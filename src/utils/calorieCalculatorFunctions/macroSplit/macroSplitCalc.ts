export default function macroSplitCalc(tdee: number, weight: number) {
  const protein = Math.floor(weight * 2);
  const fat = Math.floor(weight);

  const proteinKcal = protein * 4;
  const fatKcal = fat * 9;

  const carbsKcal = tdee - proteinKcal - fatKcal;
  const carbs = Math.floor(carbsKcal / 4);

  return {
    carbs: carbs,
    fat: fat,
    protein: protein,
  };
}
