import Select from 'react-select'
import './index.css';

const PageConfig= ()=>{

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    return(
        <div className="container">
          <Select name='teste' options={options} />
        </div>
    )
}

export default PageConfig