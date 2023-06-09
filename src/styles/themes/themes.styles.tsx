import { media, fonts } from "../globalStyles";
import { DefaultTheme } from "styled-components";

export const dark: DefaultTheme = {
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

export const light: DefaultTheme = {
  color: {
    main: "#fff",
    contrast: "#f2f2f2",
    support: "#000",
    accent: "linear-gradient(90deg, #f7ff82 10%, #00ffff 100%)",
    onFocus: "#fbffc8",
    onFocusContrast: "#00ffff",
  },
  media: media,
  fonts: fonts,
};
