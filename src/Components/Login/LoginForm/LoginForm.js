import React, { useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { TOKEN_POST, USER_GET } from '../../../api';
import useForm from '../../../Hooks/useForm';
import Button from '../../Form/Button/Button';
import Input from '../../Form/Input/Input';
import { UserContext } from '../../../UserContext';

const LoginForm = () => {
  
  const username = useForm('');
  const password = useForm('');

  const {userLogin} = useContext(UserContext);

  
  async function handleSubmit(event){
    event.preventDefault();

    if(username.validate() && password.validate())
    {
      userLogin(username.value, password.value);
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