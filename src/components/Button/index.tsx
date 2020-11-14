import React from 'react';

import { Btn } from './styles';

interface ButtonProps {
  children: string,
  onChange?: any,
  btnType?: 'success' | 'primary' | 'secundary' | 'danger'
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  children, onChange, btnType = 'primary', type = 'button',
}) => (
  <Btn type={type} btnType={btnType} onChange={onChange}>
    {children}
  </Btn>
);

export default Button;
