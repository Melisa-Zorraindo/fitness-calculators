import styled from "styled-components";

export const StyledCTA = styled.button`
  background: ${({ theme }) => theme.color.accent};
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.size};
  font-family: ${({ theme }) => theme.font.family};
`;
