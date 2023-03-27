import React, { useState } from 'react';
import Button from '../../atoms/button';
import Input from '../../molecules';
import './index.css';


const LoginForm = () => {
  const [userMail, setUserMail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='container'>
      <form>
        <div className='mb-16'>
          <Input label="E-mail" id="userMail" onKeyDown={(value: string) => setUserMail(value)}/>
        </div>
        <div className='mb-16'>
          <Input label="Senha" id="password" onKeyDown={(value: string) => setPassword(value)}/>
        </div>
      </form>
      <div>
        <Button label='Entrar' onClick={() => console.log('clicando no botão de entrar')}/>
      </div>
    </div>
  );
  }
  
export default LoginForm;