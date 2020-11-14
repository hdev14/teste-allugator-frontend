import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import httpClient from '../../http-client';

import { EmployeeData } from '../../types';
import { Container } from './styles';

interface EmployeeForm {
  employees: EmployeeData[],
  setEmployees: (employees: EmployeeData[]) => void,
  initialData?: EmployeeData,
  toggleModal: any
  employeeId?: string
}

const EmployeeForm: React.FC<EmployeeForm> = ({
  employees, setEmployees, initialData = {}, toggleModal, employeeId = '',
}) => {
  const [datacad, setDatacad] = useState(initialData.datacad || '');
  const [cargo, setCargo] = useState(initialData.cargo || '');
  const [cpf, setCpf] = useState(initialData.cpf || '');
  const [nome, setNome] = useState(initialData.nome || '');
  const [ufnasc, setUfnasc] = useState(initialData.ufnasc || '');
  const [salario, setSalario] = useState(initialData.salario || 0);
  const [status, setStatus] = useState(initialData.status || 'ATIVO');

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!employeeId) {
        const responseCreate = await httpClient.put<EmployeeData>('/employees', {
          datacad, cargo, cpf, nome, ufnasc, salario, status,
        });
        setEmployees([...employees, responseCreate.data].reverse());
        toast.success('Funcionário cadastrado!');
        toggleModal();
        return;
      }

      const responseUpdate = await httpClient.put<EmployeeData>(`/employees/${employeeId}`, {
        datacad, cargo, cpf, nome, ufnasc, salario, status,
      });
      setEmployees([...employees, responseUpdate.data].reverse());
      toast.success('Funcionário atualizado!');
      toggleModal();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>

      <form id="employee-form" onSubmit={submitHandler}>
        {/* eslint-disable */}
        <label htmlFor="datacad">
          Data de cadastro
          <InputMask
            required
            type="text"
            name="datacad"
            mask="99/99/9999"
            placeholder="DD/MM/AAAA"
            value={datacad}
            onChange={(e) => setDatacad(e.target.value)}
          />
        </label>
        <label htmlFor="cargo">
          Cargo
          <input
            required
            type="text"
            name="cargo"
            placeholder="Digite o cargo do funcionário"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </label>
        <label htmlFor="cpf">
          CPF
          <input
            required
            type="text"
            name="cpf"
            placeholder="Digite o cpf do funcionário (apenas números)"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>
        <label htmlFor="nome">
          Nome
          <input
            required
            type="text"
            name="nome"
            placeholder="Digite o nome do funcionário"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label htmlFor="ufnasc">
          UF de Nascimento
          <input
            required
            type="text"
            name="ufnasc"
            placeholder="Digite a sigla do estado"
            value={ufnasc}
            onChange={(e) => setUfnasc(e.target.value)}
          />
        </label>
        <label htmlFor="salario">
          Salário
          <input
            required
            type="number"
            name="datacad"
            placeholder="Digite o salário do funcionário"
            value={salario}
            onChange={(e) => setSalario(Number(e.target.value))}
          />
        </label>
        <label htmlFor="status">
          Status
          <input
            required
            type="text"
            name="status"
            placeholder="Digite o status do funcionário (AITVO/BLOQUEADO)"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
      </form>
    </Container>
  );
};

export default EmployeeForm;
