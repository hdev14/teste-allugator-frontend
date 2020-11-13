import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Sidebar } from './styles';

const Main: React.FC = ({ children }) => (
  <Container>
    <Sidebar>
      <h2>Consultas de Funcionários</h2>

      <nav>
        <Link to="/">Consulta por Something</Link>
        <Link to="/">Consulta por Something</Link>
        <Link to="/">Consulta por Something</Link>
        <Link to="/">Consulta por Something</Link>
        <Link to="/">Consulta por Something</Link>
        <Link to="/">Consulta por Something</Link>
      </nav>

      <footer>
        <small>
          Desenvolvido por
          {' '}
          <strong>hdev</strong>
        </small>
      </footer>
    </Sidebar>
    <main>
      {children}
    </main>
  </Container>
);

export default Main;
