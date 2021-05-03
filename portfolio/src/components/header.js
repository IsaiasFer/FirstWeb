import React from "react";

import "../styles/header.css";
import { Link } from "react-router-dom";

class Headersito extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <nav className="menu">
            <div className="nav_firstPart">
              <ul>
                <li>
                  <a className="link" href="#Portafolio">
                    Portafolio
                  </a>
                </li>
                <li>
                  <a className="link" href="#Experiencia">
                    Experiencia
                  </a>
                </li>
                <li>
                  <a className="link" href="#WeWork">
                    Trabajemos juntos
                  </a>
                </li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="nav_secondPart">
              <ul>
                <li>Biografía</li>
                <li>
                  <Link className="link" to="/Badges">
                    Badges
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Headersito;
