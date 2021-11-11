import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: -16px;
    padding: 30px 10px 10px 10px;
    background: white;
    font-family: Roboto, Helvetica, Sans-Serif;
  }

  h1 {
    font-size: 20px;
    text-align: center;
  }

  h3 {
    font-size: 18px;
    text-align: left;
    text-shadow: 5px 2px 4px #000000;
  }

  h3 .recipe-total-time {
    text-align: left;

  }

  a {
    text-decoration: none;
  }

  li {
    list-decoration: none;
  }

  p {
    font-size: 18px;
    text-align: left;
  }

  h1 {
    font-size: 20px;
    text-align: center;
  }

  h3 {
    font-size: 18px;
    text-align: left;
    text-shadow: 5px 2px 4px #000000;
  }

  h3 .recipe-total-time {
    text-align: left;

  }

  a {
    text-decoration: none;
  }

  li {
    list-decoration: none;
  }

  p {
    font-size: 18px;
    text-align: left;
  }
  
  .footer {
    margin:0;
    padding:0;
    display: flex;
    justify-content:space-around;
    list-style: none;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .logo {
    display: flex;
    width: 100px;
    margin: 0;
    position: left;
    line-height:none;
    }

    header {
      display: flex;
      margin: 13px;
      align-contents: stretch;
      flex-direction: row;
      justify-content: space-around;

    }
`;

export default GlobalStyle;