import { StyledCTA } from "../../styles/components/buttons/primaryButton.styles";

export default function PrimaryCTA({ text }: { text: string }): JSX.Element {
  return <StyledCTA>{text}</StyledCTA>;
}
