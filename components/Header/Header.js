import { StockContainer } from "../AddDeposit/styles";
import { StyledHeader, StyledLogo } from "./styles";
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
            <button onClick={signOut}>Ausloggen</button>
            <p>Eingeloggt als {session.user.name}</p>
          </>
        ) : (
          <button onClick={signIn}>Ausloggen</button>
        )}
      </StockContainer>
    </StyledHeader>
  );
}
