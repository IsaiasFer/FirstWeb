import React from "react";

import '../styles/portfolio.css'

class Article1 extends React.Component {
  render() {
    return (
        <article className="project">
          <div className="project_details">
            <h3 className="project_title">{this.props.Title}</h3>
            <h6 className="project_university">
              {this.props.ProjectUbication}
            </h6>
            <p className="project_date">
              <small>
                <strong>Fecha:</strong>{this.props.ProjectDate}
              </small>
            </p>
            <p className="project_url">
              <small>
                <strong>Puedes ver mas en </strong>
                </small>
                <a href={this.props.ProjectUrl}>
                  Esta nota
                </a>
              
            </p>
            <p className="project_description">
              {this.props.Description}
            </p>
          </div>
          <figure className="project_imageContainer">
            <img
              className="project_image"
              loading='lazy'
              src={this.props.ProjectImageUrl}
              alt={this.props.ProjectImageAlt}
            ></img>
          </figure>
        </article>
    );
  }
}

export default Article1;
