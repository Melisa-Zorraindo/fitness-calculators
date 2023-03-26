import { Layout } from "./components/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LiftingCalculator from "./pages/liftingCalculator";
import CalorieCalculator from "./pages/calorieCalculator";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/liftingCalculator" element={<LiftingCalculator />} />
          <Route path="/calorieCalculator" element={<CalorieCalculator />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
