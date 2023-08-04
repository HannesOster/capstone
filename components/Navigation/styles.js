import styled from "styled-components";
import Link from "next/link";

export const NavBar = styled.nav`
  background-color: ${(props) => props.theme.primary};
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const NavLink = styled(Link)`
  border: solid 3px ${(props) => props.theme.third};
  color: ${(props) => props.theme.third};
  padding: calc(1rem - 1px) calc(1.3rem - 1px);
  border-radius: 5px;
  background-color: ${(props) => props.theme.primary};
  text-decoration: none;
`;
