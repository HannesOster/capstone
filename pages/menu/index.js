import {
  MenuButton,
  MenuContainer,
  MenuLink,
} from "../../components/Buttons/styles";
import Header from "../../components/Header/Header";

export default function Menu() {
  return (
    <>
      <Header />
      <MenuContainer>
        <MenuLink href="/menu/add-customer">Kunden hinzufügen</MenuLink>
        <MenuLink href="/menu/edit-customer/search">Kunden bearbeiten</MenuLink>
        <MenuButton type="button">Lagerbestand</MenuButton>
      </MenuContainer>
    </>
  );
}
