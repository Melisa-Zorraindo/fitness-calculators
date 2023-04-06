import { Sun, Moon } from "react-feather";
import { StyledThemeToggle } from "../../styles/components/buttons/themeToggle.styles";
import { useThemesStore } from "../../utils/stateManagement/themesState";
import { shallow } from "zustand/shallow";

export default function ThemeToggle() {
  const { theme, updateTheme } = useThemesStore(
    (state) => ({
      theme: state.theme,
      updateTheme: state.updateTheme,
    }),
    shallow
  );

  function toggleTheme() {
    updateTheme();
  }

  return (
    <StyledThemeToggle onClick={toggleTheme}>
      {theme ? <Sun /> : <Moon />}
      {/* <Sun /> */}
    </StyledThemeToggle>
  );
}
