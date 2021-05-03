import React from "react";

import "../styles/hero.css";

class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="container">
          <div className="whoAreIsaias">
            <figure className="hero-imageContainer">
              <img
                className="hero-image"
                src={this.props.avatarUrl}
                alt="imagen principal del sitio"
              />
            </figure>
            <div className="isaiasInfo">
              <h1>Isaias Fernandez</h1>
              <h3>
                <div className="cargo">Desarrollador Frontend</div>
                <br />
                Co-founder en <div className="fafe">FAFE</div>
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
