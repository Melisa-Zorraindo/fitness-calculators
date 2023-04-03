import styled from "styled-components";

export const StyledInfoButton = styled.button`
  position: absolute;
  top: -2rem;
  width: 4rem;
  height: 4rem;
  background: ${({ theme }) => theme.color.accent};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
`;
