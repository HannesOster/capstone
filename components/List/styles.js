import styled from "styled-components";

const StyledTableHeading = styled.th`
  background-color: ${(props) =>
    props.active ? "${(props) => props.theme.third}" : props.theme.primary};
  color: ${(props) =>
    props.active ? "black" : "${(props) => props.theme.third}"};
  text-align: center;

  &:first-child {
    text-align: left;
  }
`;
const StyledTableCell = styled.td`
  width: 25%;
  border-right: 1px solid black;
  text-align: center;
  &:first-child {
    text-align: left;
  }
`;
const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 100px;
`;
const StyledTableRow = styled.tr`
  height: 50px;
  &:nth-child(odd) {
    background-color: lightgrey;
  }
`;
const HeadingTableRow = styled.tr`
  height: 50px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

export {
  StyledTable,
  StyledTableHeading,
  StyledTableCell,
  StyledTableRow,
  HeadingTableRow,
};
