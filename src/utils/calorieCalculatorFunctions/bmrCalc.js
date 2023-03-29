export default function bmrCalc(gender, age, weight, height) {
  if (gender === "male") {
    return (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age).toFixed(2);
  } else if (gender === "female") {
    return (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age).toFixed(2);
  }
}
