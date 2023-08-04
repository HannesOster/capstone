import { NavLink, NavBar } from "./styles";

export default function Navigation() {
  return (
    <NavBar>
      <NavLink href="/">Pfand</NavLink>
      <NavLink href="/customers">Kunden</NavLink>
      <NavLink href="/menu">Menü</NavLink>
    </NavBar>
  );
}
