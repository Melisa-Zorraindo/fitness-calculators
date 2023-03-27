import { StyledPage } from "../../styles/pages";
import { StyledForm } from "../../styles/components/forms/calc.styles";
import CalorieForm from "../../components/forms/calorieCalc";
import ResultsCalorieCard from "../../components/cards/ResultsCalorieCard";

export default function CalorieCalculator() {
  return (
    <StyledPage>
      <StyledForm>
        <h1>Fuel your body!</h1>
        <CalorieForm />
      </StyledForm>
      <ResultsCalorieCard />
    </StyledPage>
  );
}
