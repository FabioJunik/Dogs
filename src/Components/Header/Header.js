import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {Container, Nav, Logo, UserIcon } from './HeaderStyles';
import { UserContext } from '../../UserContext';

const Header = () => {
  const {data} = useContext(UserContext);
  return (
    <Container>
        <Nav className='container'>
            <Link to="/" aria-label='Dogs - Home'><Logo/></Link>
            {data ? (
              <Link to="/login">
                {data.nome}
                <UserIcon/>
              </Link> )
                  :
              (<Link to="/login">
                <span>Login / Criar</span> 
                <UserIcon/>
              </Link>)
            }
            
        </Nav>
    </Container>
  )
}

export default Header;