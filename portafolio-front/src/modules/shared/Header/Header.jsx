import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return ( 
      <>
        <header>
          <nav>
            <div className="header-container">
              <div className="header-left">
                <div className="title">
                  <h1>Portafolio</h1>
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
                  <i className="fas fa-envelope"></i>
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