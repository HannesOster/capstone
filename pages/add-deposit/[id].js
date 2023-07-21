import { useRouter } from "next/router";
import data from "../../lib/dummyArray";
import Header from "../../components/Header/Header";
import AddDeposit from "../../components/AddDeposit/AddDeposit";

export default function Deposit() {
  const router = useRouter();
  const { id } = router.query;

  const customer = data?.find((entry) => entry.id === id);

  return (
    <>
      <Header />
      <AddDeposit customer={customer} />
    </>
  );
}
