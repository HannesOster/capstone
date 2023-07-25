import { useRouter } from "next/router";

import useSWR from "swr";

import Header from "../components/Header/Header";
import AddDeposit from "../components/AddDeposit/AddDeposit";
import Counters from "../components/Counters/Counters";

import ButtonContainer from "../components/Buttons/ButtonContainer";

export default function Deposit({
  setBoxes,
  setBuckets,
  boxesToAdd,
  bucketsToAdd,
  boxes,
  buckets,
  setCustomerData,
  handleSave,
}) {
  const router = useRouter();
  const { id } = router.query;

  const { data: customer, isLoading, error } = useSWR(`/api/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <Header />
      <AddDeposit customer={customer} />
      <Counters
        boxes={boxes}
        buckets={buckets}
        setBoxes={setBoxes}
        setBuckets={setBuckets}
      />
      <ButtonContainer
        boxesToAdd={boxesToAdd}
        bucketsToAdd={bucketsToAdd}
        id={id}
        setCustomerData={setCustomerData}
        handleSave={handleSave}
      />
    </>
  );
}
