import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";
import { Container } from "./styles";

export default function ButtonContainer({
  boxesToAdd,
  bucketsToAdd,
  customerData,
  setCustomerData,
  id,
}) {
  return (
    <Container>
      <CancelButton />
      <SaveButton
        id={id}
        customerData={customerData}
        setCustomerData={setCustomerData}
        boxesToAdd={boxesToAdd}
        bucketsToAdd={bucketsToAdd}
      />
    </Container>
  );
}
