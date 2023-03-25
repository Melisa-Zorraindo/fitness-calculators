import styled from "styled-components";

export const StyledPage = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border: 1px solid white;
  gap: 1rem;
  margin: 4rem 0;

  h1 {
    flex: 0 0 100%;
    text-align: center;
  }

  a {
    flex: 0 0 40%;
    background: ${({ theme }) => theme.color.accent};
    border-radius: 0.8rem;
    margin: 4rem auto;
  }

  @media (max-width: ${({ theme }) => theme.break.medium}) {
    a {
      flex: 0 0 70%;
    }
  }

  @media (max-width: ${({ theme }) => theme.break.small}) {
    a {
      flex: 0 0 100%;
    }
  }
`;
