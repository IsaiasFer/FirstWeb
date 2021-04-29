import React from "react";

import papelViejo from "../images/papelViejo.png";
import Gravatar from "./gravatar";


class Badge extends React.Component {
  render() {
    return (
      <div className="BadgeWithBackg">
        <div className="Badge">
          <div className="BadgeTitle">
            <h6>Banco Estatal de {this.props.city}</h6>
            <div className="Wanted">
              <h1>Wanted</h1>
              <h3>✮✮dead or alive✮✮</h3>
            </div>
          </div>
          <div className="BadgeContent">
            <div className="card-section1">
              <figure className="card-image_container">
                <Gravatar clase='card-image' email={this.props.email}/>
              </figure>
            </div>
            <div className="card-section2">
              <ul className="listadeinfo">
                <li className="info">
                  <h1 className="Reward">✡✡REWARD: $10000✡✡</h1>
                </li>
                <li className="info Name">
                  {this.props.firstName} "{this.props.apodo}" <br />
                  {this.props.lastName}
                </li>
                {/* <li className="info">Apellido</li>
              <li className="info">Twitter</li>
              <li className="info">Trabajo</li> */}
              </ul>
            </div>
          </div>
        </div>
        <img className="papelViejo" src={papelViejo} alt="Fondo" />
      </div>
    );
  }
}

export default Badge;
