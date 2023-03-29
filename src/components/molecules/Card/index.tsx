
import { PropsWithChildren } from 'react'

import './index.css';

type CardProps = {
    title: string
  }
const Card= (props: PropsWithChildren<CardProps>)=>{

    return(
        <div className="container">
            <div className="card">
                <div className='head'>
                    <h1>{props.title}</h1>
                </div>
                <div>
                    {props.children}
                </div>
                <div className='foother'></div>  
            </div>
        </div>
    )
}

export default Card