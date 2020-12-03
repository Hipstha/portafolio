import React, { Component } from 'react';

import TitlePage from '../../components/TitlePage/TitlePage';

// classes
import TitleNames from '../../../Classes/titleNames';

class Contact extends Component {
  title = new TitleNames();
  
  render() {
    this.title.setTitleName('Contácto');
    return (
      <div className="resume-page animate__animated animate__fadeIn">
        <TitlePage titlePage={ this.title.getTitleName() } />

        <div className="card card-black">
          <div className="card-header">
            <h3>Puedes contactarme enviando un mensaje por este formulario y con gusto te contactaré por un Email</h3>
          </div>
          <div className="card-body">
            <form>

              <div className="form-group">
                <label for="exampleInputEmail1">Nombre</label>
                <input type="text" 
                       className="form-control"
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp" 
                       placeholder="Ingrese su nombre" 
                />
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" 
                       className="form-control"
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp" 
                       placeholder="Ingrese su email" 
                />
                <small>Su email no se compartirá con nadie</small>
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Empresa</label>
                <input type="text" 
                       className="form-control"
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp" 
                       placeholder="Ingrese su nombre" 
                />
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Motivo de contácto</label>
                <input type="text" 
                       className="form-control"
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp" 
                       placeholder="Ingrese su nombre" 
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block float-right">Submit</button>

            </form>
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col">
                <h3>
                  También puede contactarme por medio de LinkedIn.
                </h3>
              </div>
              <div className="col">
                <div className="linkedin">
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  };
};

export default Contact;