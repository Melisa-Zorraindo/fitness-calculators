import { StyledResultsCard } from "../../styles/components/cards/resultCards.styles";
import { useCalorieStore } from "../../utils/stateManagement/calorieState";
import { shallow } from "zustand/shallow";

export default function ResultsCalorieCard() {
  const { calories, protein, fats, carbs, weeklyBudget } = useCalorieStore(
    (state) => ({
      calories: state.calories,
      protein: state.protein,
      fats: state.fats,
      carbs: state.carbs,
      weeklyBudget: state.weeklyBudget,
    }),
    shallow
  );

  return (
    <StyledResultsCard activeBackground={calories} id="resultsLiftingCard">
      <div className="innerBox">
        <h2>Results</h2>
        <p>
          Calories: <span>{calories}</span> Kcal
        </p>
        <p>
          Protein: <span>{protein}</span> g
        </p>
        <p>
          Fats: <span>{fats}</span> g
        </p>
        <p>
          Carbs: <span>{carbs}</span> g
        </p>
        <p>
          Weekly calorie budget: <span>{weeklyBudget}</span> Kcal
        </p>
      </div>
    </StyledResultsCard>
  );
}
