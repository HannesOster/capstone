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
    color: #4D4745;
  }
`;

const theme = {
  primary: "#D31119",
  secondary: "#40a9ff",
  third: "#fff6f4",
  fourth: "#d08c7f",
};
export { theme };
