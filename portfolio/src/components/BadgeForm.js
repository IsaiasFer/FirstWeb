import React from "react";

/* import '../styles/BadgeForm.css' */

class BadgeForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="form_email">
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
            <label>Surname</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="apodo"
              value={this.props.formValues.apodo}
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
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
        </div>
        <button>Guardar</button>
        {this.props.error && <p className='errorMessage'>{this.props.error.message}</p>}
      </form>
    );
  }
}

export default BadgeForm;
