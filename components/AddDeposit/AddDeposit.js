import { AddDepositHeading } from "./styles";

export default function AddDeposit({ customer }) {
  return <AddDepositHeading>{customer.name}</AddDepositHeading>;
}
