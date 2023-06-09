import styled from "styled-components";
import { CustomTheme } from "../../globalStyles";

export const StyledCTA = styled.button<{ theme: CustomTheme }>`
  background: ${({ theme }) => theme.color.accent};
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: ${({ theme }) => theme.fonts.largeSize};
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.onFocusContrast};
  }

  @media ${(props) => props.theme.media.small} {
    font-size: ${({ theme }) => theme.fonts.smallSize};
  }
`;
