import React from 'react'
import {Container, InputStyled, Label } from './InputStyles'

const Input = ({label, name, type}) => {
  return (
      <Container>
        <Label htmlFor={name}>{label}</Label>
        <InputStyled type={type} id={name} name={name}/> 
      </Container>
  )
}

export default Input