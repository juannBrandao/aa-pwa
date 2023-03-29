import React from 'react';
import './index.css';

const Container = ({ children }:any) => {
  return (
    <div className='container'>
      {children}
    </div>
  );
  }
  
export default Container;