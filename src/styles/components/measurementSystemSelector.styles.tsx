import styled from "styled-components";
import { DefaultTheme } from "styled-components";

export const StyledMeasurementSystemSelector = styled.div<{
  theme: DefaultTheme;
}>`
  display: flex;
  justify-content: space-evenly;
  margin: 3rem 0;
`;
