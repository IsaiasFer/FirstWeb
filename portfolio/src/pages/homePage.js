import React from "react";

import Headersito from "../components/header";
import Hero from "../components/hero";
import Article1 from "../components/article1";
import Exp from "../components/exp";
import Contact from "../components/contact";
import Footer from "../components/footer";
import BurguerIcon from "../components/burguerIcon";

class HomePage extends React.Component {
  state = {
    form: {
      firstName: "Isaias",
      lastName: "Fernandez",
      email: "",
      jobTitle: "joven",
      twitter: "",
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
  render() {
    return (
      <div>
        <div className="icon-menu burguer-button">
          <BurguerIcon />
        </div>
        <header className="header">
          <Headersito />
        </header>
        <section className="hero">
          <Hero
            firstName={this.state.form.firstName}
            lastName={this.state.form.lastName}
            gender={this.state.form.jobTitle}
            inspiration="Software"
            avatarUrl="https://i.imgur.com/fuzMYwx.jpg"
          />
        </section>
        <section id="Portafolio" className="portfolio">
          <div className="container">
            <h2>Portafolio (Proyectos destacados)</h2>
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
        <div className="container">
          <h2 className="event-list-title">Mas sobre mi experiencia</h2>
        </div>
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
          </div>
        </section>
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

export default HomePage;
