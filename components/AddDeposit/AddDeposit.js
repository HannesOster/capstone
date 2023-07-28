import { AddDepositHeading, CustomerStock, StockContainer } from "./styles";

export default function AddDeposit({ customer }) {
  return (
    <>
      <AddDepositHeading>{customer.name}</AddDepositHeading>
      <StockContainer>
        <CustomerStock>Kisten: {customer.boxes}</CustomerStock>
        <CustomerStock>Eimer: {customer.buckets}</CustomerStock>
      </StockContainer>
    </>
  );
}
