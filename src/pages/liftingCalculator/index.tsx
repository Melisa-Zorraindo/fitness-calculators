import { StyledPage } from "../../styles/pages";
import { StyledCalculatorCard } from "../../styles/components/calculators/calculatorCard.styles";
import InfoButton from "../../components/buttons/infoButton";
import MeasurementSystemSelector from "../../components/measurementSystemSelector";
import LiftingformMt from "../../components/forms/liftingFormMt";
import LiftingformIm from "../../components/forms/liftingFormIm";
import ExtraUserInfo from "../../components/extraUserInformation";
import { useInformationStore } from "../../utils/stateManagement/informationState/informationState";
import { shallow } from "zustand/shallow";
import { useState } from "react";
import ResultsLiftingCard from "../../components/cards/ResultsLiftingCard";

export default function LiftingCalculator(): JSX.Element {
  const { infoButtons } = useInformationStore(
    (state) => ({
      infoButtons: state.infoButtons,
    }),
    shallow
  );

  const targetButton = infoButtons.find(
    (button) => button.id === "liftingFormHowTo"
  );

  const [system, setSystem] = useState("metric");
  return (
    <StyledPage>
      <StyledCalculatorCard>
        <h1>Power up your lifts!</h1>
        <InfoButton id="liftingFormHowTo" />
        <MeasurementSystemSelector system={system} setSystem={setSystem} />
        {system === "metric" ? <LiftingformMt /> : <LiftingformIm />}

        {targetButton?.active && (
          <ExtraUserInfo
            title={"What does RPE mean?"}
            text={[
              {
                type: "",
                description: "RPE stands for Rate of Perceived Exertion.",
              },
              {
                type: "",
                description:
                  "The RPE scale ranges from 6.5 (very light) to 10 (maximum effort), with increments of 0.5.",
              },
              {
                type: "",
                description:
                  "Choose the RPE that most closely matches your perceived level of exertion during the lift.",
              },
            ]}
          />
        )}
      </StyledCalculatorCard>
      <ResultsLiftingCard />
    </StyledPage>
  );
}
