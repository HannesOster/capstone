import Link from "next/link";
import styled from "styled-components";
import { TbUserSearch } from "react-icons/tb";

export const StyledSearchSection = styled.section`
  position: relative;
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;

export const SearchOption = styled.li`
  padding: 8px 12px;
  color: black;
  cursor: pointer;
  border-top: 3px solid #bbb;
  transition: all 0.4s ease-out;
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.third};
  }
`;
export const SearchOptionList = styled.ul`
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
export const OptionLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Invitation = styled.h1`
  font-size: 20px;
  text-align: center;
`;
export const UserSearchIcon = styled(TbUserSearch)`
  font-size: 100px;
  color: #006ef5;
`;
