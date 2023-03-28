import React from 'react';
import Select from 'react-select';
import './App.css';


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
