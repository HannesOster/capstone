import {
  NavLink,
  NavBar,
  NotePadIcon,
  CustomersIcon,
  MenuIcon,
  Text,
  IconContainer,
  NavBarContainer,
} from "./styles";
import { useRouter } from "next/router";
import { routes } from "../../utils/routes";

export default function Navigation() {
  const router = useRouter();

  const isMenu = router.pathname === routes.menu;
  const isCustomers = router.pathname === routes.customers;
  const isDeposit =
    router.pathname === "/" || router.pathname.includes("/customers/");

  return (
    <NavBarContainer>
      <NavBar>
        <NavLink isActive={isDeposit} href="/">
          <IconContainer isActive={isDeposit}>
            <NotePadIcon isActive={isDeposit} />
            <Text isActive={isDeposit}>Pfand</Text>
          </IconContainer>
        </NavLink>
        <NavLink isActive={isCustomers} href={routes.customers}>
          <IconContainer isActive={isCustomers}>
            <CustomersIcon isActive={isCustomers} />
            <Text isActive={isCustomers}>Kunden</Text>
          </IconContainer>
        </NavLink>
        <NavLink isActive={isMenu} href={routes.menu}>
          <IconContainer isActive={isMenu}>
            <MenuIcon isActive={isMenu} />
            <Text isActive={isMenu}>Menu</Text>
          </IconContainer>
        </NavLink>
      </NavBar>
    </NavBarContainer>
  );
}
