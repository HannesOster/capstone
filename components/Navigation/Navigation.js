import { NavLink, NavBar } from "./styles";

export default function Navigation() {
  return (
    <NavBar>
      <NavLink href="/deposit">Pfand</NavLink>
      <NavLink href="/list-page">Liste</NavLink>
      <NavLink href="/menu">Menü</NavLink>
    </NavBar>
  );
}
