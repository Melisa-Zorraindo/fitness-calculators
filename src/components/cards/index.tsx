import { StyledCard } from "../../styles/components/cards/cards.styles";
import PrimaryCTA from "../buttons/primaryButton";
import { CardData } from "../../types/genericCard";

export default function Card({
  heading,
  text,
  img,
  altText,
  buttonText,
}: CardData) {
  return (
    <StyledCard>
      <img src={img} alt={altText}></img>
      <h2>{heading}</h2>
      <p>{text}</p>
      <PrimaryCTA text={buttonText} />
    </StyledCard>
  );
}
