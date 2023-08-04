import { GreenButton, SaveIcon } from "./styles";

export function SaveButton({ handleClick }) {
  return (
    <GreenButton onClick={handleClick}>
      <SaveIcon />
      Speichern
    </GreenButton>
  );
}
