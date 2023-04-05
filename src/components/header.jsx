import { StyledHeader } from "../styles/components/header.styles";
import Logo from "./logo";
import ThemeToggle from "./buttons/themeToggle";

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <ThemeToggle />
    </StyledHeader>
  );
}
