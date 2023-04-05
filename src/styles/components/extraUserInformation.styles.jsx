import styled from "styled-components";

export const StyledUserInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.8rem;
  padding: 2rem 1rem;
  background: ${({ theme }) => theme.color.contrast};
  color: ${({ theme }) => theme.color.support};
  height: 100%;
  overflow: scroll;

  p {
    span {
      color: ${({ theme }) => theme.color.onFocusContrast};
    }
  }
`;
