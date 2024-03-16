import { StyledIconLink } from "../../styles/components/iconLinks.styles";
import { Link } from "react-router-dom";
import { ComponentType } from "react";

export interface IconProps {
  size?: number;
  color?: string;
}
interface IconLinkProps {
  icon: ComponentType<IconProps>;
  linkTo: string;
  ariaLabel: string;
}

export default function IconLink({
  icon: Icon,
  linkTo,
  ariaLabel,
}: IconLinkProps) {
  return (
    <Link to={linkTo} target="_blank" aria-label={ariaLabel}>
      <StyledIconLink>{<Icon size={16} />}</StyledIconLink>
    </Link>
  );
}
