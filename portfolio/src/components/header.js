import React from 'react';
import mainLogo from '../images/logo.png'
import '../styles/header.css'
import {Link} from 'react-router-dom'

class Headersito extends React.Component{
    render(){
        return(<header className="header">
            <div className="container">
            <figure className="logo">
                <Link to='/'>
                    <img src={mainLogo} height="50" alt="Logo de Isaias Fernandez"></img>
                </Link>
            </figure>
            <nav className="menu">
                <ul>
                    <li>
                    <a className="link" href="#Portafolio">Portafolio</a>
                    </li>
                    <li>
                    <a className="link" href="#Experiencia">Experiencia</a>
                    </li>
                    <li>
                    <a className="link" href="#WeWork">Trabajemos juntos</a>
                    </li>
                    <li>
                    <Link className='link' to='/Badges'>Badges</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
        )
    }
}

export default Headersito;