import useSWR from "swr";
import {
  HeadingTableRow,
  StyledTable,
  StyledTableCell,
  StyledTableHeading,
  StyledTableRow,
} from "./styles";

import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";

export default function List() {
  const { data } = useSWR("/api", { fallbackData: [] });

  const [sortedArray, setSortedArray] = useState(data);

  const sortByCustomerName = () => {
    const sorted = [...sortedArray].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortedArray(sorted);
  };

  const sortByBoxes = () => {
    const sorted = [...sortedArray].sort((a, b) => b.boxes - a.boxes);
    setSortedArray(sorted);
  };

  return (
    <StyledTable>
      <tbody>
        <HeadingTableRow>
          <StyledTableHeading onClick={sortByCustomerName}>
            Kunde
            <AiOutlineArrowDown />
          </StyledTableHeading>
          <StyledTableHeading onClick={sortByBoxes}>
            Kisten
            <AiOutlineArrowDown />
          </StyledTableHeading>
          <StyledTableHeading>Eimer</StyledTableHeading>
        </HeadingTableRow>
        {sortedArray.map((customer) => (
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
