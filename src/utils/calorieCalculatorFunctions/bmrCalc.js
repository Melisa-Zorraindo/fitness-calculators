export default function bmrCalc(gender, age, weight, height) {
  if (gender === "male") {
    return Math.floor(88.36 + 13.4 * weight + 4.8 * height - 5.7 * age);
  } else if (gender === "female") {
    return Math.floor(447.6 + 9.2 * weight + 3.1 * height - 4.3 * age);
  }
}
