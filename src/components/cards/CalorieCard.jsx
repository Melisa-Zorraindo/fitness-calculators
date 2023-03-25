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
          <>
            <p>
              Are you struggling to meet your fitness goals? A calorie
              calculator can help!
            </p>
            {/* <p>
              This tool calculates the number of calories you should consume
              each day based on factors such as your age, weight, height, and
              activity level.
            </p>
            <p>Try it out today and see the difference it can make!</p> */}
          </>
        }
        buttonText={"start your journey"}
      />
    </Link>
  );
}
