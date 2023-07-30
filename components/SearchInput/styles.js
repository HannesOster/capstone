import Link from "next/link";
import styled from "styled-components";
import { TbUserSearch } from "react-icons/tb";

const StyledSearchSection = styled.section`
  position: relative;
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;
const StyledSearchInput = styled.input`
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
  outline: none;
  background-color: ${(props) => props.theme.third};
`;
const SearchOption = styled.li`
  padding: 8px 12px;
  color: black;
  cursor: pointer;
  border-top: 3px solid #bbb;
`;
const SearchOptionList = styled.ul`
  position: absolute;
  top: 35px;

  width: 50%;
  list-style: none;
  padding: 0;
  margin: 4px 0;
  background-color: ${(props) => props.theme.third};
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const OptionLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Invitation = styled.h1`
  font-size: 20px;
`;
const UserSearchIcon = styled(TbUserSearch)`
  font-size: 100px;
`;

export {
  StyledSearchSection,
  StyledSearchInput,
  SearchOption,
  SearchOptionList,
  OptionLink,
  Invitation,
  UserSearchIcon,
};
