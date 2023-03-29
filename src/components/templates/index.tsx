import React from 'react';
import './index.css';

const MainTemplate = ({ children }:any) => {
  return (
    <div className='container'>
      {children}
    </div>
  );
  }
  
export default MainTemplate;