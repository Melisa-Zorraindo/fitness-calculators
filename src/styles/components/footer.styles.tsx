import styled from "styled-components";
import { DefaultTheme } from "styled-components";

export const StyledFooter = styled.footer<{ theme: DefaultTheme }>`
  display: flex;
  gap: 0.8rem;
  padding-bottom: 2rem;
`;
