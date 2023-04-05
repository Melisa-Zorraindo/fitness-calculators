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

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-corner {
    background: ${({ theme }) => theme.color.contrast};
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.8rem;
  }

  p {
    span {
      color: ${({ theme }) => theme.color.onFocusContrast};
    }
  }
`;
