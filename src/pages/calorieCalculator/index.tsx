import { StyledPage } from "../../styles/pages";
import { StyledCalculatorCard } from "../../styles/components/calculators/calculatorCard.styles";
import InfoButton from "../../components/buttons/infoButton";
import MeasurementSystemSelector from "../../components/measurementSystemSelector";
import CalorieFormMt from "../../components/forms/calorieFormMt";
import CalorieFormIm from "../../components/forms/calorieFormIm";
import ExtraUserInfo from "../../components/extraUserInformation";
import { useInformationStore } from "../../utils/stateManagement/informationState/informationState";
import { shallow } from "zustand/shallow";
import { useState } from "react";
import ResultsCalorieCard from "../../components/cards/ResultsCalorieCard";

export default function CalorieCalculator(): JSX.Element {
  const { infoButtons } = useInformationStore(
    (state) => ({
      infoButtons: state.infoButtons,
    }),
    shallow
  );

  const targetButton = infoButtons.find(
    (button) => button.id === "calorieFormHowTo"
  );

  const [system, setSystem] = useState("metric");
  return (
    <StyledPage>
      <StyledCalculatorCard>
        <h1>Fuel your body!</h1>
        <InfoButton id="calorieFormHowTo" />
        <MeasurementSystemSelector system={system} setSystem={setSystem} />
        {system === "metric" ? <CalorieFormMt /> : <CalorieFormIm />}
        {targetButton?.active && (
          <ExtraUserInfo
            title={"How to choose your macro split"}
            text={[
              {
                type: "Weightlifting: ",
                description:
                  "aim for 1.6 g - 2g of protein and 0.8g - 1g of fats per kilo of body weight, with the remaining calories coming from carbohydrates. This option will set the calculator to the higher end of the recommended range for protein and fat intake.",
              },
              {
                type: "Keto diet: ",
                description:
                  "aim for 5 - 10% carbs, 10 - 15% protein, and 75 - 80 % fats. The percentage split used in this calculator is 10% carbs, 15% protein, and 75% fats.",
              },
              {
                type: "Balanced: ",
                description:
                  "aim for 45 - 65% carbs, 10 - 35% protein, and 20 - 30% fats. The percentage split used in this calculator is 55% carbs, 15% protein, and 30% fats.",
              },
            ]}
          />
        )}
      </StyledCalculatorCard>
      <ResultsCalorieCard />
    </StyledPage>
  );
}
