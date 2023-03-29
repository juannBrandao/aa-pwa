
import Card from '../../components/molecules/Card';
import LoginForm from '../../components/organisms/loginForm';
import './index.css';

const PageLogin= ()=>{

    return(
        <div className="container">
          <Card title='Entrar'>
            <LoginForm />
          </Card>
        </div>
    )
}

export default PageLogin