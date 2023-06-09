import styled from "styled-components";
import { CustomTheme } from "../../globalStyles";

export const StyledCalculatorCard = styled.div<{ theme: CustomTheme }>`
  background-color: ${({ theme }) => theme.color.contrast};
  color: ${({ theme }) => theme.color.support};
  border-radius: 0.8rem;
  padding: 2rem;
  position: relative;
  width: 384px;

  .results {
    margin-top: 4rem;

    span {
      font-weight: ${({ theme }) => theme.fonts.bold};
    }
  }

  @media ${(props) => props.theme.media.small} {
    width: 100%;
  }
`;
