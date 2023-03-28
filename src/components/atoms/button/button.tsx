import React from 'react';
import './index.css';

export type ButtonProps = {
  type?: 'primary'
  label: string,
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      {((props.type === 'primary' || !props.type) && (
        <button className='custom-button primary-button' onClick={() => props.onClick()}>{props.label}</button>
      ))}
    </div>
  );
  }
  
export default Button;