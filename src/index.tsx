import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';

import App from './App';
import Main from './layouts/Main';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main>
        <GlobalStyle />
        <App />
      </Main>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
