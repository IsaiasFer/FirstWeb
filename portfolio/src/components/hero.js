import React from 'react';

class Hero extends React.Component{
    render(){
        return(
            <div className="container">
				<h1>
					Hola! Soy <strong>Isaias fernandez,</strong><br/>un chico apasionado<br/>por el <strong>aprendizaje</strong> :)
				</h1>
				<figure>
					<img className="hero-image" src="https://i.imgur.com/fuzMYwx.jpg" width="500" height="290" alt="imagen principal del sitio"></img>
				</figure>
			</div>
            )
    }
}

export default Hero;