import React, { Component } from 'react';
import './LittleAbout.scss';

class LittleAbout extends Component {
  render() {
    return (
      <div className="little-about">
        <div className="little-about-content">
          <div className="little-about-body">
            <div className="little-about-text">
              <p>
                Soy un apasionado desarrollador de software orientado al campo Full Stack con poco más de 3 años de experiencia profesional.
              </p>
              <p>
                He trabajado en diversos proyectos de software para diferentes sectores industriales tales como: Telecomunicaciones, 
                Recursos Humanos, Entretenimiento y el sector Financiero. 
              </p>
              <p>
                Para mí, la programación mas que una simple forma de ganarse la vida, es una manera de contribuir y ser parte del avance tecnológico
                que mueve al mundo día a día, por lo que soy un apasionado de apoyar en la comunidad de código abierto, enseñar y/o promover de conocimientos
                a otros colegas desarrolladores, y a su vez aprender de ellos, dado a que considero que nunca sabemos lo suficiente.
              </p>
            </div>
          </div>
          <div className="little-about-footer text-center">
            <div className="footer-name">
              <h4>Daniel Alejandro Cruz Pérez</h4>
            </div>
            <div className="footer-sign">
              <img src="firma.png" alt="mi firma"/>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default LittleAbout;
