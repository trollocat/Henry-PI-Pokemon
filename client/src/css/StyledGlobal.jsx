// documentation: https://pablomonteserin.com/curso/react/styled-components/

import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
  html, body, #root, .App {
    height: 100%;
    margin: 0;
    font-family: roboto;
  }
`;
