import styled from "styled-components";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

const CountersContainer = styled.section`
  margin: 20px;
  border-radius: 10px;
  border: 3px solid ${(props) => props.theme.fourth};
  padding: 20px;
  display: flex;
  flex-direction: column; /* Neu: Container in einer Spalte anordnen */
  align-items: center;
`;

const CounterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 25px;
  align-items: center; /* Neu: Inhalte horizontal zentrieren */
`;

const IconPlaceholder = styled.div`
  width: 20px;
  display: flex; /* Neu: Als flexibles Element behandeln */
`;

const IconMinus = styled(AiOutlineMinusSquare)`
  font-size: 40px;
  fill: red;
  cursor: pointer;
`;

const IconPlus = styled(AiOutlinePlusSquare)`
  font-size: 40px;
  fill: green;
  cursor: pointer;
`;

const CounterValue = styled.span`
  font-weight: bold;
`;

export {
  CountersContainer,
  CounterContainer,
  CounterValue,
  IconMinus,
  IconPlus,
  IconPlaceholder,
};
