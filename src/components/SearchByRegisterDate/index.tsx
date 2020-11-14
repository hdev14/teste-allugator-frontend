import React, { useState } from 'react';
import Button from '../Button';

const SearchByRegisterDate = () => {
  const [date, setDate] = useState('');

  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        name="uf"
        placeholder="Digite o status"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button type="submit" btnType="secundary"> pesquisar </Button>
    </form>
  );
};

export default SearchByRegisterDate;
