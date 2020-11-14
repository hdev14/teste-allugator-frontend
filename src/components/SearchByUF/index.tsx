import React, { useState } from 'react';
import httpClient from '../../http-client';
import { EmployeeData } from '../../types';
import Button from '../Button';

interface SearchByUFProps {
  setEmployees: (employees: EmployeeData[]) => void
}

const SearchByUF: React.FC<SearchByUFProps> = ({ setEmployees }) => {
  const [uf, setUf] = useState('');

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!uf) return;

    try {
      const response = await httpClient.get<{ employees: EmployeeData[], count: number}>(`/employees/uf?uf=${uf}`);
      setEmployees(response.data.employees);
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
        placeholder="Digite o UF"
        value={uf}
        onChange={(e) => setUf(e.target.value)}
      />
      <Button type="submit" btnType="secundary"> pesquisar </Button>
    </form>
  );
};

export default React.memo(SearchByUF);
