import ExtraUserInfo from "../extraUserInformation";
import InfoButton from "../buttons/infoButton";
import MeasurementSystemSelector from "../measurementSystemSelector";
import LiftingformMt from "../forms/liftingFormMt";
import LiftingformIm from "../forms/liftingFormIm";
import { useInformationStore } from "../../utils/stateManagement/informationState/informationState";
import { shallow } from "zustand/shallow";
import { useState } from "react";

export default function LiftingCalculatorCard() {
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
    <>
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
    </>
  );
}
