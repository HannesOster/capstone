import { useRouter } from "next/router";
import { GreenButton, SaveIcon } from "./styles";
import useSWR from "swr";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function SaveButton({
  id,
  boxesToAdd,
  bucketsToAdd,
  setBoxes,
  setBuckets,
}) {
  const router = useRouter();
  const { data, mutate } = useSWR(`/api/customer/${id}`, { fallbackData: [] });
  const { data: stockData, mutate: stockMutate } = useSWR(`/api/stock`, {
    fallbackData: [],
  });
  const newBoxes = data.boxes + boxesToAdd;
  const newBuckets = data.buckets + bucketsToAdd;
  async function handleSave(id, boxesToAdd, bucketsToAdd) {
    const response = await fetch(`/api/customer/${id}`, {
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
    const stockResponse = await fetch(`/api/stock`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stock: stockData[0].stock - boxesToAdd,
      }),
    });

    setBoxes([0, 0]);
    setBuckets([0, 0]);
    mutate();
    stockMutate();
    router.push("/");
  }

  return (
    <GreenButton onClick={() => handleSave(id, boxesToAdd, bucketsToAdd)}>
      <SaveIcon />
      Speichern
    </GreenButton>
  );
}
