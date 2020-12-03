import React, { Component } from 'react';

// Components
import TitlePage from '../../components/TitlePage/TitlePage';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import PolarChart from '../../components/PolarChart/PolarChart';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import LittleAbout from '../../components/LittleAbout/LittleAbout';

// classes
import TitleNames from '../../../Classes/titleNames';

// styles
import './Resume.scss';

class Resume extends Component {

  summaryCardsData = [];
  polarChartData = [];
  progressBarsData = [];

  constructor(props) {
    super(props);
    this.state = {};
    this.setSummaryCardData([
      {
        id: 1,
        number: "3+",
        title: 'Años de experiencia',
        icon: 'fab fab-medapps'
      },
      {
        id: 2,
        number: "3",
        title: 'Empresas en las que he trabajado',
        icon: 'far fa-building'
      },
      {
        id: 3,
        number: "15+",
        title: 'Proyectos desarrollados',
        icon: 'fas fa-laptop-code'
      },
      {
        id: 4,
        number: "14",
        title: 'Diferentes tecnologías manejadas',
        icon: 'fas fa-code'
      },
    ]);

    this.setProgressBarsData([
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
    ])
  
    this.setPolarChartData(
      [
        {
          data: [
            85,
            80,
            80,
            40,
            70
          ],
          backgroundColor: [
            '#B3C8E3',
            '#7EA2A7',
            '#425B67',
            '#8A8FA3',
            '#D1AEC3'
          ],
          borderColor: [
            '#B3C8E3',
            '#7EA2A7',
            '#425B67',
            '#8A8FA3',
            '#D1AEC3'
          ],
          label: 'My dataset' // for legend
        }
      ],
      [
        'Front End',
        'Back End',
        'Bases de datos',
        'Desarrollo móvil',
        'Inteligencia Artificial'
      ]
    )
  }


  setSummaryCardData(array) {
    this.summaryCardsData = array;
  }

  getSummaryCardData() {
    return this.summaryCardsData;
  }

  setProgressBarsData(array) {
    this.progressBarsData = array;
  }

  getProgressBarsData() {
    return this.progressBarsData;
  }

  setPolarChartData(dataset, labels) {
    this.polarChartData = [dataset, labels];
  }

  getPolarChartData() {
    return this.polarChartData;
  }

  title = new TitleNames();

  render() {
    this.title.setTitleName('Home');
    return (
      <div className="resume-page animate__animated animate__fadeIn">
        <TitlePage titlePage={ this.title.getTitleName() } />

        <section className="row card-deck">
          {
            this.getSummaryCardData().map((summaryCard) => (
              <SummaryCard number={ summaryCard.number } 
                           title={ summaryCard.title }
                           icon={ summaryCard.icon }
                            key={ summaryCard.id }  
              />
            ))
          }
        </section>

        <section className="row card-deck second-row">
          <div className="col-6">
            <article className="skills-chart card card-black">
                <div className="card-header text-center">
                  <h3>Habilidad en metodologías</h3>
                </div>
                <div className="card-body">
                  <PolarChart data={ this.getPolarChartData() } />
                </div>
            </article>

            <article className="skills-about skills-chart card card-black">
                <div className="card-header text-center">
                  <h3>Un poco sobre mí</h3>
                </div>
                <div className="card-body">
                  <LittleAbout />
                </div>
            </article>
          </div>

          <article className="col-6 card card-black">
              <div className="card-header text-center">
                <h3>Habilidades en general</h3>
              </div>
              <div className="card-body">
              {
                this.getProgressBarsData().map(progress => (
                    <ProgressBar  key={ progress.id } text={ progress.text } percentage={ progress.percentage }icon={ progress.icon } />
                ))
              }
              </div>
          </article>

        </section>
      </div>
    );
  };
};

export default Resume;