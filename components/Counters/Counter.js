import styled from "styled-components";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
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

function Counter({ name, value, onIncrement, onDecrement }) {
  return (
    <CounterContainer>
      <span>{name}</span>
      {value > 0 ? <IconMinus onClick={onDecrement} /> : <IconPlaceholder />}
      <CounterValue>{value}</CounterValue>
      <IconPlus onClick={onIncrement} />
    </CounterContainer>
  );
}

export default Counter;
