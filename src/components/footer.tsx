import { StyledFooter } from "../styles/components/footer.styles";
import IconLink from "./iconLinks";
import { GitHub, Linkedin, Mail } from "react-feather";
import { IconProps } from "./iconLinks";

export default function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <IconLink
        icon={GitHub as React.ComponentType<IconProps>}
        linkTo={"https://github.com/Melisa-Zorraindo"}
      />
      <IconLink
        icon={Linkedin as React.ComponentType<IconProps>}
        linkTo={"https://www.linkedin.com/in/melisa-zorraindo-81719618b/"}
      />
      <IconLink
        icon={Mail as React.ComponentType<IconProps>}
        linkTo={"mailto:melisa.zorraindo@gmail.com"}
      />
    </StyledFooter>
  );
}
