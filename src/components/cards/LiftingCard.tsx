import Card from ".";
import { Link } from "react-router-dom";
import weights from "../../assets/weights.png";

export default function LiftingCard() {
  return (
    <Link to={"/liftingCalculator"}>
      <Card
        img={weights}
        altText={"weights"}
        heading={"Lifting calculator"}
        text={
          "Tired of guessing how much weight to lift during your workouts? Use a lifting calculator!"
        }
        buttonText={"discover your goals"}
      />
    </Link>
  );
}
