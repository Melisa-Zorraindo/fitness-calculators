import { StyledIconLink } from "../../styles/components/iconLinks.styles";
import { Link } from "react-router-dom";

export default function IconLink({ icon: Icon, linkTo }) {
  return (
    <Link to={linkTo} target="_blank">
      <StyledIconLink>{<Icon size={16} />}</StyledIconLink>
    </Link>
  );
}
