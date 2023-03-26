import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.color.contrast};
  color: ${({ theme }) => theme.color.support};
  border-radius: 0.8rem;
  padding: 4rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  transition: all 0.5s ease;

  &:hover {
    transform: rotateZ(5deg);
  }

  h2 {
    margin: 5rem 0 0;
  }

  img {
    width: 6.25rem;
    position: absolute;
    top: -2.5rem;
  }

  p {
    max-width: 400px;
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
