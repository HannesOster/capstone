import { BiLogOut } from "react-icons/bi";
import { StockContainer } from "../AddDeposit/styles";
import { Button } from "../Buttons/styles";
import {
  LogOutContainer,
  SessionInfo,
  StyledHeader,
  StyledLogo,
  UserIcon,
} from "./styles";
import { useSession, signIn, signOut } from "next-auth/react";
import { AiOutlineUser } from "react-icons/ai";

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
          <LogOutContainer>
            {" "}
            <SessionInfo>
              <UserIcon />
              {session.user.name}
            </SessionInfo>
            <Button variant="neutral" size="s" onClick={signOut}>
              <BiLogOut fontSize="28px" />
            </Button>
          </LogOutContainer>
        ) : (
          <>
            {" "}
            <Button variant="neutral" size="s" onClick={signIn}>
              Einloggen
            </Button>
          </>
        )}
      </StockContainer>
    </StyledHeader>
  );
}
