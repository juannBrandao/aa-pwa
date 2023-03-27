import React, { useState } from 'react';
import './App.css';
import Select from 'react-select'


function App() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return(
      <div className='App'>
        <Select name='teste' options={options} />

      </div>
  );
}

export default App;
