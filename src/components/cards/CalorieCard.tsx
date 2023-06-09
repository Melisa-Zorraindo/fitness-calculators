import Card from ".";
import { Link } from "react-router-dom";
import meal from "../../assets/meal.png";

export default function CalorieCard() {
  return (
    <Link to={"/calorieCalculator"}>
      <Card
        img={meal}
        alt={"meal"}
        heading={"Calorie calculator"}
        text={
          "Are you struggling to meet your fitness goals? A calorie calculator can help!"
        }
        buttonText={"start your journey"}
      />
    </Link>
  );
}
