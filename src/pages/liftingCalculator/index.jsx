import Card from "../../components/cards";
import { Link } from "react-router-dom";

export default function Lifting() {
  return (
    <Link to={"/liftingCalculator"}>
      <Card
        heading={"Lifting calculator"}
        text={"This is how the calculator works"}
      />
    </Link>
  );
}
