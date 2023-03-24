import { StyledCard } from "../../styles/components/cards/cards.styles";
import PrimaryCTA from "../buttons/primaryButton";

export default function Card({ heading, text, img, altText, buttonText }) {
  return (
    <StyledCard>
      <img src={img} alt={altText}></img>
      <h2>{heading}</h2>
      <div>{text}</div>
      <PrimaryCTA text={buttonText} />
    </StyledCard>
  );
}
