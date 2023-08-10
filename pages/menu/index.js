import { useState } from "react";
import Header from "../../components/Header/Header";
import Modal from "react-modal";
import useSWR from "swr";
import {
  Button,
  MenuContainer,
  StyledLink,
} from "../../components/Buttons/styles";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { StockContainer, modalStyles } from "../../page-styles/styles";
import { routes } from "../../utils/routes";
import { useSession } from "next-auth/react";

export default function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session } = useSession();
  const { data } = useSWR("/api/stock", {
    initialData: [],
    revalidateOnMount: true,
  });

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
        <StyledLink color="theme.secondary" href={routes.customersAdd}>
          Kunden hinzufügen
        </StyledLink>
        <StyledLink href={routes.customersEditSearch}>
          Kunden bearbeiten
        </StyledLink>
        <Button type="button" onClick={openModal}>
          Lagerbestand
        </Button>
        <StyledLink href={routes.customersMap}>Karte</StyledLink>
        {session && session.user.name === "Admin" ? (
          <StyledLink href={routes.customerDeleteSearch}>
            Kunden löschen
          </StyledLink>
        ) : null}
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
          <Button size="s" variant="danger" onClick={closeModal}>
            Schließen
          </Button>
        </StockContainer>
      </Modal>
    </>
  );
}
