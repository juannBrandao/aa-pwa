import React from 'react';
import './index.css';

export type ErrorMessageProps = {
  text: string
}

const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <div>
      <p className='error'>{props.text}</p>
    </div>
  );
}
  
export default ErrorMessage;