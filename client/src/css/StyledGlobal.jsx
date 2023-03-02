// styled-components documentation: https://pablomonteserin.com/curso/react/styled-components/
import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

  html, body, #root, .App {
    height: 100%;
    margin: 0;
    font-family: "Signika";
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};

    @font-face {
    font-family: 'Signika';
    src: local('Signika'), url('../Signika-VariableFont_wght.tff');
    }
    @font-face {
      font-family: "Highway-Gothic";
      src: local("Highway-Gothic"), url("../Highway-Gothic.ttf");
    }
    @font-face {
      font-family: "Geometos";
      src: local("Geometos"), url("../Geometos.ttf");
    }
  }
`;
