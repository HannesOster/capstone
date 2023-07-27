import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    background-color: #fff6f4;
  }
`;
const Invitation = styled.h1`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const theme = { primary: "#D31119" };
export { Invitation, theme };
