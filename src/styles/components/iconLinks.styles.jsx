import styled from "styled-components";

export const StyledIconLink = styled.div`
  display: inline-flex;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.support};
  color: ${({ theme }) => theme.color.main};
  padding: 0.7rem;
`;
