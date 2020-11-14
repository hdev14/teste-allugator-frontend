import React from 'react';

import Button from '../../components/Button';
import { EmployeeData } from '../../types';

import { Container } from './styles';

interface EmployeesProps {
  employees: EmployeeData[],
  setEmployees: any
}

const Employees: React.FC<EmployeesProps> = ({ employees, setEmployees }) => {
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
            {employees.length === 0 ? (
              <tr>
                <td colSpan={9}>Nenhum funcionário encontrado.</td>
              </tr>
            ) : (
              <>
                {employees.map((employee, index) => (
                  <tr key={employee._id}>
                    <td>{index}</td>
                    <td>{employee.datacad}</td>
                    <td>{employee.cargo}</td>
                    <td>{employee.cpf}</td>
                    <td>{employee.nome}</td>
                    <td>{employee.ufnasc}</td>
                    <td>{employee.salario}</td>
                    <td>{employee.status}</td>
                    <td className="options">
                      <Button onChange={() => updateEmployee('id')}>editar</Button>
                      <Button btnType="danger" onChange={() => deleteEmployee('id')}>excluir</Button>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Employees;
