import macroSplitCalc from "./macroSplitCalc";
import ketoSplitCalc from "./ketoSplitCalc";
import whoSplitCalc from "./whoSplitCalc";

export default function macroSplitSelector(macroSplit, tdee, weight) {
  switch (macroSplit) {
    case "who":
      return whoSplitCalc(tdee);
    case "weightlifting":
      return macroSplitCalc(tdee, weight);
    case "keto":
      return ketoSplitCalc(tdee);
    default:
      return macroSplitCalc(tdee, weight);
  }
}
