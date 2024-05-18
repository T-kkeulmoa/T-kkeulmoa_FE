import { createGlobalStyle } from "styled-components";

const AppStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Spoqa Han Sans Neo', "sans-seri";
  }
`;

export default AppStyles;
