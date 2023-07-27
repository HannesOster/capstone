import Link from "next/link";
import styled from "styled-components";

const StyledSearchSection = styled.section`
  position: relative;
  top: 40px;
  left: 65%;
  width: 100%;
`;
const StyledSearchInput = styled.input`
  position: relative;
  padding: "10px 12px";
  font-size: "16px";
  border: "1px solid #ccc";
  border-radius: "4px";
  width: 30%;
  outline: "none";
  background-color: #fff6f4;
`;
const SearchOption = styled.li`
  padding: 8px 12px;
  color: black;
  cursor: pointer;
  border-top: 3px solid #bbb;
`;
const SearchOptionList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 4px 0;
  background-color: #fff6f4;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const OptionLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export {
  StyledSearchSection,
  StyledSearchInput,
  SearchOption,
  SearchOptionList,
  OptionLink,
};
