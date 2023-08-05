import styled from "styled-components";

export const StyledTableHeading = styled.th`
  background-color: ${(props) =>
    props.active ? props.theme.third : props.theme.primary};
  color: ${(props) => (props.active ? "black" : props.theme.third)};
  text-align: center;
  border-bottom: ${(props) => (props.active ? "2px solid black" : "none")};
  transition: all 0.4s ease-out;
  &:first-child {
    text-align: left;
  }
`;
export const StyledTableCell = styled.td`
  width: 25%;
  border-right: 1px solid black;
  text-align: center;
  font-weight: 550;
  &:first-child {
    text-align: left;
  }
`;
export const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 100px;
`;
export const StyledTableRow = styled.tr`
  height: 50px;
  &:nth-child(odd) {
    background-color: lightgrey;
  }
`;
export const HeadingTableRow = styled.tr`
  height: 50px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;
export const StyledTableParagraph = styled.p`
  margin-left: 3px;
`;
