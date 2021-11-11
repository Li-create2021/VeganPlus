import GlobalStyle from './styles/globalStyles';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Theme from './styles/Theme';



ReactDOM.render(
  <Router>
    <React.StrictMode>

      <Theme>
        <GlobalStyle />
        <App />
      </Theme>

    </React.StrictMode>
  </Router>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
