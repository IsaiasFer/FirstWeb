import React from "react";

/* import '../styles/BadgeForm.css' */

class BadgeForm extends React.Component {

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
      <form onSubmit={this.handleSubmit} className="form_email">
        <h3>BUSCADO</h3>
        <div className="label-input">
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Apodo</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="apodo"
              value={this.props.formValues.apodo}
            />
          </div>
          <div className="form-group">
            <label>image URL</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="image"
              value={this.props.formValues.image}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="city"
              value={this.props.formValues.city}
            />
          </div>
          {/* <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div> */}
        </div>
        {/* <button onClick={this.handleClick}>Guardar</button> */}
      </form>
    );
  }
}

export default BadgeForm;
