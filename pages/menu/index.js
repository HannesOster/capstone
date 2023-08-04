import { useState } from "react";
import Header from "../../components/Header/Header";
import Modal from "react-modal";
import useSWR from "swr";
import {
  MenuButton,
  MenuContainer,
  MenuLink,
  NewMenuButton,
} from "../../components/Buttons/styles";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import {
  ModalCloseButton,
  StockContainer,
  modalStyles,
} from "../../page-styles/styles";

export default function Menu() {
  const { data, error } = useSWR("/api/stock", {
    initialData: [],
    revalidateOnMount: true,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header />
      <MenuContainer>
        <MenuLink href="/menu/add-customer">Kunden hinzufügen</MenuLink>
        <MenuLink href="/menu/edit-customer/search">Kunden bearbeiten</MenuLink>
        <MenuButton type="button" onClick={openModal}>
          Lagerbestand
        </MenuButton>
        <MenuLink href="/menu/customer-map">Karte</MenuLink>
      </MenuContainer>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Lagerbestand Modal"
        style={modalStyles}
      >
        <StockContainer>
          <h2>Lagerbestand</h2>
          <p>{data ? data[0].stock : <LoadingSpinner />} Kisten</p>
          <ModalCloseButton onClick={closeModal}>Schließen</ModalCloseButton>
        </StockContainer>
      </Modal>
    </>
  );
}
