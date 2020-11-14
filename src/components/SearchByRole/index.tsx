import React, { useState } from 'react';
import httpClient from '../../http-client';
import { EmployeeData } from '../../types';
import Button from '../Button';

interface SearchByRoleProps {
  setEmployees: (employees: EmployeeData[]) => void
}

const SearchByRole: React.FC<SearchByRoleProps> = ({ setEmployees }) => {
  const [role, setRole] = useState('');

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!role) return;

    try {
      const response = await httpClient.get<EmployeeData[]>(`/employees/role?role=${role}`);
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
        name="role"
        placeholder="Digite o cargo do funcionário"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <Button type="submit" btnType="secundary"> pesquisar </Button>
    </form>
  );
};

export default SearchByRole;
