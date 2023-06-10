import { StyledLogo } from "../styles/components/logo.styles";
import { Link } from "react-router-dom";
import { Zap } from "react-feather";

export default function Logo(): JSX.Element {
  return (
    <Link to="/">
      <StyledLogo>
        <Zap size={40} />
        <div>
          <span>fitness</span>
          <span>calculators</span>
        </div>
      </StyledLogo>
    </Link>
  );
}
