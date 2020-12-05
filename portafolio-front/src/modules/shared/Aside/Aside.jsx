import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Aside.scss';

class Aside extends Component {

  menuOptionsArray = [];

  constructor(props) {
    super(props);
    this.state = {
      activeLink: 'Home'
    }
  }

  setMenuOptions(menuOptions) {
    this.menuOptionsArray = menuOptions;
  }

  getMenuOptions () {
    return this.menuOptionsArray;
  }

  render() {
    this.setMenuOptions([
      {
        id: 1,
        title: 'Home',
        path: '/home',
        icon: 'fas fa-house-user'
      },
      {
        id: 2,
        title: 'CV',
        path: '/cv',
        icon: 'fas fa-briefcase'
      },
      {
        id: 3,
        title: 'Cursos',
        path: '/projects',
        icon: 'fab fa-leanpub'
      },
      {
        id: 4,
        title: 'Sobre mi',
        path: '/about-me',
        icon: 'fas fa-info'
      },
      {
        id: 5,
        title: 'Mi historia',
        path: '/my-history',
        icon: 'fas fa-smile'
      },
      {
        id: 6,
        title: 'LinkedIn',
        path: 'https://www.linkedin.com/in/daniel-alejandro-cruz-p%C3%A9rez-5787b9127',
        icon: 'fab fa-linkedin'
      },
    ]);

    return (
      <>
        <aside className="animate__animated animate__fadeIn">
          <div className="aside-content">
            <div className="aside-header">
              <div className="aside-header-content">

                <div className="aside-user">
                  <div className="aside-user-img">
                    <img src="me.jpg" alt="mi foto"/>
                  </div>
                  <div className="aside-info">
                    <div className="aside-name">
                      <p>Alejandro Cruz</p>
                    </div>
                    <div className="aside-data">
                      <p>Full Stack developer</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div className="aside-separator">
              <hr/>
            </div>

            <div className="aside-body">
                <div className="aside-body-content">

                  <div className="aside-menu">

                    <div className="aside-menu-title">
                      <h3>Opciones</h3>
                    </div>

                    <div className="aside-menu-options">

                    {
                        this.getMenuOptions().map( option => (
                          option.title !== 'LinkedIn' ? (
                            <Link to={ option.path }
                              key={ option.id }
                              className="aside-menu-option">
                              <div className="aside-menu-icon">
                                <i className={ option.icon }></i>
                              </div>
                              <div className="option-menu-text">
                                <p>{ option.title }</p>
                              </div>
                            </Link>
                          ) : (
                            <a href={option.path} target="_blank" rel="noreferrer"
                              key={ option.id }
                              className="aside-menu-option" style={{color: '#2766C2'}}>
                              <div className="aside-menu-icon" >
                                <i className={ option.icon }></i>
                              </div>
                              <div className="option-menu-text">
                                <p>{ option.title }</p>
                              </div>
                            </a>
                          )
                        ))
                      }  
                    </div>
                  </div>

                </div>
              </div>
          </div>
        </aside>
      </>
    );
  };
};

export default Aside;
