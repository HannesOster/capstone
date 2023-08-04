import { StyledHeader, StyledLogo } from "./styles";

export default function Header() {
  return (
    <StyledHeader role="header">
      <StyledLogo
        src="/assets/osterkamp.jpg"
        alt="logo"
        width={120}
        height={70}
      />
    </StyledHeader>
  );
}
