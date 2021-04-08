import React from "react";

import "../styles/contact.css";

import twitterLogo from '../images/twitter.svg'
import facebookLogo from '../images/facebook.svg'
import githubLogo from '../images/github.svg'
import instagramLogo from '../images/instagram.svg'

class Contact extends React.Component {
  /* handleChange = (e) => {
    console.log({
		name:e.target.name,
		value:e.target.value})
    this.setState({
      [e.target.name]: e.target.value,
    });
  }; */
  handleClick = (e) => {
    console.log("Button was clicked");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
	console.log(this.props.formValues)
  };
  render() {
    return (
      <div className="container">
        {/* <form onSubmit={this.handleSubmit} className="form_email">
        	<h3>¿Creamos algo juntos?</h3>
			<div className="label-input">

          <div className="form-group">
            <label>Nombre</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Titulo</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <div className="form-group">
            <label>Mail</label>
            <input
              onChange={this.props.onChange}
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
			</div>
          <button onClick={this.handleClick}>Guardar</button>
        </form> */}
        <div className="social">
          <a
            href="https://twitter.com/isaiasfer4"
            target="_blank"
            rel="noreferrer"
            className="social_link twitter"
          ><img alt='Twitter de Isaias Fernandez' src={twitterLogo}/> </a>
          <a
            href="https://www.facebook.com/isaiasFer4"
            target="_blank"
            rel="noreferrer"
            className="social_link facebook"
          ><img alt='Facebook de Isaias Fernandez' src={facebookLogo}/> </a>
          <a
            href="https://github.com/IsaiasFer"
            target="_blank"
            rel="noreferrer"
            className="social_link github"
          ><img alt='GitHub de Isaias Fernandez' src={githubLogo}/> </a>
          <a
            href="https://www.instagram.com/isaiasfer4"
            target="_blank"
            rel="noreferrer"
            className="social_link instagram"
          ><img alt='Instagram de Isaias Fernandez' className='socialLinks' src={instagramLogo}/> </a>
        </div>
      </div>
    );
  }
}

export default Contact;
