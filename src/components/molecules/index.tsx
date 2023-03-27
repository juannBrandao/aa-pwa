import React from 'react';
import './index.css';

export type InputProps = {
  label: string,
  id: string,
  onKeyDown: (event: string) => void;
}

const Input = (props: InputProps) => {
  return (
    <div>
      <div className='mb-8'>
        <label htmlFor={props.id}>{props.label}</label>
      </div>
      <div>
        <input className='custom-input' id={props.id} onKeyDown={(event:any) => props.onKeyDown(event.target.value)}></input>
      </div>
    </div>
  );
  }
  
export default Input;