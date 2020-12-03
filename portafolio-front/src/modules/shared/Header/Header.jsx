import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends Component {

  

  render() {
    const linkedin = 'https://www.linkedin.com/in/daniel-alejandro-cruz-p%C3%A9rez-5787b9127';
    return ( 
      <>
        <header className="animate__animated animate__fadeIn">
          <nav>
            <div className="header-container">
              <div className="header-left">
                <div className="title">
                  <Link to="/home">
                    <h1>Portafolio</h1>
                  </Link>
                </div>
                <div className="burger">
                  <div className="burger-container">
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>

              <div className="header-right">
                <div className="header-lenguaje">
                  <div className="header-lenguaje-content">
                    <div className="header-lenguaje-icon">
                      <img src="mexican-flag.png" alt="mexican-flag"/>
                    </div>
                    <div className="header-lenguaje-options">
                      <div className="lenguaje-options-container">
                        <div className="header-lenguaje-header">
                          <h4>Seleccione su idioma</h4>
                        </div>
                        <div className="lenguaje-separator">
                          <hr/>
                        </div>
                        <div className="lenguaje-options-container">

                          <div className="lenguaje-option">
                            <div className="lenguaje-flag">
                              <img src="mexican-flag.png" alt="bandera idioma"/>
                            </div>
                            <div className="lenguaje-title">
                              <p>Español</p>
                            </div>
                          </div>

                          <div className="lenguaje-option">
                            <div className="lenguaje-flag">
                              <img src="usa.png" alt="bandera idioma"/>
                            </div>
                            <div className="lenguaje-title">
                              <p>Inglés</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-contact">
                  <a href={ linkedin } target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin" style={{color: '#2766C2'}}></i>
                  </a>
                </div>
                <div className="header-me">
                  <div className="header-image">
                    <img src="me.jpg" alt="my personal pic"/>
                  </div>
                  <div className="header-name">
                    <p>Alejandro Cruz</p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  };
};

export default Header;