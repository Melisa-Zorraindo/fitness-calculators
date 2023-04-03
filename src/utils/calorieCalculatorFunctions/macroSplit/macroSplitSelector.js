import macroSplitCalc from "./macroSplitCalc";
import ketoSplitCalc from "./ketoSplitCalc";
import balancedSplitCalc from "./balancedSplitCalc";

export default function macroSplitSelector(macroSplit, tdee, weight) {
  switch (macroSplit) {
    case "balanced":
      return balancedSplitCalc(tdee);
    case "weightlifting":
      return macroSplitCalc(tdee, weight);
    case "keto":
      return ketoSplitCalc(tdee);
    default:
      return macroSplitCalc(tdee, weight);
  }
}
