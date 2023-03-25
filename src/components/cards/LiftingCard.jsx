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
          <>
            <p>
              Tired of guessing how much weight to lift during your workouts?
              Use a lifting calculator!
            </p>
            {/*   <p>
              Input your one-rep max and desired reps, and it generates the
              perfect weight for your exercise. No guesswork, just efficient
              workouts.
            </p>
            <p>Try it now and take your fitness game to the next level!</p> */}
          </>
        }
        buttonText={"discover your goals"}
      />
    </Link>
  );
}
