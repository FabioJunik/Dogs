import React from 'react'
import {Container, InputStyled, Label, Error} from './InputStyles'

const Input = ({label, name, type, value, onChange, error, onBlur}) => {
  return (
      <Container>
        <Label htmlFor={name}>{label}</Label>
        <InputStyled 
          type={type} 
          id={name} 
          name={name}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          /> 
          {error && <Error>{error}</Error>}
      </Container>
  )
}

export default Input