import { StyledFooter } from "../styles/components/footer.styles";
import IconLink from "./iconLinks";
import { GitHub, Linkedin, Mail } from "react-feather";

export default function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <IconLink icon={GitHub} linkTo={"https://github.com/Melisa-Zorraindo"} />
      <IconLink
        icon={Linkedin}
        linkTo={"https://www.linkedin.com/in/melisa-zorraindo-81719618b/"}
      />
      <IconLink icon={Mail} linkTo={"mailto:melisa.zorraindo@gmail.com"} />
    </StyledFooter>
  );
}
