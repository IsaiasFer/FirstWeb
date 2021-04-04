import React from "react";

class Article1 extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Portafolio (Proyectos Destacados)</h2>
        <article className="project">
          <div className="project_details">
            <h3 className="project_title">Fisica al alcance de todos</h3>
            <h6 className="project_university">
              Universidad Nacional de Salta, Edición 2019
            </h6>
            <p className="project_date">
              <small>
                <strong>Fecha:</strong>01/70/2016
              </small>
            </p>
            <p className="project_url">
              <small>
                <strong>Puedes ver mas en</strong>{" "}
                <a href="https://www.lanacion.com.ar/sociedad/daniel-cordoba-profesor-fisica-salteno-hackeo-al-nid2173235">
                  Esta nota
                </a>
              </small>
            </p>
            <p className="project_description">
              Un año entero de estudiar los sabados a la mañana, a la par de
              quienes despues serian grandes exponentes de la fíca regional,
              aspirantes a grandes universidades y uno de los mejores profesores
              que pude haber tenido{" "}
            </p>
          </div>
          <figure className="project_imageContainer">
            <img
              className="project_image"
              src="https://i.imgur.com/ijsusaX.jpg"
              alt="proyecto del curso de react native"
            ></img>
          </figure>
        </article>
        <article className="project">
          <div className="project_details">
            <h3 className="project_title">Mejor Hablar de Ciertas Cosas</h3>
            <h6 className="project_university">
              CoPAIPA Consejo profesional de Agrimensores, Ingenieros y
              Profesionales Afines
            </h6>
            <p className="project_date">
              <small>
                <strong>Fecha:</strong>26/09/2017
              </small>
            </p>
            <p className="project_url">
              <small>
                <strong>Puedes ver mas en</strong>
                <a
                  target="_blank"
                  href="http://www.salta.gov.ar/prensa/noticias/hoy-se-desarrollara-un-encuentro-de-relatorias-sobre-educacion-sexual-integral/54712"
                >
                  esta nota
                </a>{" "}
              </small>
            </p>
            <p className="project_description">
              Evento organizado por el Ministerio de Educación, Cultura, Ciencia
              y Tecnología , en los recintos de CoPAIPA, en donde, en presencia
              de mas de 50 escuelas me tocó ser expositor y diseñador de un
              video en el marco de "mejor hablar de ciertas cosas" edicion 2019
              , un dispositivo educativo lanzado a la provincia promulgando la
              erradicación de los estereotipos de género
            </p>
          </div>
          <figure className="project_imageContainer">
            <img
              className="project_image"
              src="https://i.imgur.com/SUFO0x4.jpg"
              alt="Mejor habar de ciertas cosas"
            ></img>
          </figure>
        </article>
      </div>
    );
  }
}

export default Article1;
