import {
  CounterContainer,
  CounterValue,
  IconMinus,
  IconPlaceholder,
  IconPlus,
  Description,
} from "./styles";

function Counter({ name, value, onIncrement, onDecrement }) {
  return (
    <CounterContainer>
      <Description>{name}</Description>
      {value > 0 ? <IconMinus onClick={onDecrement} /> : <IconPlaceholder />}
      <CounterValue>{value}</CounterValue>
      <IconPlus onClick={onIncrement} />
    </CounterContainer>
  );
}

export default Counter;
