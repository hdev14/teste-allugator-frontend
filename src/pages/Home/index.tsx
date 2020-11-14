import React from 'react';
import Button from '../../components/Button';

import Employees from '../../components/Employees';
import SearchByCPF from '../../components/SearchByCPF';
import SearchByName from '../../components/SearchByName';
import SearchByRegisterDate from '../../components/SearchByRegisterDate';
import SearchByRole from '../../components/SearchByRole';
import SearchBySalary from '../../components/SearchBySalary';
import SearchByStatus from '../../components/SearchByStatus';
import SearchByUF from '../../components/SearchByUF';
import { Container } from './styles';

const Forms = {
  SearchByName,
  SearchByCPF,
  SearchByRole,
  SearchBySalary,
  SearchByUF,
  SearchByStatus,
  SearchByRegisterDate,
};

const Home = () => {
  return (
    <Container>
      <header>
        <h2>Funcionários</h2>
        <Button btnType="success" onChange={() => {}}>novo funcionário</Button>
      </header>
      <div className="white-container">
        <Forms.SearchByName />
        <Employees employees={[]} setEmployees={() => {}} />
      </div>
    </Container>
  );
};

export default Home;
