import { useRouter } from "next/router";
import { GreenButton, SaveIcon } from "./styles";

export default function SaveButton({
  handleSave,
  id,
  boxesToAdd,
  bucketsToAdd,
}) {
  return (
    <GreenButton onClick={() => handleSave(id, bucketsToAdd, boxesToAdd)}>
      <SaveIcon />
      Speichern
    </GreenButton>
  );
}
