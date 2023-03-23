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
    background-color: transparent;
    color: ${({ theme }) => theme.color.support};
    cursor: pointer;
  }
`;
