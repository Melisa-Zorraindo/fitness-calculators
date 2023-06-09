import styled, { css } from "styled-components";
import { useThemesStore } from "../../utils/stateManagement/themesState";

const titlesLightMode = css`
  color: ${({ theme }) => theme.color.support};
  font-weight: ${({ theme }) => theme.fonts.bold};
`;

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
      color: ${({ theme }) =>
        useThemesStore.getState().theme
          ? theme.color.onFocusContrast
          : titlesLightMode};
    }
  }
`;
