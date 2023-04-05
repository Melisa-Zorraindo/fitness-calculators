import styled from "styled-components";

export const StyledThemeToggle = styled.button`
  border: none;
  display: inline-flex;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.contrast};
  color: ${({ theme }) => theme.color.support};
  padding: 0.7rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.main};
  }
`;