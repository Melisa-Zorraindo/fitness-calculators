import { StyledPage } from "../../styles/pages";
import { StyledForm } from "../../styles/components/forms/calc.styles";
import LiftingForm from "../../components/forms/weightCalc";
import ResultsLiftingCard from "../../components/cards/ResultsLiftingCard";

export default function LiftingCalculator() {
  return (
    <StyledPage>
      <StyledForm>
        <h1>Power up your lifts!</h1>
        <LiftingForm />
      </StyledForm>
      <ResultsLiftingCard />
    </StyledPage>
  );
}
