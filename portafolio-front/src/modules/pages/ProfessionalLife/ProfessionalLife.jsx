import React, { Component } from 'react';

import TitlePage from '../../components/TitlePage/TitlePage';

// classes
import TitleNames from '../../../Classes/titleNames';

class ProfessionalLife extends Component {
  title = new TitleNames();
  
  render() {
    this.title.setTitleName('Mi vida profesional');
    return (
      <div className="resume-page animate__animated animate__fadeIn">
        <TitlePage titlePage={ this.title.getTitleName() } />
      </div>
    );
  };
};

export default ProfessionalLife;