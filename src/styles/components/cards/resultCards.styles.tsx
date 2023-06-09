import styled from "styled-components";
import { CustomTheme } from "../../globalStyles";

export const StyledResultsCard = styled.div<{ theme: CustomTheme }>`
  background: ${(props) =>
    props.activeBackground
      ? `${props.theme.color.accent}`
      : `${props.theme.color.contrast}`};
  padding: 0.2rem;
  width: 320px;
  height: fit-content;
  border-radius: 0.8rem;
  position: relative;

  .innerBox {
    background-color: ${({ theme }) => theme.color.contrast};
    color: ${({ theme }) => theme.color.support};
    border-radius: 0.8rem;
    padding: 2rem;

    span {
      font-weight: ${({ theme }) => theme.fonts.bold};
    }
  }

  @media ${(props) => props.theme.media.medium} {
    margin-top: 2rem;
  }

  @media ${(props) => props.theme.media.small} {
    width: auto;
  }
`;
