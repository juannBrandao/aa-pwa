import React from 'react';
import Menu from '../../organisms/menu';
import Container from '../container';

import './index.css';

const MainTemplate = ({ children }:any) => {
  return (
    <div>
      <Container>
        {children}
      </Container>
      
      <div className='nav-container'>
        <Menu />
      </div>
    </div>
  );
  }
  
export default MainTemplate;