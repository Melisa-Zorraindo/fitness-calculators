import { StyledPage } from "../../styles/pages";
import { StyledForm } from "../../styles/components/forms/calc.styles";
import CalorieForm from "../../components/forms/calorieCalc";

export default function CalorieCalculator() {
  return (
    <StyledPage>
      <StyledForm>
        <h1>Fuel your body!</h1>
        <CalorieForm />
      </StyledForm>
    </StyledPage>
  );
}
