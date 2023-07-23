import { NavLink, NavBar } from "./styles";

export default function Navigation() {
  return (
    <NavBar>
      <NavLink href="/">Pfand</NavLink>
      <NavLink href="/list-page">Liste</NavLink>
      <NavLink href="/menu">Menü</NavLink>
    </NavBar>
  );
}
