import { Layout } from "./components/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LiftingCalculator from "./pages/liftingCalculator";
import CalorieCalculator from "./pages/calorieCalculator";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./styles/themes/themes.styles";
import { useThemesStore } from "./utils/stateManagement/themesState";
import { shallow } from "zustand/shallow";

function App() {
  const { theme } = useThemesStore(
    (state) => ({
      theme: state.theme,
    }),
    shallow
  );

  let selectedTheme;
  theme ? (selectedTheme = dark) : (selectedTheme = light);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/liftingCalculator" element={<LiftingCalculator />} />
          <Route path="/calorieCalculator" element={<CalorieCalculator />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
