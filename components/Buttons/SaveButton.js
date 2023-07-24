import styled from "styled-components";
import { FiSave } from "react-icons/fi";
import { useRouter } from "next/router";

const GreenButton = styled.button`
  color: green;
  background-color: white;
  border: 2px green solid;
  padding: 5px 20px;
`;

const SaveIcon = styled(FiSave)`
  margin-right: 10px;
`;

export default function SaveButton({
  customerData,
  setCustomerData,
  id,
  boxesToAdd,
  bucketsToAdd,
}) {
  const router = useRouter();
  function handleSave(id, bucketsToAdd, boxesToAdd) {
    console.log("boxesToAdd:", boxesToAdd);
    console.log("bucketsToAdd:", bucketsToAdd);

    setCustomerData((prevCustomerData) =>
      prevCustomerData.map((customer) =>
        customer.id === id
          ? {
              ...customer,
              boxes: customer.boxes + parseInt(boxesToAdd, 10),
              buckets: customer.buckets + parseInt(bucketsToAdd, 10),
            }
          : customer
      )
    );
    router.push("/list-page");
  }
  return (
    <GreenButton onClick={() => handleSave(id, bucketsToAdd, boxesToAdd)}>
      <SaveIcon />
      Speichern
    </GreenButton>
  );
}
