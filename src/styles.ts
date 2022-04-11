import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    background-color: teal;
  }
  * {
    box-sizing: border-box;
  }
`;
