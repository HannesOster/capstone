import useSWR from "swr";
import { useEffect } from "react";
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
  const { data, error } = useSWR("/api", {
    initialData: [],
    revalidateOnMount: true,
  });

  const [sortedArray, setSortedArray] = useState([]);
  const [sortMode, setSortMode] = useState(null);

  useEffect(() => {
    if (data) {
      setSortedArray(data);
    }
  }, [data]);

  const sortByCustomerName = () => {
    const sorted = [...sortedArray].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortedArray(sorted);
    setSortMode("name");
  };

  const sortByBoxes = () => {
    const sorted = [...sortedArray].sort((a, b) => b.boxes - a.boxes);
    setSortedArray(sorted);
    setSortMode("boxes");
  };

  if (error) {
    return <h1>Error loading data</h1>;
  }

  if (!sortedArray || sortedArray.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <StyledTable>
      <tbody>
        <HeadingTableRow>
          <StyledTableHeading
            onClick={sortByCustomerName}
            active={sortMode === "name"}
          >
            Kunde
            {sortMode === "name" ? (
              <AiOutlineArrowDown />
            ) : (
              <AiOutlineArrowUp />
            )}
          </StyledTableHeading>
          <StyledTableHeading
            onClick={sortByBoxes}
            active={sortMode === "boxes"}
          >
            Kisten
            {sortMode === "boxes" ? (
              <AiOutlineArrowDown />
            ) : (
              <AiOutlineArrowUp />
            )}
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
