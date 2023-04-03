import { StyledInfoButton } from "../../styles/components/buttons/infoButton.styles";
import { Info } from "react-feather";

export default function InfoButton() {
  return (
    <StyledInfoButton>
      <Info size={"2rem"} />
    </StyledInfoButton>
  );
}
