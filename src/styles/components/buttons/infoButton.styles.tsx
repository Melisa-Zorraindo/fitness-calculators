import styled from "styled-components";
import { CustomTheme } from "../../globalStyles";

export const StyledInfoButton = styled.button<{ theme: CustomTheme }>`
  position: absolute;
  top: -2rem;
  left: 2rem;
  width: 4rem;
  height: 4rem;
  background: ${({ theme }) => theme.color.accent};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background: ${({ theme }) => theme.color.onFocusContrast};
  }

  @media ${(props) => props.theme.media.tiny} {
    top: -1.5rem;
    left: 1.5rem;
    width: 3rem;
    height: 3rem;
  }
`;
