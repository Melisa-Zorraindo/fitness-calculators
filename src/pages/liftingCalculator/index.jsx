import { StyledForm } from "../../styles/components/forms/calc.styles";
import LiftingForm from "../../components/forms/weightCalc";

export default function LiftingCalculator() {
  return (
    <StyledForm>
      <h1>Power up your lifts!</h1>
      <LiftingForm />
    </StyledForm>
  );
}
