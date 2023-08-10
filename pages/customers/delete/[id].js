import { useRouter } from "next/router";
import useSWR from "swr";
import { AddDepositHeading } from "../../../components/AddDeposit/styles";
import { Button, MenuContainer } from "../../../components/Buttons/styles";
import Header from "../../../components/Header/Header";

export default function DeleteCustomer({ setShowSuccessModal }) {
  const router = useRouter();
  const { id } = router.query;
  const { data: customer } = useSWR(`/api/customers/${id}`);

  async function handleDelete() {
    const response = await fetch(`/api/customers/${id}`, { method: "DELETE" });
    if (response.ok) {
      const data = await response.json();
      router.push("/");
      setShowSuccessModal(true);
    }
    if (!response.ok) {
      console.log(response.status);
    }
  }

  return (
    <>
      <Header />
      <AddDepositHeading>{customer?.name} wirklich löschen?</AddDepositHeading>
      <MenuContainer>
        <Button variant="danger" size="l" onClick={handleDelete}>
          Löschen
        </Button>
      </MenuContainer>
    </>
  );
}
