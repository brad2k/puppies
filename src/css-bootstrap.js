import { createGlobalStyle } from "styled-components";

export const theme = {
  pink: "#f80759",
  purple: "#bc4e9c",
  text: "#333",
  standardPadding: "4rem"
};

export const GlobalStyles = createGlobalStyle`
  html {
      box-sizing: border-box;
      font-size: 10px;
      min-height: 100vh;
  }

  *, *:before, *:after {
      box-sizing: inherit;
  }

  body {
      font-size: 1.6rem;
      line-height: 1.8;
      padding: 0;
      margin: 0;
      color: ${props => props.theme.text};
      font-family: 'Montserrat', sans-serif;

      &.disable-scroll {
        overflow: hidden;
      }
  }

  p {
    margin: 0;
  }
`;
