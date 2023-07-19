import Link from "next/link";

import { StyledHeader, StyledLogo } from "./Header.style";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo
        src="/../public/assets/osterkamp.jpg"
        alt="logo"
        width={90}
        height={60}
      />
    </StyledHeader>
  );
}
