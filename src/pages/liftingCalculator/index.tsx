import { StyledPage } from "../../styles/pages";
import { StyledCalculatorCard } from "../../styles/components/calculators/calculatorCard.styles";
import LiftingCalculatorCard from "../../components/calculators/liftingCalculatorCard";
import ResultsLiftingCard from "../../components/cards/ResultsLiftingCard";

export default function LiftingCalculator() {
  return (
    <StyledPage>
      <StyledCalculatorCard>
        <LiftingCalculatorCard />
      </StyledCalculatorCard>
      <ResultsLiftingCard />
    </StyledPage>
  );
}
