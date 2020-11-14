import React, { useState } from 'react';
import Button from '../../components/Button';

import Employees from '../../components/Employees';
import { Container } from './styles';

const Home = () => {
  const [search, setSearch] = useState('');

  const submitHandler = () => {};

  return (
    <Container>
      <header>
        <h2>Funcionários</h2>
        <Button btnType="success" onChange={() => {}}>novo funcionário</Button>
      </header>
      <div className="white-container">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="search"
            placeholder="Digite o nome do funcionário"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Button type="submit" btnType="secundary"> pesquisar </Button>
        </form>
        <Employees employees={[]} setEmployees={() => {}} />
      </div>
    </Container>
  );
};

export default Home;
