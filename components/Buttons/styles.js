import styled from "styled-components";
import { FiSave } from "react-icons/fi";
import Link from "next/link";

const RedLink = styled(Link)`
  color: red;
  background-color: white;
  border: 2px red solid;
  border-radius: 5%;
  padding: 5px 20px;
  text-decoration: none;
`;

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const GreenButton = styled.button`
  color: green;
  background-color: white;
  border: 2px green solid;
  padding: 5px 20px;
  border-radius: 5%;
`;

const SaveIcon = styled(FiSave)`
  margin-right: 10px;
`;
const MenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 130px 0 30px 30px;

  gap: 30px;
`;
const MenuLink = styled(Link)`
  color: green;
  background-color: white;
  border: 2px green solid;
  width: 70%;
  padding: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export { MenuContainer, Container, GreenButton, SaveIcon, RedLink, MenuLink };
