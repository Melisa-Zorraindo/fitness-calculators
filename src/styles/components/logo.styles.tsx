import styled from "styled-components";
import { CustomTheme } from "../globalStyles";

export const StyledLogo = styled.div<{ theme: CustomTheme }>`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;

  svg {
    background: ${({ theme }) => theme.color.accent};
    color: #000;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  @media ${(props) => props.theme.media.tiny} {
    div {
      display: none;
    }
  }
`;
