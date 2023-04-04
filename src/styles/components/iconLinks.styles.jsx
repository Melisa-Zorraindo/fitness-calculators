import styled from "styled-components";

export const StyledIconLink = styled.div`
  display: inline-flex;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.contrast};
  color: ${({ theme }) => theme.color.support};
  padding: 0.7rem;

  &:hover {
    background: ${({ theme }) => theme.color.main};
  }
`;
