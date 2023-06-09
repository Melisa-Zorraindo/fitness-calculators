import styled from "styled-components";
import { CustomTheme } from "../globalStyles";

export const StyledHeader = styled.header<{ theme: CustomTheme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.support};
  }
`;
