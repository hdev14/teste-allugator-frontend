import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

import Button from '../../components/Button';
import httpClient from '../../http-client';
import { EmployeeData } from '../../types';
import EmployeeForm from '../EmployeeForm';
import Modal, { ModalHandler } from '../Modal';

import { Container } from './styles';

interface EmployeesProps {
  employees: EmployeeData[],
  setEmployees: any
}

const Employees: React.FC<EmployeesProps> = ({ employees, setEmployees }) => {
  const [selectedId, setSelectedId] = useState('');
  const editEmployeeModalRef = useRef<ModalHandler>(null);

  const toggleEditEmployeeModal = () => {
    editEmployeeModalRef.current?.toggleModal();
  };

  const updateEmployee = (id: string) => {
    setSelectedId(id);
    toggleEditEmployeeModal();
  };

  const deleteEmployee = (cpf: string) => {
    ((async () => {
      try {
        await httpClient.delete(`/employees/${cpf}`);
        const newData = employees.filter((e) => e.cpf !== cpf);
        setEmployees(newData);
      } catch (err) {
        toast.error('Não foi possivel excluir o funcionário');
      }
    })());
  };

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
                      <Button onClick={() => updateEmployee(employee._id || '')}>editar</Button>
                      <Button
                        btnType="danger"
                        onClick={() => deleteEmployee(employee.cpf || '')}
                      >
                        excluir
                      </Button>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>

      <Modal
        ref={editEmployeeModalRef}
        formId="employee-form"
        confirm_text="atualizar"
      >
        <EmployeeForm
          employeeId={selectedId}
          employees={employees}
          setEmployees={setEmployees}
          toggleModal={toggleEditEmployeeModal}
          initialData={employees.find((e) => e._id === selectedId)}
        />
      </Modal>
    </Container>
  );
};

export default Employees;
