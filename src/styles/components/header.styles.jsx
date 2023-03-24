import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.support};
  }

  button {
    border: none;
    display: inline-flex;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.contrast};
    color: ${({ theme }) => theme.color.support};
    padding: 0.7rem;
    cursor: pointer;
  }
`;
