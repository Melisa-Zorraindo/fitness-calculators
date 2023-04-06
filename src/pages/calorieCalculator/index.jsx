import { StyledPage } from "../../styles/pages";
import { StyledCalculatorCard } from "../../styles/components/calculators/calculatorCard.styles";
import CalorieCalculatorCard from "../../components/calculators/calorieCalculatorCard";
import ResultsCalorieCard from "../../components/cards/ResultsCalorieCard";

export default function CalorieCalculator() {
  return (
    <StyledPage>
      <StyledCalculatorCard>
        <h1>Fuel your body!</h1>
        <CalorieCalculatorCard />
      </StyledCalculatorCard>
      <ResultsCalorieCard />
    </StyledPage>
  );
}
