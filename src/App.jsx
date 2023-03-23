import logo from "./assets/logo.png";
import { Layout } from "./components/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Calories from "./pages/calorieCalculator";
import Lifting from "./pages/liftingCalculator";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/liftingCalculator" element={<Lifting />} />
          <Route path="/calorieCalculator" element={<Calories />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
