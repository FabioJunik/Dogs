import React, { } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../Hooks/useForm';
import Button from '../../Form/Button/Button';
import Input from '../../Form/Input/Input';

const LoginForm = () => {
  
  const username = useForm('');
  const password = useForm('');


  function handleSubmit(event){
    event.preventDefault();

    if(username.validate() && password.validate())
    {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
          method: 'POST',
          headers:{
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({username,password})
      }).then(response=>{
          console.log(response)
          return response;
      }).then(json=>{
          console.log(json);
      })
    }
  }

  return (
    <section>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="usuario" {...username}/>
            <Input label="Senha" type="password" name="password" {...password}/>
            <Button>Entrar</Button>
        </form>
        <Link to='/login/criar'>Cadastrar</Link>
    </section>
  )
}

export default LoginForm