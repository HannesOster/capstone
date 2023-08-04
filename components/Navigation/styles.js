import styled from "styled-components";
import Link from "next/link";
import { BiNotepad } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
export const NavBar = styled.nav`
  background-color: ${(props) => props.theme.third};
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 3px solid ${(props) => props.theme.primary};
`;
export const NavLink = styled(Link)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const NotePadIcon = styled(BiNotepad)`
  font-size: 40px;
  cursor: pointer;
`;
export const CustomersIcon = styled(BsPeople)`
  font-size: 40px;
  cursor: pointer;
`;
export const MenuIcon = styled(GiHamburgerMenu)`
  font-size: 40px;
  cursor: pointer;
`;
export const LinkContainer = styled.section`
  width: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const IconContainer = styled.section`
  border: solid 3px ${(props) => props.theme.primary};
  color: ${(props) =>
    props.isActive ? props.theme.third : props.theme.primary};
  padding: 12px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.isActive ? props.theme.primary : props.theme.third};
  text-decoration: none;
`;
