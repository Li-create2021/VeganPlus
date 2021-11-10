import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: Roboto, Helvetica, Sans-Serif;
  }

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;