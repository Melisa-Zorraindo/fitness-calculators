import { Sun } from "react-feather";
import { StyledThemeToggle } from "../../styles/components/buttons/themeToggle.styles";
import { useThemesStore } from "../../utils/stateManagement/themesState";
import { shallow } from "zustand/shallow";

export default function ThemeToggle() {
  const { updateTheme } = useThemesStore(
    (state) => ({
      updateTheme: state.updateTheme,
    }),
    shallow
  );

  function toggleTheme() {
    updateTheme();
  }

  return (
    <StyledThemeToggle onClick={toggleTheme}>
      <Sun />
    </StyledThemeToggle>
  );
}
