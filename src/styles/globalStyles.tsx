import { createGlobalStyle, DefaultTheme } from "styled-components";

export const media = {
  medium: "(max-width: 785px)",
  small: "(max-width: 550px)",
  tiny: "(max-width: 280px)",
};

export const fonts = {
  family: `'Urbanist', sans-serif`,
  bold: 700,
  largeSize: "20px",
  regularSize: "18px",
  smallSize: "16px",
  tinySize: "12px",
};

export interface CustomTheme extends DefaultTheme {
  fonts: {
    family: string;
    bold: number;
    largeSize: string;
    regularSize: string;
    smallSize: string;
    tinySize: string;
  };
  color: {
    main: string;
    contrast: string;
    support: string;
    accent: string;
    onFocus: string;
    onFocusContrast: string;
  };
}

export const GlobalStyle = createGlobalStyle<{ theme: CustomTheme }>`

#root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: ${({ theme }) => theme.fonts.regularSize};
  color: ${({ theme }) => theme.color.support};
}

* {
  box-sizing: border-box;
}

body {
  max-width: 1280px;
  background-color: ${({ theme }) => theme.color.main};
  margin: 0 auto;

}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.color.main};
}
`;
