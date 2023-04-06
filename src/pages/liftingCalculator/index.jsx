import { StyledPage } from "../../styles/pages";
import { StyledCalculatorCard } from "../../styles/components/calculators/calculatorCard.styles";
import LiftingCalculatorCard from "../../components/calculators/liftingCalculatorCard";
import ResultsLiftingCard from "../../components/cards/ResultsLiftingCard";

export default function LiftingCalculator() {
  return (
    <StyledPage>
      <StyledCalculatorCard>
        <h1>Power up your lifts!</h1>
        <LiftingCalculatorCard />
      </StyledCalculatorCard>
      <ResultsLiftingCard />
    </StyledPage>
  );
}
