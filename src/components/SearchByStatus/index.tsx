import React, { useState } from 'react';
import Button from '../Button';

const SearchByStatus = () => {
  const [status, setStatus] = useState('');

  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        name="uf"
        placeholder="Digite o status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <Button type="submit" btnType="secundary">pesquisar</Button>
    </form>
  );
};

export default SearchByStatus;
