import { StyledPage } from "../../styles/pages";
import Calories from "../calorieCalculator";
import Lifting from "../liftingCalculator";

export default function Home() {
  return (
    <StyledPage>
      <Calories />
      <Lifting />
    </StyledPage>
  );
}
