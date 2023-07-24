import { useRouter } from "next/router";
import { useState } from "react";
import data from "../lib/dummyArray";
import Header from "../components/Header/Header";
import AddDeposit from "../components/AddDeposit/AddDeposit";
import Counters from "../components/Counters/Counters";

import ButtonContainer from "../components/Buttons/ButtonContainer";

export default function Deposit({ setCustomerData }) {
  const router = useRouter();
  const { id } = router.query;

  const customer = data.find((entry) => entry.id === id) || {};

  const [boxes, setBoxes] = useState([0, 0]);
  const [buckets, setBuckets] = useState([0, 0]);

  const boxesToAdd = boxes[0] - boxes[1];
  const bucketsToAdd = buckets[0] - buckets[1];
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
      />
    </>
  );
}
