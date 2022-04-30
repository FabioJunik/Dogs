import React from 'react';
import { Link } from 'react-router-dom';
import { } from '../Home/HomeStyles';

const Header = () => {
  return (
    <header>
        <nav className='container'>
            <Link to="/">Home</Link>
            <Link to="/login">Login / Criar</Link>
        </nav>
    </header>
  )
}

export default Header;