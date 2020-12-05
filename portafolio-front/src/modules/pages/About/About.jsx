import React, { Component } from 'react';

import TitlePage from '../../components/TitlePage/TitlePage';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

import './About.scss';

// classes
import TitleNames from '../../../Classes/titleNames';

class About extends Component {

  personalSkills = [
    {
      id: 1,
      text: 'Liderazgo',
      percentage: "80%",
      icon: {
        icon: 'fas fa-child',
        iconColor: '#B3C8E3'
      }
    },
    {
      id: 2,
      text: 'Curiosidad',
      percentage: "100%",
      icon: {
        icon: 'fas fa-search',
        iconColor: '#7EA2A7'
      }
    },
    {
      id: 3,
      text: 'Auto aprendizaje',
      percentage: "90%",
      icon: {
        icon: 'fas fa-book',
        iconColor: '#425B67'
      }
    },
    {
      id: 4,
      text: 'Comunicación',
      percentage: "85%",
      icon: {
        icon: 'far fa-comments',
        iconColor: '#8A8FA3'
      }
    },
  ]

  personalHobbies = [
    {
      id: 1,
      text: 'Programación',
      percentage: "90%",
      icon: {
        icon: 'fas fa-laptop-code',
        iconColor: '#B3C8E3'
      }
    },
    {
      id: 2,
      text: 'Videojuegos',
      percentage: "90%",
      icon: {
        icon: 'fas fa-gamepad',
        iconColor: '#7EA2A7'
      }
    },
    {
      id: 3,
      text: 'Documentales',
      percentage: "90%",
      icon: {
        icon: 'fas fa-film',
        iconColor: '#425B67'
      }
    }
  ]


  title = new TitleNames();
  
  render() {
    this.title.setTitleName('Sobre mi');
    return (
      <div className="about-page animate__animated animate__fadeIn">
        <TitlePage titlePage={ this.title.getTitleName() } />

        <div className="card card-black">
          <div className="card-body">

            <div className="about-info">

              <div className="about-person">
                <div className="about-image">
                  <div className="image-content">
                    <img src="me.jpg" alt="about me"/>
                  </div>
                </div>
                <div className="about-data">
                  <div className="about-name">
                    <h3>Daniel Alejandro Cruz Pérez</h3>
                  </div>
                  <div className="position-age">
                    <div className="about-position">
                      <h4>Full Stack Developer</h4>
                    </div>
                    <div className="about-age">
                      <h4><small>23 años</small></h4>
                    </div>
                  </div>
                  <div className="about-study">
                    <h5>Pasante de Ingeniería en tecnología de software</h5>
                  </div>
                </div>
              </div>

              <div className="about-hobbies">
                <div className="personal-skills">
                  <div className="personal-skills-title">
                    <h2>Habilidades personales</h2>
                  </div>
                  <div className="personal-skills-data">
                    <div className="personal-skill">
                      {
                        this.personalSkills.map(skill => (
                          <ProgressBar key={ skill.id} 
                                       text={skill.text}
                                       percentage={skill.percentage}
                                       icon={skill.icon}             
                          />
                        ))
                      }
                    </div>
                  </div>
                </div>
                
                <div className="about-my-hobbies">
                  <div className="personal-hobies-title">
                    <h2>Hobbies</h2>
                  </div>
                  <div className="personal-hobbies-data">
                    <div className="personal-hobbie">
                      {
                        this.personalHobbies.map(skill => (
                          <ProgressBar key={ skill.id} 
                                       text={skill.text}
                                       percentage={skill.percentage}
                                       icon={skill.icon}             
                          />
                        ))
                      }
                    </div>
                  </div>
                </div>

              </div>

            </div>


          </div>
        </div>


      </div>
    );
  };
};

export default About;