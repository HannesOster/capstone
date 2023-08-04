import {
  NavLink,
  NavBar,
  NotePadIcon,
  CustomersIcon,
  MenuIcon,
  IconContainer,
  LinkContainer,
} from "./styles";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <NavBar>
      <NavLink href="/">
        <LinkContainer>
          {" "}
          <IconContainer isActive={router.pathname === "/"}>
            <NotePadIcon />
          </IconContainer>{" "}
        </LinkContainer>
      </NavLink>
      <NavLink href="/customers">
        {" "}
        <LinkContainer>
          <IconContainer isActive={router.pathname === "/customers"}>
            <CustomersIcon />
          </IconContainer>{" "}
        </LinkContainer>
      </NavLink>
      <NavLink href="/menu">
        <LinkContainer>
          <IconContainer isActive={router.pathname === "/menu"}>
            <MenuIcon />
          </IconContainer>
        </LinkContainer>
      </NavLink>
    </NavBar>
  );
}
