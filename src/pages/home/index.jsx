import { StyledPage } from "../../styles/pages";
import Calories from "../calorieCalculator";
import Lifting from "../liftingCalculator";

export default function Home() {
  return (
    <StyledPage>
      <h1>Choose a calculator</h1>
      <Lifting />
      <Calories />
    </StyledPage>
  );
}
