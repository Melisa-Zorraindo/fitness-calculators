import { StyledHeader } from "../styles/components/header.styles";
import Logo from "./logo";
import { Sun } from "react-feather";

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <button>
        <Sun />
      </button>
    </StyledHeader>
  );
}
