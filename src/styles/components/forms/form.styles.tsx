import styled from "styled-components";
import { useThemesStore } from "../../../utils/stateManagement/themesState";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  .field-block {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    font-size: ${({ theme }) => theme.fonts.smallSize};
    font-weight: ${({ theme }) => theme.fonts.bold};

    input,
    select {
      height: 3rem;
      font-family: ${({ theme }) => theme.fonts.family};
      font-size: ${({ theme }) => theme.fonts.regularSize};
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.color.support};
      color: ${({ theme }) => theme.color.support};
      background-color: ${({ theme }) => theme.color.contrast};

      &:focus {
        outline: none;
        border-bottom: 2px solid ${({ theme }) => theme.color.onFocusContrast};
      }
    }

    .validation-error {
      background-color: ${({ theme }) => theme.color.onFocusContrast};
      color: ${({ theme }) => theme.color.contrast};

      color: ${({ theme }) =>
        useThemesStore.getState().theme
          ? theme.color.contrast
          : theme.color.support};
    }
  }

  @media ${(props) => props.theme.media.tiny} {
    .field-block {
      input,
      select {
        font-size: ${({ theme }) => theme.fonts.tinySize};
      }
    }
  }
`;
