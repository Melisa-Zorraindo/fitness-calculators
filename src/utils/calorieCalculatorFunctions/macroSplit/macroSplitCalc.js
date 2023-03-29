export default function macroSplitCalc(tdee, weight) {
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

/* const tdee = 2259;

const protein = (tdee * 0.15) / 4;
const fats = (tdee * 0.3) / 9;
const carbs = (tdee * 0.55) / 4;

console.log({ protein: protein, fats: fats, carbs: carbs }); */
