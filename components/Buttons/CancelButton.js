import styled from "styled-components";
import Link from "next/link";

const RedButton = styled(Link)`
  color: red;
  background-color: white;
  border: 2px red solid;
  border-radius: 3%;
  padding: 5px 20px;
  text-decoration: none;
`;
export default function CancelButton() {
  return <RedButton href="/">Abbrechen</RedButton>;
}
