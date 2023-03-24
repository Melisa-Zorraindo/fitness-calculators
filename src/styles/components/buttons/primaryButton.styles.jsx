import styled from "styled-components";

export const StyledCTA = styled.button`
  background: ${({ theme }) => theme.color.accent};
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  font-weight: 700;
  font-family: "Urbanist", sans-serif;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.break.medium}) {
    font-size: 18px;
  }
`;
