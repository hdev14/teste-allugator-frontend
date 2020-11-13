import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/GlobalStyle';

import App from './App';
import Main from './layouts/Main';

ReactDOM.render(
  <React.StrictMode>
    <Main>
      <GlobalStyle />
      <App />
    </Main>
  </React.StrictMode>,
  document.getElementById('root'),
);
