import styled from "styled-components";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default function ButtonContainer() {
  return (
    <Container>
      <CancelButton />
      <SaveButton />
    </Container>
  );
}
