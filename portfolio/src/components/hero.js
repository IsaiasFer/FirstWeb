import React from 'react';

import '../styles/hero.css'

class Hero extends React.Component{
    render(){
        return(
            <div className="container">
				<h1>
					Hola! Soy <strong>{this.props.firstName} {this.props.lastName},</strong><br/>un {this.props.gender} apasionado<br/>por el <strong>{this.props.inspiration}</strong> :)
				</h1>
				<figure>
					<img className="hero-image" src={this.props.avatarUrl} width="500" height="290" alt="imagen principal del sitio"/>
				</figure>
			</div>
            )
    }
}

export default Hero;