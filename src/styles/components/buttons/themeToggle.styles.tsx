import styled from "styled-components";
import { CustomTheme } from "../../globalStyles";

export const StyledThemeToggle = styled.button<{ theme: CustomTheme }>`
  border: none;
  display: inline-flex;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.contrast};
  color: ${({ theme }) => theme.color.support};
  padding: 0.7rem;
  cursor: pointer;
  // hides button's text from screen but keeps it for screen readers
  font-size: 0;

  &:hover {
    background: ${({ theme }) => theme.color.main};
  }
`;
