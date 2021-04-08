import React from "react";

import Headersito from "../components/header";
import Badge from "../components/Badge";
import Footer from "../components/footer";
import Contact from "../components/contact";

/* import "../styles/badge.css"; */

import "../styles/burguer-icon.css";
import BadgeForm from "../components/BadgeForm";

class Badges extends React.Component {
  state = {
    form: {
      firstName: "Howard",
      lastName: "Jhonson",
      city:'Pensilvania',
      apodo: "The killer",
      twitter: "",
      image:
      "https://i.pinimg.com/originals/ba/a1/2a/baa12a9918ee49a139ef7fa0e09b56fa.jpg",
    },
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
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
      <div>
        <header className="header">
          <Headersito />
        </header>
        <div className="BadgeContainer">
          <BadgeForm
            onChange={this.handleChange}
            formValues={this.state.form}
          />
          <Badge 
            firstName={this.state.form.firstName}
            lastName={this.state.form.lastName}
            image={this.state.form.image}
            city={this.state.form.city}
            apodo={this.state.form.apodo}
            twitter={this.state.form.apodo}/>
        </div>
        <section id="WeWork" className="contact">
          <Contact onChange={this.handleChange} formValues={this.state.form} />
        </section>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Badges;
