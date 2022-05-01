import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Nav, Logo, UserIcon } from './HeaderStyles';

const Header = () => {
  return (
    <Container>
        <Nav className='container'>
            <Link to="/" aria-label='Dogs - Home'><Logo/></Link>
            <Link to="/login">
              <span>Login / Criar</span> 
              <UserIcon/>
            </Link>
        </Nav>
    </Container>
  )
}

export default Header;