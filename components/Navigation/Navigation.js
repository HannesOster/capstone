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
        <IconContainer isActive={router.pathname === "/"}>
          <NotePadIcon />
        </IconContainer>
      </NavLink>
      <NavLink href="/customers">
        <IconContainer isActive={router.pathname === "/customers"}>
          <CustomersIcon />
        </IconContainer>
      </NavLink>
      <NavLink href="/menu">
        <IconContainer isActive={router.pathname === "/menu"}>
          <MenuIcon />
        </IconContainer>
      </NavLink>
    </NavBar>
  );
}
