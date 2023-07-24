import {
  StyledTable,
  StyledTableCell,
  StyledTableHeading,
  StyledTableRow,
} from "./styles";

export default function List({ customerData }) {
  return (
    <StyledTable>
      <tbody>
        <StyledTableRow>
          <StyledTableHeading>Kunde</StyledTableHeading>
          <StyledTableHeading>Kisten</StyledTableHeading>
          <StyledTableHeading>Eimer</StyledTableHeading>
        </StyledTableRow>
        {customerData.map((customer) => (
          <StyledTableRow key={customer.id}>
            <StyledTableCell>{customer.name}</StyledTableCell>
            <StyledTableCell>{customer.boxes}</StyledTableCell>
            <StyledTableCell>{customer.buckets}</StyledTableCell>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  );
}
