import { StyledUserInfo } from "../styles/components/extraUserInformation.styles";

export default function ExtraUserInfo({
  title,
  text,
}: {
  title: string;
  text: { type: string; description: string }[];
}) {
  return (
    <StyledUserInfo>
      <h2>{title}</h2>
      {text.map((p, index) => {
        return (
          <p key={index}>
            <span>{p.type}</span>
            {p.description}
          </p>
        );
      })}
    </StyledUserInfo>
  );
}
