import { useRouter } from "next/router";
import useSWR from "swr";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Header from "../../../components/Header/Header";
import AddDeposit from "../../../components/AddDeposit/AddDeposit";
import Counters from "../../../components/Counters/Counters";
import CustomerInfo from "../../../components/CustomerInfo/CustomerInfo";
import CustomerNavigation from "../../../components/CustomerNavigation/CustomerNavigation";
import { useState } from "react";
import { SaveButton } from "../../../components/Buttons/SaveButton";
import { Container, StyledLink } from "../../../components/Buttons/styles";
import { CancelIcon } from "../../../components/Buttons/styles";

async function handleSave(
  id,
  boxesToAdd,
  bucketsToAdd,
  data,
  setBoxes,
  setBuckets,
  mutate,
  stockMutate,
  stock,
  router
) {
  const response = await fetch(`/api/customers/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      boxes: data.boxes + boxesToAdd,
      buckets: data.buckets + bucketsToAdd,
      timestamp: Date.now(),
    }),
  });

  if (!response) {
    return <LoadingSpinner />;
  }
  if (!response.ok) {
    console.error(response.status);
    return;
  }
  await fetch(`/api/stock`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      stock: stock[0].stock - boxesToAdd,
    }),
  });

  setBoxes([0, 0]);
  setBuckets([0, 0]);
  mutate();
  stockMutate();
  router.push("/");
}

export default function Deposit() {
  const [boxes, setBoxes] = useState([0, 0]);
  const [buckets, setBuckets] = useState([0, 0]);

  const boxesToAdd = boxes[0] - boxes[1];
  const bucketsToAdd = buckets[0] - buckets[1];

  const router = useRouter();
  const { id } = router.query;

  const { data, mutate } = useSWR(`/api/customers/${id}`, { fallbackData: [] });

  const newBoxes = data.boxes + boxesToAdd;
  const newBuckets = data.buckets + bucketsToAdd;

  const { data: customer, isLoading, error } = useSWR(`/api/customers/${id}`);

  const { data: stock, mutate: stockMutate } = useSWR(`/api/stock`);
  if (isLoading) {
    return <LoadingSpinner />;
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
      <Container>
        <StyledLink size="s" variant="danger" href="/">
          <CancelIcon />
          Abbrechen
        </StyledLink>
        <SaveButton
          handleClick={() =>
            handleSave(
              id,
              boxesToAdd,
              bucketsToAdd,
              data,
              setBoxes,
              setBuckets,
              mutate,
              stockMutate,
              stock,
              router
            )
          }
        />
      </Container>
      <CustomerNavigation customer={customer} />
      <CustomerInfo id={id} customer={customer} />
    </>
  );
}
