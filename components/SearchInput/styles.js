import styled from "styled-components";

const StyledSearchSection = styled.section`
  position: fixed;
  top: 40px;
  right: 50px;
`;
const StyledSearchInput = styled.input`
  position: relative;
  width: 130px;
  border-radius: 10px;
`;
const SearchOption = styled.li`
  background-color: white;
  z-index: 2;
  width: 200;
`;
const SearchOptionList = styled.ul`
  list-style: none;
  position: absolute;
  width: 200;
  top: 0;
`;

export {
  StyledSearchSection,
  StyledSearchInput,
  SearchOption,
  SearchOptionList,
};
