import React, { useEffect, useRef, useState } from 'react';

import Button from '../../components/Button';
import EmployeeForm from '../../components/EmployeeForm';
import Employees from '../../components/Employees';
import Load from '../../components/Load';
import Modal, { ModalHandler } from '../../components/Modal';
import SearchByCPF from '../../components/SearchByCPF';
import SearchByName from '../../components/SearchByName';
import SearchByRegisterDate from '../../components/SearchByRegisterDate';
import SearchByRole from '../../components/SearchByRole';
import SearchBySalary from '../../components/SearchBySalary';
import SearchByStatus from '../../components/SearchByStatus';
import SearchByUF from '../../components/SearchByUF';
import httpClient from '../../http-client';
import { EmployeeData } from '../../types';
import { Container } from './styles';

const forms = {
  searchByName: (setEmployees: any) => <SearchByName setEmployees={setEmployees} />,
  searchByCPF: (setEmployees: any) => <SearchByCPF setEmployees={setEmployees} />,
  searchByRole: (setEmployees: any) => <SearchByRole setEmployees={setEmployees} />,
  searchBySalary: (setEmployees: any) => <SearchBySalary setEmployees={setEmployees} />,
  searchByUF: (setEmployees: any) => <SearchByUF setEmployees={setEmployees} />,
  searchByStatus: (setEmployees: any) => <SearchByStatus setEmployees={setEmployees} />,
  searchByRegisterDate: (setEmployees: any) => <SearchByRegisterDate setEmployees={setEmployees} />,
};

type Search = 'searchByName' | 'searchByCPF' | 'searchByRole' | 'searchBySalary' | 'searchByUF' | 'searchByStatus' | 'searchByRegisterDate'

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<Search>('searchByName');
  const [employees, setEmployees] = useState<EmployeeData[]>([]);
  const newEmployeeModalRef = useRef<ModalHandler>(null);

  useEffect(() => {
    ((async function fetchEmployees() {
      try {
        setLoading(true);
        const response = await httpClient.get<EmployeeData[]>('/employees/salary?min=0&max=20000');
        setEmployees(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })());
  }, [search]);

  const toggleNewEmployeeModal = () => {
    newEmployeeModalRef.current?.toggleModal();
  };

  const onChangeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case 'searchByName':
        setSearch('searchByName');
        break;
      case 'searchByCPF':
        setSearch('searchByCPF');
        break;
      case 'searchByRole':
        setSearch('searchByRole');
        break;
      case 'searchBySalary':
        setSearch('searchBySalary');
        break;
      case 'searchByUF':
        setSearch('searchByUF');
        break;
      case 'searchByStatus':
        setSearch('searchByStatus');
        break;
      case 'searchByRegisterDate':
        setSearch('searchByRegisterDate');
        break;
      default:
    }
  };

  if (loading) return <Load />;

  return (
    <Container>
      <header>
        <h2>Funcionários</h2>
        <Button btnType="success" onClick={toggleNewEmployeeModal}>novo funcionário</Button>
      </header>

      <div className="white-container">
        <div className="forms">

          <label htmlFor="searchs" id="searchs">
            Consultar por:
            <select name="searchs" value={search} onChange={onChangeSelectHandler}>
              <option value="searchByName" disabled>Escolha o tipo da consulta</option>
              <option value="searchByRegisterDate">Data de cadastro</option>
              <option value="searchByRole">Cargo</option>
              <option value="searchByCPF">CPF</option>
              <option value="searchByName">Nome</option>
              <option value="searchByUF">UF</option>
              <option value="searchBySalary">Faixa salarial</option>
              <option value="searchByStatus">Status</option>
            </select>
          </label>

          {forms[search](setEmployees)}

        </div>

        <Employees employees={employees} setEmployees={setEmployees} />
      </div>

      <Modal
        ref={newEmployeeModalRef}
        formId="employee-form"
        confirm_text="salvar"
      >
        <EmployeeForm
          employees={employees}
          setEmployees={setEmployees}
          toggleModal={toggleNewEmployeeModal}
        />
      </Modal>
    </Container>
  );
};

export default Home;
