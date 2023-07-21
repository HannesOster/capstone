import { useRouter } from "next/router";
import data from "../../lib/dummyArray";
import Header from "../../components/Header/Header";
import { AddDepositHeading } from "./styles";

export default function AddDeposit() {
  const router = useRouter();
  const { id } = router.query;

  const parsedId = parseInt(id);

  const customer = data.find((entry) => entry.id === parsedId);
  console.log(id);
  return (
    <>
      <Header />

      <AddDepositHeading>{customer.name}</AddDepositHeading>
    </>
  );
}
