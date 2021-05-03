import React from "react";

import Exp from "../components/exp";

class Experencia extends React.Component {
  render() {
    return (
        <section id="Experiencia" className="event-list">
        <div className="container">
          <Exp
            Title="IITA Robotica"
            ImageUrl="https://i.imgur.com/tG11w9H.jpg"
            ImageAlt="Curso de Robotica en IITA"
            Description="Uno de los lugares sino el lugar donde empecé a acercarme a la tecnología de una manera tan cercana, alli aprendi a programar robots usando aArduino y bastantes variedades de nuevas tecnologías de las que jamas habia visto, tales como impresion 3D o la domotica.sin duda alguna, es el lugar indicado para Aprender sobre nuevas tecnologias en Salta"
            Link="https://iita.com.ar/"
            Alt="Ver sitio de IITA"
          />
          <Exp
            Title="Palestra"
            ImageUrl="https://i.imgur.com/kPaGJa5.jpg"
            ImageAlt=""
            Description="Un grupo creciente de amigos jovenes motivados y alegres que nos reunimos todos los sabados sin falta, para compartir vivencias de la semana y pensamientos alrededor de una tematica en especial"
            Link="https://www.facebook.com/palestravaqueros/"
            Alt="Palestra Vaqueros"
          />
          <Exp
            Title="Campo"
            ImageUrl="https://i.imgur.com/tmuvSTJ.jpg"
            ImageAlt=""
            Description="Uno de mis lugares favoritos en el mundo, un lugar lleno de vida y sitios por explorar, lejos de la ciudad y cerca de la hermosa simpleza de lo natural :)"
          />
          <Exp
            Title="Tercer puesto maraton de 4Km"
            ImageUrl="https://i.imgur.com/xKeybmM.jpg"
            ImageAlt=""
            Description="Tercer puesto a nivel global y 1er puesto a nivel institucional en 4 Kilometros, en el marco de la carrera comunitaia de Salta edicion 2019, organizada por el hopital San Bernardo y que congregó a mas de 650 amantes del deporte!"
            Link="http://www.salta.gov.ar/prensa/noticias/la-tercera-edicion-de-la-carrera-comunitaria-convoco-a-650-corredores/65899"
            Alt="Maraton 2019"
          />
          <Exp
            Title="Estudios en Platzi"
            ImageUrl="https://tentulogo.com/wp-content/uploads/2019/12/platzy-logo.jpg"
            ImageAlt=""
            Description="Tercer puesto a nivel global y 1er puesto a nivel institucional en 4 Kilometros, en el marco de la carrera comunitaia de Salta edicion 2019, organizada por el hopital San Bernardo y que congregó a mas de 650 amantes del deporte!"
            Link="http://www.salta.gov.ar/prensa/noticias/la-tercera-edicion-de-la-carrera-comunitaria-convoco-a-650-corredores/65899"
            Alt="Platzi"
          />
        </div>
      </section>
    );
  }
}

export default Experencia;
