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
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: ${(props) =>
    props.isActive ? props.theme.third : props.theme.primary};
`;
export const NotePadIcon = styled(BiNotepad)`
  font-size: 32px;
  cursor: pointer;
  transform: ${(props) => (props.isActive ? "translateY(-1px)" : "")};
  transition: all 0.4s ease-out;
  transform: ${(props) => (props.isActive ? "scale(1.1)" : "")};
`;
export const CustomersIcon = styled(BsPeople)`
  font-size: 32px;
  cursor: pointer;
  margin-right: 3px;
  transform: ${(props) => (props.isActive ? "translateY(-1px)" : "")};
  transition: all 0.4s ease-out;
`;
export const MenuIcon = styled(GiHamburgerMenu)`
  font-size: 32px;
  cursor: pointer;
  transform: ${(props) => (props.isActive ? "translateY(-1px)" : "")};
  transition: all 0.4s ease-out;
`;

export const Text = styled.p`
  font-size: 20px;
  transform: ${(props) => (props.isActive ? "translateY(-1px)" : "")};
  transition: all 0.4s ease-out;
`;

export const IconContainer = styled.section`
  color: ${(props) =>
    props.isActive ? props.theme.primary : props.theme.third};
  background-color: ${(props) =>
    props.isActive ? props.theme.third : props.theme.primary};
  border-top: ${(props) => props.theme.primary} 3px solid;
  width: 80%;
  height: 65px;
  margin: 0 auto;
  transform: ${(props) => (props.isActive ? "translateY(-3px)" : "")};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
