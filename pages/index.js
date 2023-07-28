import SearchHeader from "../components/SearchHeader/SearchHeader";
import { Invitation } from "../styles";
import { TbUserSearch } from "react-icons/tb";
export default function Home() {
  return (
    <>
      <SearchHeader />

      <Invitation>Bitte Kunden auswählen in der Suchleiste</Invitation>
    </>
  );
}
