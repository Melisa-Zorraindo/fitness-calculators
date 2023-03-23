import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.color.support};
  color: ${({ theme }) => theme.color.main};
  border-radius: 1.5rem;
  margin: 0 auto;
  padding: 2rem;
`;
