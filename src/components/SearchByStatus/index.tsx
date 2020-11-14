import React, { useState } from 'react';
import httpClient from '../../http-client';
import { EmployeeData } from '../../types';
import Button from '../Button';

interface SearchByStatusProps {
  setEmployees: (employees: EmployeeData[]) => void
}

const SearchByStatus: React.FC<SearchByStatusProps> = ({ setEmployees }) => {
  const [status, setStatus] = useState('');

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!status) return;

    try {
      const response = await httpClient.get<EmployeeData[]>(`/employees/status?status=${status}`);
      setEmployees(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        required
        type="text"
        name="uf"
        list="status"
        placeholder="Digite o status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />

      <datalist id="status">
        <option value="ATIVO" />
        <option value="BLOQUEADO" />
      </datalist>

      <Button type="submit" btnType="secundary">pesquisar</Button>
    </form>
  );
};

export default SearchByStatus;
