import { StyledInfoButton } from "../../styles/components/buttons/infoButton.styles";
import { HelpCircle, X } from "react-feather";
import { useInformationStore } from "../../utils/stateManagement/informationState/informationState";
import { shallow } from "zustand/shallow";

export default function InfoButton({ id }: { id: string }): JSX.Element {
  const { infoButtons, displayButton, hideButton } = useInformationStore(
    (state) => ({
      infoButtons: state.infoButtons,
      displayButton: state.displayButton,
      hideButton: state.hideButton,
    }),
    shallow
  );

  const buttonIndex = infoButtons.findIndex((button) => button.id === id);
  const button = infoButtons[buttonIndex];

  function handleClick(id: string) {
    const buttonActive = button.active;
    buttonActive ? hideButton(id) : displayButton(id);
  }

  return (
    <StyledInfoButton
      onClick={() => handleClick(id)}
      id={id}
      aria-label="how to use this calculator"
    >
      {button.active ? <X size={"2rem"} /> : <HelpCircle size={"2rem"} />}
    </StyledInfoButton>
  );
}
