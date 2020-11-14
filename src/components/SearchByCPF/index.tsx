import React, { useState } from 'react';
import httpClient from '../../http-client';

import { EmployeeData } from '../../types';
import Button from '../Button';

interface SearchByCPFProps {
  setEmployees: (employees: EmployeeData[]) => void
}

const SearchByCPF: React.FC<SearchByCPFProps> = ({ setEmployees }) => {
  const [cpf, setCpf] = useState('');

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!cpf) return;

    try {
      const response = await httpClient.get<EmployeeData>(`/employees/cpf?cpf=${cpf}`);
      const data = response.data ? [response.data] : [];
      setEmployees(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        required
        type="text"
        name="cpf"
        placeholder="Digite o CPF do funcionário"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />

      <Button type="submit" btnType="secundary"> pesquisar </Button>
    </form>
  );
};

export default React.memo(SearchByCPF);
