import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";
import { Container } from "./styles";

export default function ButtonContainer({
  handleSave,
  boxesToAdd,
  bucketsToAdd,
  setCustomerData,
  id,
  setBoxes,
  setBuckets,
}) {
  return (
    <Container>
      <CancelButton />
      <SaveButton
        id={id}
        setCustomerData={setCustomerData}
        boxesToAdd={boxesToAdd}
        bucketsToAdd={bucketsToAdd}
        handleSave={handleSave}
        setBoxes={setBoxes}
        setBuckets={setBuckets}
      />
    </Container>
  );
}
