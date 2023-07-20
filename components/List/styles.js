import styled from "styled-components";

const StyledTableHeading = styled.th`
  background-color: red;
  text-align: center;
  border: 1px solid black;
  &:first-child {
    text-align: left;
  }
`;
const StyledTableCell = styled.td`
  width: 33%;
  border-right: 1px solid black;
  text-align: center;
  &:first-child {
    text-align: left;
  }
`;
const StyledTable = styled.table`
  margin-top: 110px;
  border: "1px solid black";
  border-collapse: collapse;
  width: 100%;
`;
const StyledTableRow = styled.tr`
  height: 50px;
  &:nth-child(odd) {
    background-color: lightgray;
  }
`;

export { StyledTable, StyledTableHeading, StyledTableCell, StyledTableRow };
