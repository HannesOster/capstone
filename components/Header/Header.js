import { StockContainer } from "../AddDeposit/styles";
import { LogInButton, SessionInfo, StyledHeader, StyledLogo } from "./styles";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  return (
    <StyledHeader role="header">
      <StyledLogo
        src="/assets/osterkamp.jpg"
        alt="logo"
        width={105}
        height={60}
      />
      <StockContainer>
        {" "}
        {session ? (
          <>
            <LogInButton onClick={signOut}>Ausloggen</LogInButton>
            <SessionInfo>Eingeloggt als {session.user.name}</SessionInfo>
          </>
        ) : (
          <LogInButton onClick={signIn}>Einloggen</LogInButton>
        )}
      </StockContainer>
    </StyledHeader>
  );
}
