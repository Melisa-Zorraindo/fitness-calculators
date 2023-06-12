export default function tdeeCalc(
  bmr: number,
  activityLevel: number,
  goal: string
) {
  switch (goal) {
    case "moderateLose":
      return bmr * activityLevel * 0.85;
    case "mildLose":
      return bmr * activityLevel * 0.9;
    case "maintain":
      return bmr * activityLevel;
    case "mildGain":
      return bmr * activityLevel * 1.1;
    case "moderateGain":
      return bmr * activityLevel * 1.15;
    default:
      return 0;
  }
}
