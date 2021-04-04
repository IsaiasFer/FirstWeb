import React from 'react';

class Exp extends React.Component{
    render(){
        return(<div className="container">
        <article className="event">
            <figure className="event_imageContainer">
                <img className="event_image" src="https://i.imgur.com/tG11w9H.jpg" alt="PlatziConf" width="500"></img>
            </figure>
            <div className="event_detail">
                <h3 className="event_title">IITA Robotica</h3>
                <p className="event_description">Uno de los lugares sino el lugar donde empecé a acercarme a la tecnología de una manera tan cercana, alli aprendi a programar robots usando aArduino y bastantes variedades de nuevas tecnologías de las que jamas habia visto, tales como impresion 3D o la domotica.sin duda alguna, es el lugar indicado para Aprender sobre nuevas tecnologias en Salta </p>
                <a className="event_url" href="https://iita.com.ar/" target="_blank">Ver sitio de IITA</a>
            </div>
        </article>
        <article className="event">
            <figure className="event_imageContainer">
                <img className="event_image" src="https://i.imgur.com/kPaGJa5.jpg" alt="PlatziConf" width="500"></img>
            </figure>
            <div className="event_detail">
                <h3 className="event_title">Palestra</h3>
                <p className="event_description">Un grupo creciente de amigos jovenes motivados y alegres que nos reunimos todos los sabados sin falta, para compartir vivencias de la semana y pensamientos alrededor de una tematica en especial</p>
                <a className="event_url" href="https://www.facebook.com/palestravaqueros/" target="_blank">Palestra Vaqueros</a>
            </div>
        </article>
        <article className="event">
            <figure className="event_imageContainer">
                <img className="event_image" src="https://i.imgur.com/tmuvSTJ.jpg" alt="PlatziConf" width="500"></img>
            </figure>
            <div className="event_detail">
                <h3 className="event_title">Campo</h3>
                <p className="event_description">Uno de mis lugares favoritos en el mundo, un lugar lleno de vida y sitios por explorar, lejos de la ciudad y cerca de la hermosa simpleza de lo natural :)
                </p>
            </div>
        </article>
        <article className="event">
            <figure className="event_imageContainer">
                <img className="event_image" src="https://i.imgur.com/xKeybmM.jpg" alt="PlatziConf" width="500"></img>
            </figure>
            <div className="event_detail">
                <h3 className="event_title">Tercer puesto maraton de 4Km</h3>
                <p className="event_description">Tercer puesto a nivel global y primer puesto a nivel institucional en 4 Kilometros, en el marco de la carrera comunitaia de Salta edicion 2019, organizada por el hopital San Bernardo y que congregó a mas de 650 amantes del deporte! </p>
                <a className="event_url" href="http://www.salta.gov.ar/prensa/noticias/la-tercera-edicion-de-la-carrera-comunitaria-convoco-a-650-corredores/65899" target="_blank">Maraton 2019</a>
            </div>
        </article>
    </div>
        )
    }
}

export default Exp;