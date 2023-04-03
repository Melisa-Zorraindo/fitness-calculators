import { StyledResultsCard } from "../../styles/components/cards/resultCards.styles";
import InfoButton from "../buttons/infoButton";
import { useCalorieStore } from "../../utils/stateManagement/calorieState";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";
import { Info } from "react-feather";

export default function ResultsCalorieCard() {
  const { calories, protein, fats, carbs, weeklyBudget, resetValues } =
    useCalorieStore(
      (state) => ({
        calories: state.calories,
        protein: state.protein,
        fats: state.fats,
        carbs: state.carbs,
        weeklyBudget: state.weeklyBudget,
        resetValues: state.resetValues,
      }),
      shallow
    );

  useEffect(() => {
    resetValues();
  }, []);

  return (
    <>
      <StyledResultsCard activeBackground={calories} id="resultsLiftingCard">
        {calories !== 0 && <InfoButton />}
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
            Weekly budget: <span>{weeklyBudget}</span> Kcal
          </p>
        </div>
      </StyledResultsCard>
    </>
  );
}
