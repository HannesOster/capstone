import { useRouter } from "next/router";
import { GreenButton, SaveIcon } from "./styles";
import useSWR from "swr";

export default function SaveButton({ id, boxesToAdd, bucketsToAdd }) {
  const router = useRouter();
  const { data, mutate } = useSWR(`/api/${id}`, { fallbackData: [] });

  const newBoxes = data.boxes + boxesToAdd;
  const newBuckets = data.buckets + bucketsToAdd;
  console.log(data.boxes);
  async function handleSave(id, boxesToAdd, bucketsToAdd) {
    const response = await fetch(`/api/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        boxes: data.boxes + boxesToAdd,
        buckets: data.buckets + bucketsToAdd,
      }),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate();
    router.push("/");
  }

  return (
    <GreenButton onClick={() => handleSave(id, boxesToAdd, bucketsToAdd)}>
      <SaveIcon />
      Speichern
    </GreenButton>
  );
}
