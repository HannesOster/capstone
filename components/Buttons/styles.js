import styled from "styled-components";
import { FiSave } from "react-icons/fi";
import Link from "next/link";
import ReactModal from "react-modal";

const RedLink = styled(Link)`
  color: red;
  background-color: ${(props) => props.theme.third};
  border: 2px red solid;
  border-radius: 5%;
  padding: 5px 20px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: normal;
`;

const RedButton = styled.button`
  color: red;
  background-color: ${(props) => props.theme.third};
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
  background-color: ${(props) => props.theme.third};
  border: 2px green solid;
  padding: 5px 20px;
  border-radius: 5%;
  font-size: 1rem;
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
  color: #4d4745;
  background-color: ${(props) => props.theme.secondary};
  text-decoration: none;
  width: 95%;
  padding: 30px 40px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: normal;
  &:hover {
    background-color: ${(props) => props.theme.third};
    border: 3px ${(props) => props.theme.secondary} solid;
    color: ${(props) => props.theme.secondary};
  }
`;
const MenuButton = styled.button`
  background-color: ${(props) => props.theme.secondary};
  color: #4d4745;
  width: 95%;
  padding: 30px 40px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.5rem;
  &:hover {
    background-color: ${(props) => props.theme.third};
    border: 3px ${(props) => props.theme.secondary} solid;
    color: ${(props) => props.theme.secondary};
  }
`;

export {
  MenuContainer,
  RedButton,
  Container,
  GreenButton,
  SaveIcon,
  RedLink,
  MenuLink,
  MenuButton,
};
