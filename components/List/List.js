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
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function List() {
  const { data, error } = useSWR("/api/customers", {
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

  function formatTimestamp(timestamp) {
    if (!timestamp) {
      return "";
    }

    const date = new Date(timestamp);
    if (isNaN(date)) {
      return "";
    }

    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",

      hour12: true,
    };

    return date.toLocaleString("de-DE", options);
  }
  function sortByCustomerName() {
    if (sortMode === "name") {
      setSortedArray(data);
      setSortMode(null);
    } else {
      const sorted = [...sortedArray].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setSortedArray(sorted);
      setSortMode("name");
    }
  }

  function sortByBoxes() {
    if (sortMode === "boxes") {
      setSortedArray(data);
      setSortMode(null);
    } else {
      const sorted = [...sortedArray].sort((a, b) => b.boxes - a.boxes);
      setSortedArray(sorted);
      setSortMode("boxes");
    }
  }

  if (error) {
    return <h1>Error loading data</h1>;
  }

  if (!sortedArray || sortedArray.length === 0) {
    return <LoadingSpinner />;
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
          <StyledTableHeading>Datum</StyledTableHeading>
        </HeadingTableRow>
        {sortedArray.map((customer) => (
          <StyledTableRow key={customer.id}>
            <StyledTableCell>{customer.name}</StyledTableCell>
            <StyledTableCell>{customer.boxes}</StyledTableCell>
            <StyledTableCell>{customer.buckets}</StyledTableCell>

            <StyledTableCell>
              {formatTimestamp(customer.timestamp)}
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  );
}
