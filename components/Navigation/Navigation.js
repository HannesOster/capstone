import { NavLink, NavBar, NewNavLink } from "./styles";

export default function Navigation() {
  return (
    <NavBar>
      <NewNavLink href="/">Pfand</NewNavLink>
      <NewNavLink href="/list-page">Kunden</NewNavLink>
      <NewNavLink href="/menu">Menü</NewNavLink>
    </NavBar>
  );
}
