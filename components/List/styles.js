import { BiListMinus, BiListPlus } from "react-icons/bi";
import { ImCircleDown, ImCircleUp } from "react-icons/im";
import { RxCheckCircled, RxCrossCircled } from "react-icons/rx";
import styled from "styled-components";

export const StyledTableHeading = styled.th`
  background-color: ${(props) =>
    props.active ? props.theme.third : props.theme.primary};
  color: ${(props) => (props.active ? "black" : props.theme.third)};
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  border-bottom: ${(props) => (props.active ? "2px solid black" : "none")};
  transition: all 0.4s ease-out;
  &:first-child {
    text-align: left;
  }
`;
export const StyledTableHeadingAttachments = styled.th`
  background-color: ${(props) =>
    props.active ? props.theme.third : props.theme.primary};
  color: ${(props) => (props.active ? "black" : props.theme.third)};
  text-align: center;
  font-weight: 600;
  border-bottom: ${(props) => (props.active ? "2px solid black" : "none")};
  transition: all 0.4s ease-out;
  font-size: 12px;
  &:first-child {
    text-align: left;
  }
`;
export const StyledTableCell = styled.td`
  width: ${(props) => (props.active ? "20" : "25%")};
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
  margin-bottom: 70px;
`;
export const StyledTableRow = styled.tr`
  height: 50px;
  &:nth-child(odd) {
    background-color: ${(props) => props.theme.fifth};
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
  margin-left: 15px;
`;
export const ExtendListIcon = styled(BiListPlus)`
  position: fixed;
  top: 90px;
  right: 30px;
  cursor: pointer;
  color: ${(props) => props.theme.primary};
  font-size: 40px;
`;
export const ReducedListIcon = styled(BiListMinus)`
  position: fixed;
  color: ${(props) => props.theme.primary};
  top: 90px;
  cursor: pointer;
  right: 30px;
  font-size: 40px;
`;

export const CheckIcon = styled(RxCheckCircled)`
  color: ${(props) => props.theme.success};
`;

export const CrossIcon = styled(RxCrossCircled)`
  color: ${(props) => props.theme.danger};
`;

export const DownIcon = styled(ImCircleDown)`
  transform: translate(3px, 2px);
`;
export const UpIcon = styled(ImCircleUp)`
  transform: translate(3px, 2px);
`;
