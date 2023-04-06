import { StyledPage } from "../../styles/pages";
import { StyledForm } from "../../styles/components/forms/calc.styles";
import LiftingCalculatorCard from "../../components/calculators/liftingCalculatorCard";
import ResultsLiftingCard from "../../components/cards/ResultsLiftingCard";

export default function LiftingCalculator() {
  return (
    <StyledPage>
      <StyledForm>
        <h1>Power up your lifts!</h1>
        <LiftingCalculatorCard />
      </StyledForm>
      <ResultsLiftingCard />
    </StyledPage>
  );
}
