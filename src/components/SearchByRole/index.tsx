import React, { useState } from 'react';
import Button from '../Button';

const SearchByRole: React.FC = () => {
  const [role, setRole] = useState('');

  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="cpf"
        placeholder="Digite o CPF do funcionário"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <Button type="submit" btnType="secundary"> pesquisar </Button>
    </form>
  );
};

export default SearchByRole;
