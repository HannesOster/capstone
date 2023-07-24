import styled from "styled-components";
import { FiSave } from "react-icons/fi";
import Link from "next/link";

const RedButton = styled(Link)`
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

export { Container, GreenButton, SaveIcon, RedButton };
