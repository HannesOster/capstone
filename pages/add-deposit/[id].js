import { useRouter } from "next/router";
import data from "../../lib/dummyArray";
import Header from "../../components/Header/Header";

export default function AddDeposit() {
  const router = useRouter();
  const { id } = router.query;

  const parsedId = parseInt(id);

  const customer = data.find((entry) => entry.id === parsedId);
  console.log(id);
  return (
    <>
      <Header />

      <h1>{customer.name}</h1>
    </>
  );
}
