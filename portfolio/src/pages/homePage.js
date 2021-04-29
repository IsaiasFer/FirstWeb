import React from "react";

import Hero from "../components/hero";
import Portfolio from "../components/portfolio";
import Experencia from "../components/experiencia";

import "../styles/GlobalStyles.css";

class HomePage extends React.Component {
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <React.Fragment>
        <Hero
          firstName='Isaias'/* {this.state.form.firstName} */
          lastName='Fernandez'/* {this.state.form.lastName} */
          gender='Muchacho'/* {this.state.form.jobTitle} */
          inspiration="Software"
          avatarUrl="https://i.imgur.com/fuzMYwx.jpg"
        />
        <Portfolio />
        <div className="container">
          <h2 className="event-list-title">Mas sobre mi experiencia</h2>
        </div>
        <Experencia />
        {/* <Contact onChange={this.handleChange} formValues={this.state.form} /> */}
      </React.Fragment>
    );
  }
}

export default HomePage;
