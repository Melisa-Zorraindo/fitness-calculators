import { StyledResultsCard } from "../../styles/components/cards/resultCards.styles";
import { useLiftingStore } from "../../utils/stateManagement/liftingState";
import { shallow } from "zustand/shallow";

export default function ResultsLiftingCard() {
  const { oneRm, weightToLift } = useLiftingStore(
    (state) => ({
      oneRm: state.oneRm,
      weightToLift: state.weightToLift,
    }),
    shallow
  );

  return (
    <StyledResultsCard activeBackground={oneRm}>
      <div className="innerBox">
        <h2>Results</h2>
        <p>
          Estimated 1 RM: <span>{oneRm} </span>
          Kg
        </p>
        <p>
          Recommended to lift: <span>{weightToLift} </span>
          Kg
        </p>
      </div>
    </StyledResultsCard>
  );
}
