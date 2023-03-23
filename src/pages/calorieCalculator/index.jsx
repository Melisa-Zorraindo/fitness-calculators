import Card from "../../components/cards";
import { Link } from "react-router-dom";

export default function Calories() {
  return (
    <Link to={"/calorieCalculator"}>
      <Card
        heading={"Calorie calculator"}
        text={"This is how the calculator works"}
      />
    </Link>
  );
}
