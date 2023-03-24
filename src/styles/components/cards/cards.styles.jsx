import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.color.support};
  color: ${({ theme }) => theme.color.main};
  border-radius: 1.5rem;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 6.25rem;
  }

  @media (max-width: ${({ theme }) => theme.break.medium}) {
    img {
      width: 5.25rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.break.small}) {
    img {
      width: 4.25rem;
    }
  }
`;
