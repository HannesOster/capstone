import styled from "styled-components";
import { FiSave } from "react-icons/fi";

export default function SaveButton() {
  const GreenButton = styled.button`
    color: green;
    background-color: white;
    border: 2px green solid;
    padding: 5px 20px;
  `;
  return (
    <GreenButton>
      <FiSave />
      Speichern
    </GreenButton>
  );
}
