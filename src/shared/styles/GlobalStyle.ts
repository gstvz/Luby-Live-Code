import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;  
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html, body {
    font-size: 62.5%;
    height: 100%;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`;
