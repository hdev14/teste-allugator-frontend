import React, { useState } from 'react';
import Button from '../Button';

const SearchByCPF: React.FC = () => {
  const [cpf, setCpf] = useState('');

  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="cpf"
        placeholder="Digite o CPF do funcionário"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />

      <Button type="submit" btnType="secundary"> pesquisar </Button>
    </form>
  );
};

export default SearchByCPF;
