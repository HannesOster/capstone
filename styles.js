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
    font-family: system-ui;
  }
`;
const Invitation = styled.h1`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export { Invitation };
