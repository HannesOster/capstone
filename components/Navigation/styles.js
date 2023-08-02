import styled from "styled-components";
import Link from "next/link";

const NavBar = styled.nav`
  background-color: ${(props) => props.theme.primary};
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled(Link)`
  align-items: center;
  background-color: ${(props) => props.theme.third};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #4d4745;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  font-size: 1.3rem;
  margin: 0;
  min-height: 3rem;
  padding: calc(1rem - 1px) calc(1.3rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover {
    transform: translateY(-1px);
  }

  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  &:active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`;

export { NavLink, NavBar };
