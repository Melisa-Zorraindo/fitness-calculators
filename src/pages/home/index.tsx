import { Link } from "react-router-dom";
import { StyledPage } from "../../styles/pages";
import CalculatorCard from "../../components/cards/CalculatorCard";
import meal from "../../assets/meal.png";
import weights from "../../assets/weights.png";

export default function Home() {
  return (
    <StyledPage>
      <h1>Choose a calculator</h1>
      <Link to={"/calorieCalculator"}>
        <CalculatorCard
          heading="Calorie calculator"
          text="Are you struggling to meet your fitness goals? A calorie calculator can help!"
          img={meal}
          altText="meal"
          buttonText="start your journey"
        />
      </Link>
      <Link to={"/liftingCalculator"}>
        <CalculatorCard
          heading="Lifting calculator"
          text="Tired of guessing how much weight to lift during your workouts? Use a lifting calculator!"
          img={weights}
          altText="weights"
          buttonText="set your goals"
        />
      </Link>
    </StyledPage>
  );
}
