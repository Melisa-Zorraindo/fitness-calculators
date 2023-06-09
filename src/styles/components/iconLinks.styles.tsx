import styled from "styled-components";
import { CustomTheme } from "../globalStyles";

export const StyledIconLink = styled.div<{ theme: CustomTheme }>`
  display: inline-flex;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.contrast};
  color: ${({ theme }) => theme.color.support};
  padding: 0.7rem;

  &:hover {
    background: ${({ theme }) => theme.color.main};
  }
`;
