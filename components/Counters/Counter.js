import {
  CounterContainer,
  CounterValue,
  IconMinus,
  IconPlaceholder,
  IconPlus,
} from "./styles";

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
