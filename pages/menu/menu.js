import Header from "../../components/Header/Header";
import { MenuLink, MenuContainer } from "../../components/Buttons/styles";

export default function Menu() {
  return (
    <>
      <Header />
      <MenuContainer>
        <MenuLink href="/menu/add-customer">Kunden Hinzufügen</MenuLink>
      </MenuContainer>
    </>
  );
}
