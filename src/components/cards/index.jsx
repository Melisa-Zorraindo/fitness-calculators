import { StyledCard } from "../../styles/components/cards/cards.styles";
import PrimaryCTA from "../buttons/primaryButton";

export default function Card({ heading, text }) {
  return (
    <StyledCard>
      <h2>{heading}</h2>
      <p>{text}</p>
    </StyledCard>
  );
}
