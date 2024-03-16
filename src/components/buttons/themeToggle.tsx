import { Sun, Moon } from "react-feather";
import { StyledThemeToggle } from "../../styles/components/buttons/themeToggle.styles";
import { useThemesStore } from "../../utils/stateManagement/themesState";
import { shallow } from "zustand/shallow";

export default function ThemeToggle(): JSX.Element {
  const { theme, updateTheme } = useThemesStore(
    (state) => ({
      theme: state.theme,
      updateTheme: state.updateTheme,
    }),
    shallow
  );

  function toggleTheme(): void {
    updateTheme();
  }

  return (
    <StyledThemeToggle onClick={toggleTheme} aria-label="theme toggle">
      {theme ? <Sun /> : <Moon />}
    </StyledThemeToggle>
  );
}
