import { StyledHeader, StyledLogo } from "../Header/styles";
import SearchInput from "../SearchInput/SearchInput";

export default function SearchHeader() {
  return (
    <StyledHeader role="header">
      <StyledLogo
        src="/assets/osterkamp.jpg"
        alt="logo"
        width={90}
        height={60}
      />
      <SearchInput />
    </StyledHeader>
  );
}
