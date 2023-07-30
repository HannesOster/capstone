import SearchHeader from "../../../components/SearchHeader/SearchHeader";
import { Invitation } from "../../../components/SearchInput/styles";

export default function SearchCustomerToEdit() {
  return (
    <>
      <SearchHeader mode="edit" />

      <Invitation>Bitte Kunden auswählen in der Suchleiste!</Invitation>
    </>
  );
}
