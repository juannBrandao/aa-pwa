
import Card from '../../components/molecules/Card';
import ServerForm from '../../components/organisms/ServerForm';
import './index.css';

const PageConfig= ()=>{

    return(
        <div className="container">

          <Card title='Informe o servidor'>
            <ServerForm />
          </Card>
        </div>
    )
}

export default PageConfig