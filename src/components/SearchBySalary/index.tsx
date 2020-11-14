import React, { useState } from 'react';
import Button from '../Button';

const SearchBySalary: React.FC = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        name="min"
        placeholder="Digite o valor minímo"
        value={min}
        onChange={(e) => setMin(parseFloat(e.target.value))}
      />

      <input
        type="number"
        name="max"
        placeholder="Digite o valor máximo"
        value={max}
        onChange={(e) => setMax(parseFloat(e.target.value))}
      />

      <Button type="submit" btnType="secundary"> pesquisar </Button>
    </form>
  );
};

export default SearchBySalary;
