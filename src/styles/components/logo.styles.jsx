import styled from "styled-components";

export const StyledLogo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;

  svg {
    background: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.main};
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;
