import React, { useState } from 'react';
import Button from '../Button';

const SearchByUF: React.FC = () => {
  const [uf, setUf] = useState('');

  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        name="uf"
        placeholder="Digite o UF"
        value={uf}
        onChange={(e) => setUf(e.target.value)}
      />
      <Button type="submit" btnType="secundary"> pesquisar </Button>
    </form>
  );
};

export default SearchByUF;
