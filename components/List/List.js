import useSWR from "swr";
import { useEffect } from "react";
import {
  HeadingTableRow,
  StyledTable,
  StyledTableCell,
  StyledTableHeading,
  StyledTableParagraph,
  StyledTableRow,
  ExtendListIcon,
  StyledTableHeadingAttachments,
  ReducedListIcon,
  CheckIcon,
  CrossIcon,
} from "./styles";

import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function List() {
  const [isExtended, setIsExtended] = useState(false);
  const [sortedArray, setSortedArray] = useState([]);
  const [sortMode, setSortMode] = useState("name");
  const { data, error } = useSWR("/api/customers", {
    initialData: [],
    revalidateOnMount: true,
  });

  useEffect(() => {
    if (data) {
      const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
      setSortedArray(sorted);
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

  function toggleSortMode(newSortMode) {
    let newSortedArray = [...sortedArray];

    if (sortMode === newSortMode) {
      newSortedArray.reverse();
      setSortMode(null);
    } else {
      setSortMode(newSortMode);
      const sortFunctions = {
        name: (a, b) => a.name.localeCompare(b.name),
        photo: (a, b) => (a.image ? (b.image ? 0 : 1) : -1),
        boxes: (a, b) => b.boxes - a.boxes,
        date: (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
      };
      newSortedArray.sort(sortFunctions[newSortMode]);
    }

    setSortedArray(newSortedArray);
  }

  if (error) {
    return <h1>Error loading data</h1>;
  }

  if (!sortedArray || sortedArray.length === 0) {
    return <LoadingSpinner />;
  }
  return (
    <StyledTable>
      {isExtended ? (
        <ReducedListIcon onClick={() => setIsExtended(!isExtended)} />
      ) : (
        <ExtendListIcon onClick={() => setIsExtended(!isExtended)} />
      )}
      <tbody>
        <HeadingTableRow>
          <StyledTableHeading
            onClick={() => toggleSortMode("name")}
            active={sortMode === "name"}
          >
            <StyledTableParagraph>
              Kunde
              {sortMode === "name" ? (
                <AiOutlineArrowDown />
              ) : (
                <AiOutlineArrowUp />
              )}
            </StyledTableParagraph>{" "}
          </StyledTableHeading>
          <StyledTableHeading
            onClick={() => toggleSortMode("boxes")}
            active={sortMode === "boxes"}
          >
            Kisten
            {sortMode === "boxes" ? (
              <AiOutlineArrowDown />
            ) : (
              <AiOutlineArrowUp />
            )}
          </StyledTableHeading>
          {isExtended ? (
            <>
              <StyledTableHeading>Eimer</StyledTableHeading>
              <StyledTableHeadingAttachments>
                Aufsätze
              </StyledTableHeadingAttachments>
              <StyledTableHeading>Datum</StyledTableHeading>
            </>
          ) : null}
          {isExtended ? null : (
            <StyledTableHeading
              onClick={() => toggleSortMode("photo")}
              active={sortMode === "photo"}
            >
              Foto{" "}
              {sortMode === "photo" ? (
                <AiOutlineArrowDown />
              ) : (
                <AiOutlineArrowUp />
              )}
            </StyledTableHeading>
          )}
        </HeadingTableRow>
        {sortedArray.map((customer) => (
          <StyledTableRow key={customer._id}>
            <StyledTableCell isActive={isExtended}>
              <StyledTableParagraph>{customer.name}</StyledTableParagraph>
            </StyledTableCell>
            <StyledTableCell isActive={isExtended}>
              {customer.boxes}
            </StyledTableCell>
            {isExtended ? (
              <>
                {" "}
                <StyledTableCell>{customer.buckets}</StyledTableCell>
                <StyledTableCell>{customer.attachments}</StyledTableCell>{" "}
                <StyledTableCell>
                  {formatTimestamp(customer.timestamp)}
                </StyledTableCell>
              </>
            ) : null}
            {isExtended ? null : (
              <StyledTableCell>
                {customer.image ? <CheckIcon /> : <CrossIcon />}
              </StyledTableCell>
            )}
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  );
}
