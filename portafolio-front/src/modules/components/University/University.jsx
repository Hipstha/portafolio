import React, { Component } from 'react';
import './University.scss';


class University extends Component {
  render() {
    return (
      <div className="university-content">
        <div className="university-logos">
          <div className="logo-uanl">
            <img src="uanl.png" alt="logo de la universidad"/>
          </div>
          <div className="logo-fime">
            <img src="fme.png" alt="logo de la facultad"/>
          </div>
        </div>
        <div className="univesity-title">
          <h2>Universidad Autónoma de Nuevo León</h2>
        </div>
        <div className="school-title">
          <h3>Facultad de Ingeniería Mecánica y Eléctrica</h3>
        </div>
        <div className="separator">
          <hr/>
        </div>
        <div className="relevant-data">
          <div className="career">
            <h4>Ingeniería en Tecnología de software</h4>
          </div>
          <div className="data-career">
            <p>Generación 2014-2020</p>
            <p>Pasante</p>
          </div>
        </div>
      </div>
    );
  };
};

export default University;