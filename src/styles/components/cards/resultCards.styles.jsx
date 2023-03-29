import styled from "styled-components";

export const StyledResultsCard = styled.div`
  background: ${(props) =>
    props.activeBackground
      ? `${props.theme.color.accent}`
      : `${props.theme.color.contrast}`};
  padding: 0.2rem;
  width: 320px;
  height: fit-content;
  border-radius: 0.8rem;

  .innerBox {
    background-color: ${({ theme }) => theme.color.contrast};
    color: ${({ theme }) => theme.color.support};
    border-radius: 0.8rem;
    padding: 2rem;

    span {
      font-weight: 700;
    }
  }

  @media (max-width: ${({ theme }) => theme.break.small}) {
    width: auto;
  }
`;
