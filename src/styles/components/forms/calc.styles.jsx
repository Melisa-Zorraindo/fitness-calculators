import styled from "styled-components";

export const StyledForm = styled.div`
  background-color: ${({ theme }) => theme.color.support};
  color: ${({ theme }) => theme.color.main};
  border-radius: 1.5rem;
  padding: 2rem;
  margin: 0 auto;

  form {
    width: 100%;

    .field-block {
      display: flex;
      flex-direction: column;
      margin: 3rem 0;
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
          border-bottom: 2px solid ${({ theme }) => theme.color.onFocus};
        }
      }
    }

    .btn-block {
      text-align: center;
    }
  }
`;
