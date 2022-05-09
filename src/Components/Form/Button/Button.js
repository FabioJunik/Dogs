import React from 'react';
import { ButtonStyled } from './ButtonStyles';

const Button = ({children, ...props}) => {
  return (
    <ButtonStyled {...props}>{children}</ButtonStyled>
  )
}

export default Button