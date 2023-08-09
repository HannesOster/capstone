import { useEffect } from "react";
import Header from "../components/Header/Header";
import SearchInput from "../components/SearchInput/SearchInput";
import { SuccessIcon, SuccessModal } from "../page-styles/styles";

export default function Home({ showSuccessModal, setShowSuccessModal }) {
  useEffect(() => {
    if (showSuccessModal) {
      const timeout = setTimeout(() => {
        setShowSuccessModal(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showSuccessModal, setShowSuccessModal]);
  return (
    <>
      <Header />
      <SearchInput />
      <SuccessModal visible={showSuccessModal}>
        <SuccessIcon />
        Erfolgreich gespeichert!
      </SuccessModal>
    </>
  );
}
