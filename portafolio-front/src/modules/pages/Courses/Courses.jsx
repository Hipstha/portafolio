import React, { Component } from 'react';

import TitlePage from '../../components/TitlePage/TitlePage';

import './Courses.scss';

// classes
import TitleNames from '../../../Classes/titleNames';

class Courses extends Component {

  courses = [
    {
      id: 1,
      name: "Programación de Apps Móviles",
      school: "Universidad Complutence de Madrid",
      date: "Diciembre 2015",
      img: "courses/c4.jpg"
    },
    {
      id: 2,
      name: "Curso básico de C#",
      school: "Platzi",
      date: "Diciembre 2016",
      img: "courses/c3.jpg"
    },
    {
      id: 3,
      name: "Git y GitHub",
      school: "Platzi",
      date: "Enero 2017",
      img: "courses/c2.jpg"
    },
    {
      id: 4,
      name: "Desarrollo Web Online",
      school: "Platzi",
      date: "Febrero 2018",
      img: "courses/c1.jpg"
    },
    {
      id: 5,
      name: "Machine Learning",
      school: "Udemy",
      date: "Junio 2019",
      img: "courses/RStudio.jpg"
    },
    {
      id: 6,
      name: "Master en JS",
      school: "Udemy",
      date: "Agosto 2019",
      img: "courses/MasterJs.jpg"
    },
    {
      id: 7,
      name: "SEO para desarrolladores",
      school: "Udemy",
      date: "Agosto 2019",
      img: "courses/SEO.jpg"
    },
    {
      id: 8,
      name: "Node JS",
      school: "Udemy",
      date: "Agosto 2019",
      img: "courses/Node.jpg"
    },
    {
      id: 9,
      name: "Marketing Online",
      school: "Udemy",
      date: "Enero 2020",
      img: "courses/Marketing.jpg"
    },
    {
      id: 10,
      name: "Angular 9",
      school: "Udemy",
      date: "Junio 2020",
      img: "courses/angularAv.jpg"
    },
    {
      id: 11,
      name: "Arquitecto de soluciones básico AWS",
      school: "Udemy",
      date: "Julio 2020",
      img: "courses/AWS.jpg"
    },
    {
      id: 12,
      name: "Master API RESTful",
      school: "Udemy",
      date: "Octubre 2020",
      img: "courses/MasterApi.jpg"
    },
    {
      id: 13,
      name: "Angular avanzado",
      school: "Udemy",
      date: "Noviembre 2020",
      img: "courses/angularAvanzado.jpg"
    },
    {
      id: 14,
      name: "ReactiveX",
      school: "Udemy",
      date: "Noviembre 2020",
      img: "courses/ReactiveX.jpg"
    },
  ];

  constructor(props) {
    super(props);
    this.state = {};

  }

  title = new TitleNames();
  
  render() {
    this.title.setTitleName('Cursos');
    return (
      <div className="courses-page animate__animated animate__fadeIn">
        <TitlePage titlePage={ this.title.getTitleName() } />

        <div className="card-columns">

          {
            this.courses.map((course) => (
              <div key={ course.id } className="card card-black">
                <div className="card-body">
                  <div className="course-img">
                    <img src={ course.img } alt="curso"/>
                  </div>
                </div>
                <div className="card-header">
                  <h3>{ course.name }</h3>
                  <div className="row">
                    <div className="col">
                      <h4>{ course.school }</h4>
                    </div>
                    <div className="col">
                      <h4>{ course.date }</h4>
                    </div>
                  </div>
                </div>

              </div>
            ))
          }

        </div>

      </div>
    );
  };
};

export default Courses;