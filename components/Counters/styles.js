import styled from "styled-components";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

const CountersContainer = styled.section`
  margin: 20px;

  border-radius: 10px;
  border: 3px solid black;
  padding: 20px;
`;
const CounterContainer = styled.div`
  display: flex;
`;

const IconPlaceholder = styled.div`
  width: 20px;
`;

const IconMinus = styled(AiOutlineMinusSquare)`
  font-size: 20px;
  fill: red;
  cursor: pointer;
`;

const IconPlus = styled(AiOutlinePlusSquare)`
  font-size: 20px;
  fill: green;
  cursor: pointer;
`;

const CounterValue = styled.span`
  margin: 0 10px;
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
