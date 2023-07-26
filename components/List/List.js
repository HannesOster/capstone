import useSWR from "swr";
import {
  HeadingTableRow,
  StyledTable,
  StyledTableCell,
  StyledTableHeading,
  StyledTableRow,
} from "./styles";

import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

export default function List() {
  const { data } = useSWR("/api", { fallbackData: [] });
  return (
    <StyledTable>
      <tbody>
        <HeadingTableRow>
          <StyledTableHeading>
            Kunde
            <AiOutlineArrowUp />
            <AiOutlineArrowDown />
          </StyledTableHeading>
          <StyledTableHeading>
            Kisten
            <AiOutlineArrowUp />
            <AiOutlineArrowDown />
          </StyledTableHeading>
          <StyledTableHeading>Eimer</StyledTableHeading>
        </HeadingTableRow>
        {data.map((customer) => (
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
