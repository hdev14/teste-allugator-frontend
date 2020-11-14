import React, { useState } from 'react';
import Button from '../Button';

const SearchByName: React.FC = () => {
  const [name, setName] = useState('');

  const submitHandler = () => {

  };

  return (
    <form onSubmit={submitHandler}>
      <input
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

export default SearchByName;
