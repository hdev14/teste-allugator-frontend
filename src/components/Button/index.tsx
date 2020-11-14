import React from 'react';

import { Btn } from './styles';

interface ButtonProps {
  children: string,
  onClick?: any,
  btnType?: 'success' | 'primary' | 'secundary' | 'danger'
  type?: 'button' | 'submit' | 'reset'
  form?: string
}

const Button: React.FC<ButtonProps> = ({
  children, onClick, btnType = 'primary', type = 'button', form,
}) => (
  <Btn type={type} form={form} btnType={btnType} onClick={onClick}>
    {children}
  </Btn>
);

export default Button;
