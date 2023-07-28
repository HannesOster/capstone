import { useState } from "react";
import {
  MenuButton,
  MenuContainer,
  MenuLink,
} from "../../components/Buttons/styles";
import Header from "../../components/Header/Header";
import Modal from "react-modal";

export default function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <MenuContainer>
        <MenuLink href="/menu/add-customer">Kunden hinzufügen</MenuLink>
        <MenuLink href="/menu/edit-customer/search">Kunden bearbeiten</MenuLink>
        <MenuButton type="button" onClick={openModal}>
          Lagerbestand
        </MenuButton>
      </MenuContainer>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Lagerbestand Modal"
      >
        <h2>Lagerbestand</h2>

        <button onClick={closeModal}>Schließen</button>
      </Modal>
    </>
  );
}
