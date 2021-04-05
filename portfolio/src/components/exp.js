import React from "react";

import "../styles/exp.css";

class Exp extends React.Component {
  render() {
    return (
      <article className="event">
        <figure className="event_imageContainer">
          <img
            className="event_image"
            src={this.props.ImageUrl}
            alt={this.props.ImageAlt}
            width="500"
          ></img>
        </figure>
        <div className="event_detail">
          <h3 className="event_title">{this.props.Title}</h3>
          <p className="event_description">{this.props.Description}</p>
          <a className="event_url" href={this.props.Link} target="_blank">
            {this.props.Alt}
          </a>
        </div>
      </article>
    );
  }
}

export default Exp;
