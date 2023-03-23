import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

#root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  font-family: 'Urbanist', sans-serif;
  font-size: 18px;
  color: ${({ theme }) => theme.color.support};
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  max-width: 1280px;
  background-color: ${({ theme }) => theme.color.main};
  margin: 0 auto;
  
}
`;
