import React from 'react';

import { Btn } from './styles';

interface ButtonProps {
  children: string,
  onClick?: any,
  btnType?: 'success' | 'primary' | 'secundary' | 'danger'
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  children, onClick, btnType = 'primary', type = 'button',
}) => (
  <Btn type={type} btnType={btnType} onClick={onClick}>
    {children}
  </Btn>
);

export default Button;
