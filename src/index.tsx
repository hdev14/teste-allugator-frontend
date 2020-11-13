import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Main from './layouts/Main';

ReactDOM.render(
  <React.StrictMode>
    <Main>
      <App />
    </Main>
  </React.StrictMode>,
  document.getElementById('root'),
);
