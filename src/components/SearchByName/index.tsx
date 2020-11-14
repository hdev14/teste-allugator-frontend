import React, { useState } from 'react';

import httpClient from '../../http-client';
import { EmployeeData } from '../../types';
import Button from '../Button';

interface SearchByNameProps {
  setEmployees: (employees: EmployeeData[]) => void
}
const SearchByName: React.FC<SearchByNameProps> = ({ setEmployees }) => {
  const [name, setName] = useState('');

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) return;

    try {
      const response = await httpClient.get<EmployeeData[]>(`/employees/name?name=${name}`);
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
        name="name"
        placeholder="Digite o nome do funcionário"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button type="submit" btnType="secundary"> pesquisar </Button>
    </form>
  );
};

export default React.memo(SearchByName);
