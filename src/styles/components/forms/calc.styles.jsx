import styled from "styled-components";

export const StyledForm = styled.div`
  background-color: ${({ theme }) => theme.color.support};
  color: ${({ theme }) => theme.color.main};
  border-radius: 0.8rem;
  padding: 2rem;
  margin: 0 auto;
  position: relative;

  .info-btn {
    position: absolute;
    top: -2rem;
    width: 4rem;
    height: 4rem;
    background: ${({ theme }) => theme.color.accent};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;
  }

  .instructions {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.8rem;
    padding: 2rem 1rem;
    background: ${({ theme }) => theme.color.onFocus};
    display: none;
    height: 100%;

    ol {
      padding: 1rem;
    }

    li {
      padding: 0.5rem 0;

      span {
        font-weight: 700;
      }
    }

    p {
      span {
        font-weight: 700;
      }
    }
  }

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
        border-bottom: 1px solid ${({ theme }) => theme.color.contrast};

        &:focus {
          outline: none;
          border-bottom: 2px solid ${({ theme }) => theme.color.onFocusContrast};
        }
      }
    }
  }
`;
