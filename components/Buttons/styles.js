import styled from "styled-components";
import { FiSave } from "react-icons/fi";
import Link from "next/link";

const RedLink = styled(Link)`
  color: red;
  background-color: ${(props) => props.theme.third};
  border: 2px red solid;
  border-radius: 5%;
  padding: 5px 20px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: normal;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
  }
`;

const RedButton = styled.button`
  color: red;
  background-color: ${(props) => props.theme.third};
  border: 2px red solid;
  border-radius: 5%;
  padding: 5px 20px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: normal;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
  }
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
  border: 2px solid green;
  padding: 5px 20px;
  border-radius: 5%;
  font-size: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
  }
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
  background: linear-gradient(to right, #ffc700, #ffa500);
  color: ${(props) => props.theme.sixth};
  text-decoration: none;
  width: 95%;
  padding: 30px 40px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: normal;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(to right, #ffa500, #ffd700);
    transform: scale(1.05);
  }
`;
const MenuButton = styled.button`
  background: linear-gradient(to right, #ffc700, #ffa500);
  color: ${(props) => props.theme.sixth};
  width: 95%;
  padding: 30px 40px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(to right, #ffa500, #ffd700);
    transform: scale(1.05);
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
