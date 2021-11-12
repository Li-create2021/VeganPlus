import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    font-family: Roboto, Helvetica, Sans-Serif;
    margin-bottom: 80px;
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
`;

export default GlobalStyle;