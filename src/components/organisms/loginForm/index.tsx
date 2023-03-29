import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/button/button';
import Input from '../../molecules';
import MainTemplate from '../../templates';
import './index.css';


const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }  } = useForm();
  const emailValidationPattern = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

  const onSubmit = (formData: any) => {
    console.log('ahhhh forma data que chegou aqui ', formData);
  }
  
  return (
    <MainTemplate>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-16 d-flex justify-content-center'>
          <Input register={register('userMail', {required: true, pattern: emailValidationPattern})} 
          type='text' label="E-mail" id="userMail" error={!!errors?.userMail ? 'Por favor digite um e-mail válido' : null}/>

        </div>
        <div className='mb-16 mb-16 d-flex justify-content-center'>
          <Input register={register('password', {required: true})} 
          type='password' label="Senha" id="password" error={!!errors?.password ? 'Por favor digite sua senha' : null} />
        </div>
        <div className='mb-16 text-center'>
          <Button label='Entrar' onClick={() => null}/>
        </div>
      </form>
    </MainTemplate>
  );
  }
  
export default LoginForm;