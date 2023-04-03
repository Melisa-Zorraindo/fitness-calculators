import { StyledResultsCard } from "../../styles/components/cards/resultCards.styles";
import InfoButton from "../buttons/infoButton";
import ExtraUserInfo from "../extraUserInformation";
import { useCalorieStore } from "../../utils/stateManagement/calorieState";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";

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
      <StyledResultsCard activeBackground={calories} id="resultsCalorieCard">
        {calories !== 0 && <InfoButton />}
        {calories !== 0 && (
          <ExtraUserInfo
            title={"Note"}
            text={[
              {
                type: "",
                description:
                  "Keep in mind that the results are only an estimate, and you may need to adjust your calorie intake based on your individual needs and goals. Also, please make sure to consult with a healthcare professional before making any significant changes to your macro or exercise routine.",
              },
            ]}
          />
        )}
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
