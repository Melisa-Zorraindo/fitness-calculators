import { ThemeProvider } from "styled-components";
import { media, fonts } from "../globalStyles";

const dark = {
  color: {
    main: "#202020",
    contrast: "#333",
    support: "#fff",
    accent: "linear-gradient(90deg, #f7ff82 10%, #00ffff 100%)",
    onFocus: "#fbffc8",
    onFocusContrast: "#00ffff",
  },
  media: media,
  fonts: fonts,
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={dark}>{children}</ThemeProvider>
);

export default Theme;
