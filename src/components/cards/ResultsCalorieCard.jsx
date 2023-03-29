import { StyledResultsCard } from "../../styles/components/cards/resultCards.styles";

export default function ResultsCalorieCard({ calories, protein, fats, carbs }) {
  return (
    <StyledResultsCard>
      <div className="innerBox">
        <h2>Results</h2>
        <p>Calories: {calories || 0}</p>
        <p>Protein: {protein || 0}</p>
        <p>Fats: {fats || 0}</p>
        <p>Carbs: {carbs || 0}</p>
        <p>Weekly calorie budget: {calories * 7 || 0}</p>
      </div>
    </StyledResultsCard>
  );
}
