import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import LoginCreate from './LoginCreate/LoginCreate';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='criar' element={<LoginCreate/>}/>
      </Routes>
    </div>
  )
}

export default Login