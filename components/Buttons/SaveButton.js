import { Button, SaveIcon } from "./styles";

export function SaveButton({ handleClick }) {
  return (
    <Button size="s" variant="success" onClick={handleClick}>
      <SaveIcon />
      Speichern
    </Button>
  );
}
