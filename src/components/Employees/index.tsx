import React from 'react';

import Button from '../../components/Button';

import { Container } from './styles';

interface EmployeesProps {
  employees: Array<{}>,
  setEmployees: any
}

const Employees: React.FC<EmployeesProps> = ({ employees = [], setEmployees }) => {
  const updateEmployee = (id: string) => {};
  const deleteEmployee = (id: string) => {};

  return (
    <Container>
      <div className="employees">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Data de cadastro</th>
              <th>Cargo</th>
              <th>CPF</th>
              <th>Nome</th>
              <th>UF de Nascimento</th>
              <th>Salário</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Data de cadastro</td>
              <td>Cargo</td>
              <td>CPF</td>
              <td>Nome</td>
              <td>UF de Nascimento</td>
              <td>Salário</td>
              <td>Status</td>
              <td className="options">
                <Button onChange={() => updateEmployee('id')}>editar</Button>
                <Button btnType="danger" onChange={() => deleteEmployee('id')}>excluir</Button>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>Data de cadastro</td>
              <td>Cargo</td>
              <td>CPF</td>
              <td>Nome</td>
              <td>UF de Nascimento</td>
              <td>Salário</td>
              <td>Status</td>
              <td className="options">
                <Button onChange={() => {}}>editar</Button>
                <Button btnType="danger" onChange={() => {}}>excluir</Button>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>Data de cadastro</td>
              <td>Cargo</td>
              <td>CPF</td>
              <td>Nome</td>
              <td>UF de Nascimento</td>
              <td>Salário</td>
              <td>Status</td>
              <td className="options">
                <Button onChange={() => {}}>editar</Button>
                <Button btnType="danger" onChange={() => {}}>excluir</Button>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>Data de cadastro</td>
              <td>Cargo</td>
              <td>CPF</td>
              <td>Nome</td>
              <td>UF de Nascimento</td>
              <td>Salário</td>
              <td>Status</td>
              <td className="options">
                <Button onChange={() => {}}>editar</Button>
                <Button btnType="danger" onChange={() => {}}>excluir</Button>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>Data de cadastro</td>
              <td>Cargo</td>
              <td>CPF</td>
              <td>Nome</td>
              <td>UF de Nascimento</td>
              <td>Salário</td>
              <td>Status</td>
              <td className="options">
                <Button onChange={() => {}}>editar</Button>
                <Button btnType="danger" onChange={() => {}}>excluir</Button>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>Data de cadastro</td>
              <td>Cargo</td>
              <td>CPF</td>
              <td>Nome</td>
              <td>UF de Nascimento</td>
              <td>Salário</td>
              <td>Status</td>
              <td className="options">
                <Button onChange={() => {}}>editar</Button>
                <Button btnType="danger" onChange={() => {}}>excluir</Button>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>Data de cadastro</td>
              <td>Cargo</td>
              <td>CPF</td>
              <td>Nome</td>
              <td>UF de Nascimento</td>
              <td>Salário</td>
              <td>Status</td>
              <td className="options">
                <Button onChange={() => {}}>editar</Button>
                <Button btnType="danger" onChange={() => {}}>excluir</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Data de cadastro</td>
              <td>Cargo</td>
              <td>CPF</td>
              <td>Nome</td>
              <td>UF de Nascimento</td>
              <td>Salário</td>
              <td>Status</td>
              <td className="options">
                <Button onChange={() => {}}>editar</Button>
                <Button btnType="danger" onChange={() => {}}>excluir</Button>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>Data de cadastro</td>
              <td>Cargo</td>
              <td>CPF</td>
              <td>Nome</td>
              <td>UF de Nascimento</td>
              <td>Salário</td>
              <td>Status</td>
              <td className="options">
                <Button onChange={() => {}}>editar</Button>
                <Button btnType="danger" onChange={() => {}}>excluir</Button>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>Data de cadastro</td>
              <td>Cargo</td>
              <td>CPF</td>
              <td>Nome</td>
              <td>UF de Nascimento</td>
              <td>Salário</td>
              <td>Status</td>
              <td className="options">
                <Button onChange={() => {}}>editar</Button>
                <Button btnType="danger" onChange={() => {}}>excluir</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Employees;
