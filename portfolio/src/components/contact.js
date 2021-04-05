import React from 'react';

import '../styles/contact.css'

class Contact extends React.Component{
    render(){
        return(
        <div className="container">
				<form className="form_email" action="/suscripcion/">
					<h3>¿Creamos Algo juntos?</h3>
					<button>
						<a className='contactLink' href='mailto:isaiafer04@gmail.com'>Contactame :)</a>
					</button>
				</form>
				<div className="social">
					<a href="https://twitter.com/isaiasfer4" target="_blank" className="social_link twitter"></a>
					<a href="https://www.facebook.com/isaiasFer4" target="_blank" className="social_link facebook"></a>
					<a href="https://github.com/IsaiasFer" target="_blank" className="social_link github"></a>
					<a href="https://www.instagram.com/isaiasfer4" target="_blank" className="social_link instagram"></a>
				</div>
			</div>
        )
    }
}

export default Contact;