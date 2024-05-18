import { createGlobalStyle } from "styled-components";

const AppStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background: var(--Shark-50, #f4f4f4);
    font-family: 'Spoqa Han Sans Neo', "sans-seri";
  }
`;

export default AppStyles;
