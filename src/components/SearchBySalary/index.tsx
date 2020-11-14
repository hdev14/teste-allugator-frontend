import React, { useState } from 'react';
import httpClient from '../../http-client';
import { EmployeeData } from '../../types';
import Button from '../Button';

interface SearchBySalaryProps {
  setEmployees: (employees: EmployeeData[]) => void
}

const SearchBySalary: React.FC<SearchBySalaryProps> = ({ setEmployees }) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (max < 0) return;

    try {
      const response = await httpClient.get<EmployeeData[]>(`/employees/salary?min=${min}&max=${max}`);
      setEmployees(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="min">
        Valor miníno
        <input
          required
          type="number"
          name="min"
          placeholder="Digite o valor minímo"
          value={min}
          onChange={(e) => setMin(parseFloat(e.target.value))}
          min={0}
        />
      </label>

      <label htmlFor="max">
        Valor máximo
        <input
          required
          type="number"
          name="max"
          placeholder="Digite o valor máximo"
          value={max}
          onChange={(e) => setMax(parseFloat(e.target.value))}
          min={1000}
        />
      </label>

      <Button type="submit" btnType="secundary"> pesquisar </Button>
    </form>
  );
};

export default SearchBySalary;
