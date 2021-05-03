import React from "react";

import Article1 from "../components/article1";

import '../styles/portfolio.css'

class Portfolio extends React.Component {
  render() {
    return (
      <section id="Portafolio" className="portfolio">
        <div className="container">
          <h2>❑Proyectos destacados</h2>
          <Article1
            Title="Fisica al alcance de todos"
            ProjectUbication="Universidad Nacional de Salta, Edición 2019"
            ProjectDate="01/03/2019"
            ProjectUrl="https://www.lanacion.com.ar/sociedad/daniel-cordoba-profesor-fisica-salteno-hackeo-al-nid2173235"
            Description="Un año entero de estudiar los sabados a la mañana, a la par de
              quienes despues serian grandes exponentes de la fíca regional,
              aspirantes a grandes universidades y uno de los mejores profesores
              que pude haber tenido"
            ProjectImageUrl="https://i.imgur.com/ijsusaX.jpg"
            ProjectImageAlt="Foto tomada el primer día del taller en 2019"
          />
          <Article1
            Title="Mejor Hablar de Ciertas Cosas"
            ProjectUbication="CoPAIPA Consejo profesional de Agrimensores, Ingenieros y
              Profesionales Afines"
            ProjectDate="26/09/2017"
            ProjectUrl="http://www.salta.gov.ar/prensa/noticias/hoy-se-desarrollara-un-encuentro-de-relatorias-sobre-educacion-sexual-integral/54712"
            Description='Evento organizado por el Ministerio de Educación, Cultura, Ciencia
              y Tecnología , en los recintos de CoPAIPA, en donde, en presencia
              de mas de 50 escuelas me tocó ser expositor y diseñador de un
              video en el marco de "mejor hablar de ciertas cosas" edicion 2019
              , un dispositivo educativo lanzado a la provincia promulgando la
              erradicación de los estereotipos de género'
            ProjectImageUrl="https://i.imgur.com/SUFO0x4.jpg"
            ProjectImageAlt="Mejor habar de ciertas cosas"
          />
        </div>
      </section>
    );
}
}
export default Portfolio;