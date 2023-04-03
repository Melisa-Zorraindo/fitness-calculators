import styled from "styled-components";

export const StyledForm = styled.div`
  background-color: ${({ theme }) => theme.color.contrast};
  color: ${({ theme }) => theme.color.support};
  border-radius: 0.8rem;
  padding: 2rem;
  position: relative;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    .field-block {
      display: flex;
      flex-direction: column;
      margin: 2rem 0;
      font-size: 16px;
      font-weight: 700;

      input,
      select {
        height: 3rem;
        font-family: "Urbanist", sans-serif;
        font-size: 18px;
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
      }
    }
  }

  .results {
    margin-top: 4rem;

    span {
      font-weight: 700;
    }
  }
`;
