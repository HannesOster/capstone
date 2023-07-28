import { createGlobalStyle } from "styled-components";

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
    background-color: ${(props) => props.theme.third};
  }
`;

const theme = {
  primary: "#D31119",
  secondary: "#55bac0",
  third: "#fff6f4",
  fourth: "#d08c7f",
};
export { theme };
