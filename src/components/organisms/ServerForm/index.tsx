import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/button/button';
import ErrorMessage from '../../atoms/errorMessage';
import Select from 'react-select'

import './index.css';


const ServerForm = () => {
  const { register, handleSubmit, formState: { errors }  } = useForm();
  const emailValidationPattern = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
  const options = [
    { value: 'servidor 1', label: 'servidor 1' },
    { value: 'servidor 2', label: 'servidor 2' },
    { value: 'servidor 3', label: 'servidor 3' }
  ]
  const onSubmit = (formData: any) => {
    console.log('ahhhh forma data que chegou aqui ', formData);
  }
  
  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-16 d-flex justify-content-center'>
        <Select className='custom-select' name='teste'  options={options} />

        </div>
        <div className='mb-16 text-center'>
          <Button label='Continuar' onClick={() => null}/>
        </div>
      </form>
    </div>
  );
  }
  
export default ServerForm;