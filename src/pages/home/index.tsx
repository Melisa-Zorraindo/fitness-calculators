import { StyledPage } from "../../styles/pages";
import CalorieCard from "../../components/cards/CalorieCard";
import LiftingCard from "../../components/cards/LiftingCard";

export default function Home() {
  return (
    <StyledPage>
      <h1>Choose a calculator</h1>
      <LiftingCard />
      <CalorieCard />
    </StyledPage>
  );
}
