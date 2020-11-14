import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/GlobalStyle';

import App from './App';
import Main from './layouts/Main';

ReactDOM.render(
  <React.StrictMode>
    <Main>
      <ToastContainer position={toast.POSITION.TOP_LEFT} autoClose={3000} />
      <GlobalStyle />
      <App />
    </Main>
  </React.StrictMode>,
  document.getElementById('root'),
);
