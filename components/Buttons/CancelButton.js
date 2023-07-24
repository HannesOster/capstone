import styled from "styled-components";
import { FiSave } from "react-icons/fi";

export default function CancelButton() {
  const RedButton = styled.button`
    color: red;
    background-color: white;
    border: 2px red solid;
    border-radius: 3%;
    padding: 5px 20px;
  `;
  return <RedButton>Abbrechen</RedButton>;
}
