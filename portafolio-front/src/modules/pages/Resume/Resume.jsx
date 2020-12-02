import React, { Component } from 'react';

// Components
import TitlePage from '../../components/TitlePage/TitlePage';
import SummaryCard from '../../components/SummaryCard/SummaryCard';

// classes
import TitleNames from '../../../Classes/titleNames';

// styles
import './Resume.scss';

class Resume extends Component {

  title = new TitleNames();
  
  render() {
    this.title.setTitleName('Home');
    return (
      <div className="resume-page animate__animated animate__fadeIn">
        <TitlePage titlePage={ this.title.getTitleName() } />

        <section className="row card-deck">
            <SummaryCard number="3" 
                         title="Años de experiencia" 
                         icon="fab fa-medapps" />
            <SummaryCard number="3" 
                         title="Empresas en que he trabajado" 
                         icon="far fa-building" />
            <SummaryCard number="10" 
                         title="Proyectos desarrollados" 
                         icon="fas fa-laptop-code" />
            <SummaryCard number="7" 
                         title="Lenguajes de utilizados" 
                         icon="fas fa-code" />
        </section>
      </div>
    );
  };
};

export default Resume;