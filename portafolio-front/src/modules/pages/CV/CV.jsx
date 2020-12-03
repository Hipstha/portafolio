import React, { Component } from 'react';

import TitlePage from '../../components/TitlePage/TitlePage';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Job from '../../components/Job/Job';
import University from '../../components/University/University';

// classes
import TitleNames from '../../../Classes/titleNames';
import ComponentData from '../../../Classes/componentData';

import './CV.scss';

class CV extends Component {

  techData = new ComponentData();
  lenguaje = new ComponentData();
  jobData = new ComponentData();
  title = new TitleNames();
  
  constructor(props) {
    super(props);
    this.state = {};

    this.techData.setProgressBarsData(
      [
        {
          id: 1,
          text: 'JavaScript',
          percentage: "85%",
          icon: {
            icon: 'fab fa-js-square',
            iconColor: '#EFD81D'
          }
        },
        {
          id: 2,
          text: 'TypeScript',
          percentage: "85%",
          icon: {
            icon: 'fab fa-js-square',
            iconColor: '#2B78C6'
          }
        },
        {
          id: 3,
          text: 'Angular 2+',
          percentage: "80%",
          icon: {
            icon: 'fab fa-angular',
            iconColor: '#BC202E'
          }
        },
        {
          id: 4,
          text: 'React',
          percentage: "75%",
          icon: {
            icon: 'fab fa-react',
            iconColor: '#5ED6F4'
          }
        },
        {
          id: 5,
          text: 'Python',
          percentage: "70%",
          icon: {
            icon: 'fab fa-python',
            iconColor: '#F2CA3E'
          }
        },
        {
          id: 6,
          text: 'R',
          percentage: "80%",
          icon: {
            icon: 'fab fa-r-project',
            iconColor: '#2565B3'
          }
        },
        {
          id: 7,
          text: 'C#',
          percentage: "80%",
          icon: {
            icon: 'fas fa-code',
            iconColor: '#652075'
          }
        },
        {
          id: 8,
          text: 'Node JS',
          percentage: "80%",
          icon: {
            icon: 'fab fa-node-js',
            iconColor: '#7BA91D'
          }
        },
        {
          id: 9,
          text: 'HTML/CSS',
          percentage: "90%",
          icon: {
            icon: 'fab fa-html5',
            iconColor: '#EE933D'
          }
        },
        {
          id: 10,
          text: 'Dart / Flutter',
          percentage: "45%",
          icon: {
            icon: 'fas fa-mobile-alt',
            iconColor: '#3BA8E1'
          }
        },
        {
          id: 11,
          text: 'MySQL',
          percentage: "85%",
          icon: {
            icon: 'fas fa-database',
            iconColor: '#1D5F86'
          }
        },
        {
          id: 12,
          text: 'MongoDB',
          percentage: "75%",
          icon: {
            icon: 'fas fa-database',
            iconColor: '#208735'
          }
        },
        {
          id: 13,
          text: 'Data Science',
          percentage: "75%",
          icon: {
            icon: 'fas fa-calculator',
            iconColor: '#36A8D1'
          }
        },
        {
          id: 14,
          text: 'Ethical Hacking',
          percentage: "40%",
          icon: {
            icon: 'fas fa-user-secret',
            iconColor: '#E3292A'
          }
        }
      ]
    );
    
    this.lenguaje.setProgressBarsData(
      [
        {
          id: 1,
          text: 'Español',
          percentage: "100%",
          icon: {
            icon: 'fas fa-language',
            iconColor: '#196A47'
          }
        },
        {
          id: 2,
          text: 'Inglés',
          percentage: "80%",
          icon: {
            icon: 'fas fa-language',
            iconColor: '#3A396B'
          }
        }
      ]
    )

    this.jobData.setJobData([
      {
        id: 1,
        name: 'MKM SAPI de CV',
        position: 'Full Stack Developer Jr.',
        startDate: 'Septiembre 2020',
        endDate: 'Noviembre: 2020',
        tools: [
          {
            id: 1,
            title: 'ASP.Net Core 3.1',
            summary: 'Back End, Machine Learning, diseño y arquitectura de Bases de datos y APIs.'
          },
          {
            id: 2,
            title: 'Angular 8',
            summary: 'Front End.'
          },
          {
            id: 3,
            title: 'Blazor',
            summary: 'Front End'
          },
          {
            id: 4,
            title: 'Python',
            summary: 'Web Scrapping'
          },
          {
            id: 5,
            title: 'Burp Suite',
            summary: 'PenTesting'
          },
          {
            id: 6,
            title: 'Css/Sass',
            summary: 'Diseño web'
          },
          {
            id: 7,
            title: 'Github',
            summary: 'Sistema de versionamiento'
          }
        ],
        responsabilities: [
          {
            id: 1,
            description: 'Desarrollo Web' 
          },
          {
            id: 2,
            description: 'Arquitectura y diseño de bases de datos' 
          },
          {
            id: 3,
            description: 'Cloud Computing' 
          },
          {
            id: 4,
            description: 'WhiteBox Ethical Hacking' 
          },
          {
            id: 5,
            description: 'Machine Learning' 
          },
          {
            id: 6,
            description: 'Web Scrapping' 
          },
        ]
      },
      {
        id: 2,
        name: 'HRTools',
        position: 'Web Developer Jr.',
        startDate: 'Mayo 2019',
        endDate: 'Junio: 2020',
        tools: [
          {
            id: 1,
            title: 'PHP',
            summary: 'Back End'
          },
          {
            id: 2,
            title: 'Node JS',
            summary: 'Back End.'
          },
          {
            id: 3,
            title: 'WordPress',
            summary: 'Front End'
          },
          {
            id: 4,
            title: 'Angular 8',
            summary: 'Front End'
          },
          {
            id: 6,
            title: 'Css/Sass',
            summary: 'Diseño web'
          },
          {
            id: 7,
            title: 'GitLab',
            summary: 'Sistema de versionamiento'
          }
        ],
        responsabilities: [
          {
            id: 1,
            description: 'Desarrollo de sitios web' 
          },
          {
            id: 2,
            description: 'Desarrollo de aplicaciones web' 
          },
          {
            id: 3,
            description: 'Diseño UI/UX' 
          },
          {
            id: 4,
            description: 'Optimización web' 
          },
          {
            id: 5,
            description: 'Arquitectura y diseño de bases de datos' 
          },
          {
            id: 6,
            description: 'SEO y SEM' 
          },
          {
            id: 7,
            description: 'Analítica web' 
          },
        ]
      },
      {
        id: 3,
        name: 'Milenio Diario',
        position: 'Web Developer Jr.',
        startDate: 'Diciembre 2017',
        endDate: 'Enero: 2019',
        tools: [
          {
            id: 1,
            title: 'PHP, Symfony',
            summary: 'Back End, Machine Learning, diseño y arquitectura de Bases de datos y APIs.'
          },
          {
            id: 2,
            title: 'WordPress',
            summary: 'Front End.'
          },
          {
            id: 3,
            title: 'HTML.Twig',
            summary: 'Front End'
          },
          {
            id: 6,
            title: 'Css/Sass',
            summary: 'Diseño web'
          },
          {
            id: 7,
            title: 'GitLab',
            summary: 'Sistema de versionamient'
          }
        ],
        responsabilities: [
          {
            id: 1,
            description: 'Desarrollo Web' 
          },
          {
            id: 2,
            description: 'Diseño UI/UX' 
          },
          {
            id: 3,
            description: 'Optimización web' 
          }
        ]
      }
    ])

  }

  render() {
    this.title.setTitleName('CV');
    return (
      <div className="cv-page animate__animated animate__fadeIn">
        <TitlePage titlePage={ this.title.getTitleName() } />

        <div className="row">
          <div className="col university">
            <div className="card card-black">
              <div className="card-body univeristy">
                <University />
              </div>
            </div>
          </div>
        </div>

        <div className="row card-deck">

          <div className="col">
            <div className="card card-black">
              <div className="card-header text-center">
                <h3>Habilidades téncicas</h3>
              </div>
              <div className="card-body">
              {
                this.techData.getProgressBarsData().map(progress => (
                    <ProgressBar  key={ progress.id } text={ progress.text } percentage={ progress.percentage }icon={ progress.icon } />
                ))
              }
              </div>
            </div>

            <div className="card card-black">
              <div className="card-header text-center">
                <h3>Manejo de idiomas</h3>
              </div>
              <div className="card-body">
                {
                  this.lenguaje.getProgressBarsData().map(progress => (
                      <ProgressBar  key={ progress.id } text={ progress.text } percentage={ progress.percentage }icon={ progress.icon } />
                  ))
                }
              </div>
            </div>

            <div className="card card-black">
              <div className="card-header text-center">
                <h3>Metodología preferida</h3>
              </div>
              <div className="card-body">
                <div className="favorite">
                  <div className="favorite-title">
                    <h4 className="text-center">
                      <strong>MEAN stack </strong>
                      <small>(Mongo, Express, Angular, Node)</small>
                    </h4>
                  </div>
                  <div className="favorite-img-container">
                    <div className="favorite-img">
                      <img src="mean-stack.png" alt="Mean Stack"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col">
            
            <div className="card profesional-history card-black">
              <div className="card-header text-center">
                <h3>Historial profesional</h3>
              </div>
              <div className="card-body">

                <div className="profesional-history-content">
                  {
                    this.jobData.getJobData().map(job => (
                      <Job key={job.id} jobData={job} />
                    ))
                  }
                </div>

              </div>
            </div>

          </div>

          

        </div>

      </div>
    );
  };
};

export default CV;