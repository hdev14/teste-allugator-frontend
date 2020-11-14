import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import httpClient from '../../http-client';

import { EmployeeData } from '../../types';
import Button from '../Button';

interface SearchByRegisterDateProps {
  setEmployees: (employees: EmployeeData[]) => void
}

const SearchByRegisterDate: React.FC<SearchByRegisterDateProps> = ({ setEmployees }) => {
  const [date, setDate] = useState('');

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!date) return;

    try {
      const response = await httpClient.get<EmployeeData[]>(`/employees/register-date?date=${date}`);
      setEmployees(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <InputMask
        type="text"
        name="register-date"
        placeholder="DD/MM/AAAA"
        mask="99/99/9999"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button type="submit" btnType="secundary"> pesquisar </Button>
    </form>
  );
};

export default SearchByRegisterDate;
