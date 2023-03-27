import { StyledResultsCard } from "../../styles/components/cards/resultCards.styles";

export default function ResultsLiftingCard({ oneRM, weight }) {
  return (
    <StyledResultsCard>
      <div>
        <h2>Results</h2>
        <p>Estimated 1 RM: {oneRM || 0}</p>
        <p>Weight: {weight || 0}</p>
      </div>
    </StyledResultsCard>
  );
}
