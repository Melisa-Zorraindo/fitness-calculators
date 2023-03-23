import { ThemeProvider } from "styled-components";

const dark = {
  color: {
    main: "#202020",
    support: "#fffddd",
    accent: "linear-gradient(90deg, #f7ff82 10%, #00ffff 100%)",
  },
  break: {
    medium: "900px",
    small: "550px",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={dark}>{children}</ThemeProvider>
);

export default Theme;
