import React from 'react';

import { Container, Navbar } from './styles';

const Main: React.FC = ({ children }) => (
  <Container>
    <Navbar>
      <h2>Teste Allugator</h2>
    </Navbar>

    <main>
      {children}
    </main>

    <footer>
      <small>
        Desenvolvido por
        {' '}
        <strong>hdev</strong>
      </small>
    </footer>
  </Container>
);

export default Main;
