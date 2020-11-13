import React from 'react';

import { Btn } from './styles';

interface ButtonProps {
  children: string,
  onChange: any,
  btnType?: 'primary' | 'secundary' | 'danger'
}

const Button: React.FC<ButtonProps> = ({ children, onChange, btnType = 'primary' }) => (
  <Btn btnType={btnType} onChange={onChange}>
    {children}
  </Btn>
);

export default Button;
