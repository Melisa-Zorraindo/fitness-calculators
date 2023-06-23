import { StyledResultsCard } from "../../styles/components/cards/resultCards.styles";
import InfoButton from "../buttons/infoButton";
import ExtraUserInfo from "../extraUserInformation";
import { useCalorieStore } from "../../utils/stateManagement/calorieState";
import { useInformationStore } from "../../utils/stateManagement/informationState/informationState";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";

export default function ResultsCalorieCard(): JSX.Element {
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

  const { infoButtons } = useInformationStore(
    (state) => ({
      infoButtons: state.infoButtons,
    }),
    shallow
  );

  const targetButton = infoButtons.find(
    (button) => button.id === "resultsCalorieExtraInfo"
  );

  //if the user forgets to close the information displayed in the results card and changes navigation,
  //the button to close the information panel is gone when they're back to calorieCalculator page
  //and they have no possibility to close it the panel to immediately see the results when they reuse the calculator.
  //To prevent this set the targetButton.active to false when there are no results to display
  if (calories === 0 && targetButton !== undefined) {
    targetButton.active = false;
  }

  return (
    <StyledResultsCard activeBackground={calories} id="resultsCalorieCard">
      {calories !== 0 && <InfoButton id="resultsCalorieExtraInfo" />}
      {targetButton && targetButton.active && (
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
  );
}
