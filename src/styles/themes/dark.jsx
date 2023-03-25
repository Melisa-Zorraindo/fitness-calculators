import { ThemeProvider } from "styled-components";

const dark = {
  color: {
    main: "#202020",
    contrast: "#333",
    support: "#fff",
    accent: "linear-gradient(90deg, #f7ff82 10%, #00ffff 100%)",
    onFocus: "#fbffc8",
    onFocusContrast: "#00ffff",
  },
  break: {
    medium: "820px",
    small: "550px",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={dark}>{children}</ThemeProvider>
);

export default Theme;
