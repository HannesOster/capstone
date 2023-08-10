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
import { routes } from "../../../utils/routes";

async function handleSave(
  id,
  boxesToAdd,
  bucketsToAdd,
  attachmentsToAdd,
  data,
  setBoxes,
  setBuckets,
  setAttachments,
  mutate,
  stockMutate,
  stock,
  router,
  setShowSuccessModal
) {
  const response = await fetch(routes.customersApiRouteById(id), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      boxes: data.boxes + boxesToAdd,
      buckets: data.buckets + bucketsToAdd,
      attachments: data.attachments + attachmentsToAdd,
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
  await fetch(routes.stockApiRoute, {
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
  setAttachments([0, 0]);
  mutate();
  stockMutate();
  router.push("/");
  setShowSuccessModal(true);
}

export default function Deposit({ setShowSuccessModal }) {
  const [boxes, setBoxes] = useState([0, 0]);
  const [buckets, setBuckets] = useState([0, 0]);
  const [attachments, setAttachments] = useState([0, 0]);

  const boxesToAdd = boxes[0] - boxes[1];
  const bucketsToAdd = buckets[0] - buckets[1];
  const attachmentsToAdd = attachments[0] - attachments[1];

  const router = useRouter();
  const { id } = router.query;

  const { data, mutate } = useSWR(routes.customersApiRouteById(id), {
    fallbackData: [],
  });

  const newBoxes = data.boxes + boxesToAdd;
  const newBuckets = data.buckets + bucketsToAdd;
  const newAttachments = data.attachments + attachmentsToAdd;

  const {
    data: customer,
    isLoading,
    error,
  } = useSWR(routes.customersApiRouteById(id));

  const { data: stock, mutate: stockMutate } = useSWR(routes.stockApiRoute);
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
              attachmentsToAdd,
              data,
              setBoxes,
              setBuckets,
              setAttachments,
              mutate,
              stockMutate,
              stock,
              router,
              setShowSuccessModal
            )
          }
        />
      </Container>
      <Counters
        boxes={boxes}
        buckets={buckets}
        attachments={attachments}
        setBoxes={setBoxes}
        setBuckets={setBuckets}
        setAttachments={setAttachments}
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
              attachmentsToAdd,
              data,
              setBoxes,
              setBuckets,
              setAttachments,
              mutate,
              stockMutate,
              stock,
              router,
              setShowSuccessModal
            )
          }
        />
      </Container>
      <CustomerNavigation customer={customer} />
      <CustomerInfo id={id} customer={customer} />
    </>
  );
}
