import styled from "styled-components";
const CounterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MinusButton = styled.button`
  background-color: red;
  color: white;
`;

const PlusButton = styled.button`
  background-color: green;
  color: white;
`;

const CounterValue = styled.span`
  margin: 0 10px;
  font-weight: bold;
`;

function Counter({ value, onIncrement, onDecrement }) {
  return (
    <CounterContainer>
      <MinusButton onClick={onDecrement}>-</MinusButton>
      <CounterValue>{value}</CounterValue>
      <PlusButton onClick={onIncrement}>+</PlusButton>
    </CounterContainer>
  );
}

export default Counter;
