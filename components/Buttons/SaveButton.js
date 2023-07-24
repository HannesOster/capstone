import styled from "styled-components";
import { FiSave } from "react-icons/fi";

const GreenButton = styled.button`
  color: green;
  background-color: white;
  border: 2px green solid;
  padding: 5px 20px;
`;

const SaveIcon = styled(FiSave)`
  margin-right: 10px;
`;
export default function SaveButton() {
  return (
    <GreenButton>
      <SaveIcon />
      Speichern
    </GreenButton>
  );
}
