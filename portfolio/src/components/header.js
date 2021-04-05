import React from 'react';
import mainLogo from '../images/logo.png'
import '../styles/header.css'
class Headersito extends React.Component{
    render(){
        return(
            <div className="container">
            <figure className="logo">
                <img src={mainLogo} height="50" alt="Logo de Isaias Fernandez"></img>
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
                </ul>
            </nav>
            </div>
        )
    }
}

export default Headersito;