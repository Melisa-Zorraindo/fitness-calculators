import styled from "styled-components";

export const StyledResultsCard = styled.div`
  //the code below is the highlighted backgroun that I want to apply only when the results card is populated
  /*  background: ${({ theme }) => theme.color.accent};
  padding: 0.3rem;
  height: fit-content;
  border-radius: 0.8rem; */

  //this is the inside card
  background-color: ${({ theme }) => theme.color.contrast};
  color: ${({ theme }) => theme.color.support};
  border-radius: 0.8rem;
  padding: 2rem;
`;
